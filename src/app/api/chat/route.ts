import { NextRequest } from "next/server";
import { buildSystemPrompt } from "@/lib/persona";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "openai/gpt-oss-120b:free";
const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const MAX_MESSAGES = 16;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Server is missing the OpenRouter API key." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const sanitized = incoming
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  if (sanitized.length === 0) {
    return new Response(JSON.stringify({ error: "No message provided." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages = [
    { role: "system" as const, content: buildSystemPrompt() },
    ...sanitized,
  ];

  let upstream: Response;
  try {
    upstream = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://markzais.com",
        "X-Title": "Mark Zais Digital Twin",
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        stream: true,
        temperature: 0.5,
        max_tokens: 800,
      }),
    });
  } catch (e) {
    console.error("[chat] upstream fetch failed:", e);
    return new Response(
      JSON.stringify({ error: "Could not reach the AI service." }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    return new Response(
      JSON.stringify({
        error: "The AI service returned an error.",
        status: upstream.status,
        detail: detail.slice(0, 500),
      }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }

  // Transform OpenRouter's SSE stream into a plain text token stream.
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const raw of lines) {
            const line = raw.trim();
            if (!line || !line.startsWith("data:")) continue;
            const data = line.slice(5).trim();
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);
              const delta: string | undefined =
                json.choices?.[0]?.delta?.content ??
                json.choices?.[0]?.message?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch {
              // ignore keep-alive comments / partial JSON
            }
          }
        }
        controller.close();
      } catch {
        controller.error(new Error("Stream interrupted."));
      } finally {
        reader.releaseLock();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X, ArrowUp, Sparkles, RotateCcw } from "lucide-react";
import { suggestedQuestions } from "@/lib/persona";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi — I'm Mark's digital twin. Ask me anything about my career, expertise, or how we might work together.",
};

function renderContent(text: string) {
  // Lightweight markdown: paragraphs, bullets, and **bold**.
  const blocks: React.ReactNode[] = [];
  const lines = text.split("\n");
  let list: string[] = [];

  const flushList = (key: string) => {
    if (list.length) {
      blocks.push(
        <ul key={key} className="my-1.5 list-disc space-y-1 pl-4">
          {list.map((li, i) => (
            <li key={i}>{renderInline(li)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (/^[-*•]\s+/.test(trimmed)) {
      list.push(trimmed.replace(/^[-*•]\s+/, ""));
    } else {
      flushList(`ul-${idx}`);
      if (trimmed) {
        blocks.push(
          <p key={`p-${idx}`} className="my-1 first:mt-0 last:mb-0">
            {renderInline(trimmed)}
          </p>,
        );
      }
    }
  });
  flushList("ul-end");
  return blocks;
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-semibold text-white">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;

    setError(null);
    setInput("");
    const next = [...messages, { role: "user" as const, content }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.filter((m) => m.content.trim()),
        }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        let msg = "Something went wrong. Please try again.";
        try {
          const j = await res.json();
          if (j?.error) msg = j.error;
        } catch {}
        throw new Error(msg);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
      if (!acc.trim()) {
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = {
            role: "assistant",
            content: "Sorry — I didn't catch that. Could you rephrase your question?",
          };
          return copy;
        });
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setMessages((prev) => prev.slice(0, -1));
      setError((err as Error).message || "Connection error.");
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([GREETING]);
    setError(null);
    setBusy(false);
  }

  const showSuggestions = messages.length === 1 && !busy;

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-violet text-ink shadow-[0_10px_40px_-8px_rgba(56,189,248,0.6)] sm:bottom-6 sm:right-6"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Chat with Mark's digital twin"}
      >
        <span className="absolute inset-0 rounded-full bg-accent/40 blur-md transition-opacity duration-300 group-hover:opacity-80" />
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative"
            >
              <X className="h-6 w-6" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative"
            >
              <MessageSquare className="h-6 w-6" strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-ink bg-violet" />
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-24 z-[60] flex h-[min(70vh,560px)] flex-col overflow-hidden rounded-2xl border border-line bg-ink-soft/95 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[400px]"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 border-b border-line/70 bg-gradient-to-r from-accent/[0.08] to-violet/[0.08] px-4 py-3.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-violet font-display text-sm font-bold text-ink">
                MZ
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-soft bg-emerald-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-semibold text-white">
                  Mark Zais
                  <span className="ml-1.5 font-sans text-[11px] font-normal text-accent">
                    Digital Twin
                  </span>
                </p>
                <p className="flex items-center gap-1.5 text-[11px] text-mute">
                  <Sparkles className="h-3 w-3 text-violet" />
                  AI-powered · answers about my career
                </p>
              </div>
              <button
                onClick={reset}
                className="flex h-8 w-8 items-center justify-center rounded-md text-mute transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Reset conversation"
                title="Reset conversation"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-md text-mute transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-sm bg-accent text-ink"
                        : "rounded-bl-sm border border-line bg-white/[0.03] text-white/90"
                    }`}
                  >
                    {m.role === "assistant" && !m.content && busy ? (
                      <span className="flex items-center gap-1 py-0.5">
                        <Dot /> <Dot delay={0.15} /> <Dot delay={0.3} />
                      </span>
                    ) : (
                      renderContent(m.content)
                    )}
                  </div>
                </div>
              ))}

              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                  {error}
                </div>
              )}

              {showSuggestions && (
                <div className="space-y-2 pt-1">
                  <p className="px-1 font-mono text-[10px] uppercase tracking-wide text-faint">
                    Try asking
                  </p>
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="block w-full rounded-xl border border-line bg-white/[0.02] px-3.5 py-2.5 text-left text-sm text-white/80 transition-colors hover:border-accent/40 hover:bg-accent/[0.06] hover:text-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <div className="border-t border-line/70 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-end gap-2 rounded-xl border border-line bg-white/[0.03] p-1.5 focus-within:border-accent/50"
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  rows={1}
                  placeholder="Ask about my career…"
                  className="max-h-28 flex-1 resize-none bg-transparent px-2.5 py-1.5 text-sm text-white placeholder:text-faint focus:outline-none"
                  style={{ fieldSizing: "content" } as React.CSSProperties}
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-violet text-ink transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <ArrowUp className="h-4.5 w-4.5" strokeWidth={2.5} />
                </button>
              </form>
              <p className="mt-2 px-1 text-center text-[10px] text-faint">
                AI digital twin — may occasionally be imperfect. Verify key details.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full bg-mute"
      animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, delay }}
    />
  );
}

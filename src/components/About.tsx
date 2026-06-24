import { CheckCircle2, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, highlights, credentials, skills } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Bridging executive strategy and technical execution."
        />

        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="space-y-6">
            <p className="text-lg leading-relaxed text-mute">{profile.philosophy}</p>

            <div className="space-y-3 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-[15px] leading-relaxed text-white/85">{h}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass card-hover rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-violet" />
                <h3 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
                  Credentials
                </h3>
              </div>
              <ul className="space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-violet" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Skills marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-line/60 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-3">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line bg-white/[0.02] px-4 py-2 font-mono text-xs text-mute"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

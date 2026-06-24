import { Award, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { awards, publications } from "@/lib/content";

export default function Recognition() {
  return (
    <section id="recognition" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Recognition"
          title="Honored for analysis, strategy, and the written word."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="glass card-hover h-full rounded-2xl p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-signal/30 bg-signal/10">
                  <Award className="h-5 w-5 text-signal" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">Honors & Awards</h3>
              </div>
              <ul className="space-y-4">
                {awards.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass card-hover h-full rounded-2xl p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <BookOpen className="h-5 w-5 text-accent" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">Selected Publications</h3>
              </div>
              <ul className="space-y-4">
                {publications.map((p, i) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/85">
                    <span className="mt-0.5 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

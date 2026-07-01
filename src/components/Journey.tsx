import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/content";

const tagColor: Record<string, string> = {
  Industry: "text-accent border-accent/30 bg-accent/10",
  Defense: "text-violet border-violet/30 bg-violet/10",
  Government: "text-signal border-signal/30 bg-signal/10",
  Research: "text-accent border-accent/30 bg-accent/10",
  Academia: "text-mute border-line bg-white/5",
  Military: "text-violet border-violet/30 bg-violet/10",
  Governance: "text-signal border-signal/30 bg-signal/10",
};

export default function Journey() {
  return (
    <section id="journey" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Career Journey"
          title="Two decades from the cockpit to the boardroom."
          description="A path through military aviation, doctoral research, national defense policy, and enterprise analytics leadership — each chapter compounding technical depth with executive influence."
        />

        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-line to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10">
            {experience.map((role, i) => (
              <li key={`${role.org}-${i}`} className="relative">
                <Reveal>
                  <div
                    className={`relative pl-9 md:w-1/2 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    {/* node */}
                    <span
                      className={`absolute top-1.5 left-0 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-ink md:left-auto ${
                        i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>

                    <div className="glass card-hover rounded-2xl p-6">
                      <div
                        className={`mb-3 flex flex-wrap items-center gap-2.5 ${
                          i % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wide uppercase ${
                            tagColor[role.tag] ?? "text-mute border-line bg-white/5"
                          }`}
                        >
                          {role.tag}
                        </span>
                        <span className="font-mono text-xs text-faint">{role.period}</span>
                      </div>

                      <h3 className="font-display text-lg font-semibold leading-snug text-white">
                        {role.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">{role.org}</p>
                      {role.location && (
                        <p className="mt-0.5 text-xs text-faint">{role.location}</p>
                      )}

                      <p className="mt-3 text-sm leading-relaxed text-mute">{role.context}</p>

                      {role.points.length > 0 && (
                        <ul
                          className={`mt-4 space-y-2 ${
                            i % 2 === 0 ? "md:text-left" : ""
                          }`}
                        >
                          {role.points.map((p, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

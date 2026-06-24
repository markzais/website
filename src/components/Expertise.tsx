import {
  Compass,
  BrainCircuit,
  Network,
  Target,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { capabilities, education } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  Compass,
  BrainCircuit,
  Network,
  Target,
  Users,
  TrendingUp,
};

export default function Expertise() {
  return (
    <section id="expertise" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Expertise"
          title="Core capabilities that turn data into decision advantage."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = icons[cap.icon] ?? Compass;
            return (
              <Reveal key={cap.title} delay={i * 0.06}>
                <div className="group glass card-hover relative h-full overflow-hidden rounded-2xl p-6">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-gradient-to-br from-white/[0.06] to-transparent">
                    <Icon className="h-6 w-6 text-accent transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-base font-semibold leading-snug text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mute">{cap.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Education strip */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-line/70 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="mb-5 font-mono text-xs tracking-[0.2em] text-faint uppercase">
              Education
            </h3>
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {education.map((e) => (
                <div key={e.degree} className="border-l-2 border-accent/40 pl-4">
                  <p className="font-display text-sm font-semibold text-white">{e.degree}</p>
                  <p className="mt-0.5 text-sm text-mute">{e.school}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

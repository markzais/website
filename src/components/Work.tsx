import { ArrowUpRight, FolderGit2, Briefcase, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Work & Ventures"
          title="Where the strategy becomes tangible."
          description="A growing body of applied work and an independent consulting practice helping organizations turn analytics ambition into operational reality."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {/* Consulting */}
          <Reveal>
            <a
              href={profile.consulting}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-accent/[0.08] to-transparent p-8 transition-all duration-500 hover:border-accent/50"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <Briefcase className="h-6 w-6 text-accent" />
                </span>
                <ArrowUpRight className="h-6 w-6 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <span className="font-mono text-xs tracking-wide text-accent uppercase">
                Consulting Practice
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">Zais Analytics</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mute">
                Independent advisory for enterprise analytics strategy, AI governance, and
                decision science — helping leadership teams convert data into measurable advantage.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-white/90">
                zaisanalytics.com
                <span className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-10" />
              </span>
            </a>
          </Reveal>

          {/* Portfolio (future) */}
          <Reveal delay={0.08}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-violet/[0.08] to-transparent p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet/15 blur-3xl" />
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet/30 bg-violet/10">
                  <FolderGit2 className="h-6 w-6 text-violet" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] tracking-wide text-faint uppercase">
                  <Sparkles className="h-3 w-3 text-violet" />
                  Coming soon
                </span>
              </div>
              <span className="font-mono text-xs tracking-wide text-violet uppercase">
                Project Portfolio
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">Selected Work</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mute">
                A curated showcase of analytics platforms, optimization models, and AI
                initiatives is in the works — case studies translating complex problems into
                executive outcomes.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-white/70 transition-colors hover:text-violet"
              >
                Preview on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

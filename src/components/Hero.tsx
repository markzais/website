"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import { LinkedInIcon } from "./icons";
import { profile, stats } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
        <div className="absolute right-[8%] top-24 h-[26rem] w-[26rem] rounded-full bg-violet/15 blur-[130px]" />
        <div className="absolute -bottom-32 left-[6%] h-[24rem] w-[24rem] rounded-full bg-accent-deep/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs tracking-wide text-mute">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for advisory & speaking
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </motion.div>

          <motion.p variants={item} className="mb-4 font-mono text-sm tracking-[0.2em] text-accent uppercase">
            {profile.name}, {profile.credentials}
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">Enterprise Analytics</span>
            <br />
            where strategy meets <span className="text-gradient-accent">execution.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-relaxed text-mute">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Explore my career
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-mute transition-colors hover:border-accent/50 hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4.5 w-4.5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/40 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-ink/90 p-5 sm:p-6">
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  <span className="text-gradient-accent">{s.value}</span>
                </div>
                <div className="mt-1.5 text-xs leading-snug text-faint">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-accent md:flex"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

"use client";

import Image from "next/image";
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
const imageItem = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
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
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* Left: intro */}
            <div>
              <motion.div variants={item} className="mb-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs tracking-wide text-mute">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Army Veteran · Former Apache Pilot
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
                className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
              >
                <span className="text-gradient">Enterprise Analytics</span>
                <br />
                where strategy meets <span className="text-gradient-accent">execution.</span>
              </motion.h1>

              <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-mute">
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
            </div>

            {/* Right: portrait */}
            <motion.div variants={imageItem} className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-gradient-to-br from-accent/25 via-violet/15 to-transparent blur-3xl" />
              {/* decorative frame accents */}
              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-accent/40" />
              <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-violet/40" />

              <div className="border-gradient relative overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/headshot.png"
                    alt="Mark Zais — Enterprise Analytics Executive"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 38vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                </div>

                {/* floating credential badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-ink/70 px-3.5 py-2.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="truncate font-display text-sm font-semibold text-white">
                    {profile.title}
                    <span className="ml-1.5 font-sans text-xs font-normal text-mute">
                      · {profile.credentials}
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/40 sm:grid-cols-4"
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

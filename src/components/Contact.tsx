import { Mail, ArrowUpRight, Globe } from "lucide-react";
import Reveal from "./Reveal";
import { LinkedInIcon, GitHubIcon } from "./icons";
import { profile } from "@/lib/content";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "in/markzais", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", value: "github.com/markzais", href: profile.github, Icon: GitHubIcon },
  { label: "Consulting", value: "zaisanalytics.com", href: profile.consulting, Icon: Globe },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/60 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            06 — Contact
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s build your <span className="text-gradient-accent">decision advantage.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mute">
            Open to advisory engagements, board service, speaking, and strategic
            partnerships at the intersection of analytics, AI, and enterprise leadership.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Start a conversation
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              <LinkedInIcon className="h-4 w-4 text-accent" />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line/40 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 bg-ink/90 p-6 transition-colors hover:bg-white/[0.03]"
              >
                <Icon className="h-5 w-5 text-mute transition-colors group-hover:text-accent" />
                <span className="font-mono text-[10px] tracking-wide text-faint uppercase">
                  {label}
                </span>
                <span className="flex items-center gap-1 text-sm text-white/80">
                  {value}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

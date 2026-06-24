import { LinkedInIcon, GitHubIcon } from "./icons";
import { Mail } from "lucide-react";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-accent to-violet font-display text-xs font-bold text-ink">
            MZ
          </span>
          <div className="text-sm">
            <span className="font-display font-semibold text-white">Mark Zais</span>
            <span className="text-faint">, PhD · {profile.title}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-mute transition-colors hover:border-accent/50 hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-mute transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-mute transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} Mark Zais. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

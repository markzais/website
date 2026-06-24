"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LinkedInIcon } from "./icons";
import { profile } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#expertise", label: "Expertise" },
  { href: "#recognition", label: "Recognition" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/70 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Mark Zais — home">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-violet font-display text-sm font-bold text-ink">
            MZ
            <span className="absolute inset-0 rounded-lg opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60 bg-gradient-to-br from-accent to-violet" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            Mark Zais
            <span className="text-mute">, PhD</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-mute transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-md border border-line bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
          >
            <LinkedInIcon className="h-4 w-4 text-accent" />
            Connect
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line/70 bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-mute transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

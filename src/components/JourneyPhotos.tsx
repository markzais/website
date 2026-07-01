"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

type Photo = { src: string; alt: string };

export default function JourneyPhotos({
  images,
  alignEnd = false,
}: {
  images: Photo[];
  alignEnd?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const isOpen = active !== null;

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      <div className={`mt-5 flex ${alignEnd ? "justify-start md:justify-end" : "justify-start"}`}>
        <div className="group/imgs relative flex items-end">
          {images.map((img, k) => (
            <button
              key={k}
              type="button"
              onClick={() => setActive(k)}
              aria-label={`Enlarge photo: ${img.alt}`}
              className={`group/photo relative aspect-[4/3] w-32 shrink-0 cursor-zoom-in overflow-hidden rounded-lg border border-white/15 bg-surface shadow-xl transition-all duration-500 hover:z-20 hover:scale-[1.18] hover:border-accent/50 hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.6)] focus:z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-40 ${
                k === 0
                  ? "z-10 -rotate-3 group-hover/imgs:-translate-x-1.5 group-hover/imgs:-rotate-2"
                  : "-ml-10 rotate-3 group-hover/imgs:translate-x-1.5 group-hover/imgs:rotate-2"
              } hover:!rotate-0`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="200px" className="object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100">
                <Maximize2 className="h-5 w-5 text-white" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md sm:p-8"
                onClick={close}
              >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.04] text-white transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              <X className="h-5 w-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-white transition-colors hover:border-accent/50 hover:bg-accent/10 sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-white transition-colors hover:border-accent/50 hover:bg-accent/10 sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[70vh] w-full overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl">
                <Image
                  src={images[active].src}
                  alt={images[active].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-3 text-center text-sm text-mute">
                {images.length > 1 && (
                  <span className="font-mono text-xs text-faint">
                    {active + 1} / {images.length}
                  </span>
                )}
                {images[active].alt}
              </figcaption>
                </motion.figure>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

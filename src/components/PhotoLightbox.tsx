import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { HobbyPhoto } from "../data/hobbies";

type Props = {
  photos: HobbyPhoto[];
};

export function PhotoGallery({ photos }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const open = index !== null;
  const current = open ? photos[index] : null;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        if (i === null) return null;
        return (i + delta + photos.length) % photos.length;
      });
    },
    [photos.length]
  );

  const close = useCallback(() => setIndex(null), []);

  useEffect(() => {
    if (!open) {
      document.documentElement.classList.remove("gallery-open");
      return;
    }

    document.documentElement.classList.add("gallery-open");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.classList.remove("gallery-open");
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, go]);

  const controlBtn =
    "rounded-full border border-border bg-surface text-text shadow-md transition-colors hover:bg-bg dark:border-transparent dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:bg-white/20";

  const lightbox =
    open && current && index !== null ? (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg/92 p-4 backdrop-blur-xl dark:bg-black/88"
        role="dialog"
        aria-modal="true"
        aria-label="Photo gallery viewer"
        onClick={close}
      >
        <button
          type="button"
          onClick={close}
          className={`absolute right-4 top-4 z-10 p-2 ${controlBtn}`}
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 p-3 md:left-6 ${controlBtn}`}
          aria-label="Previous photo"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 p-3 md:right-6 ${controlBtn}`}
          aria-label="Next photo"
        >
          <ChevronRight size={28} />
        </button>

        <figure
          className="relative flex max-h-[85vh] max-w-[min(1100px,95vw)] flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={`/photos/${current.filename}`}
            alt={current.alt}
            className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-border dark:ring-white/10"
          />
          <figcaption className="mt-4 flex flex-col items-center gap-1 text-center">
            {current.caption && (
              <span className="text-sm text-text md:text-base">
                {current.caption}
              </span>
            )}
            <span className="text-xs text-muted">
              {index + 1} / {photos.length}
              <span className="mx-2">·</span>
              Arrow keys to browse · Esc to close
            </span>
          </figcaption>
        </figure>
      </div>
    ) : null;

  if (photos.length === 0) return null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <button
            key={photo.filename}
            type="button"
            onClick={() => setIndex(i)}
            className="group overflow-hidden rounded-xl border border-border bg-surface text-left transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`View photo ${i + 1} of ${photos.length}: ${photo.alt}`}
          >
            <img
              src={`/photos/${photo.filename}`}
              alt={photo.alt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
            {photo.caption && (
              <p className="px-3 py-2 text-xs text-muted">
                {photo.caption}
              </p>
            )}
          </button>
        ))}
      </div>

      {lightbox && createPortal(lightbox, document.body)}
    </>
  );
}

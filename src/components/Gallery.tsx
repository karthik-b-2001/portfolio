import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryData, GalleryPhoto } from "../types/gallery";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";

interface GalleryProps {
  data: GalleryData;
}

function filename(src: string) {
  return src.split("/").pop() ?? src;
}

function Tile({ photo, onOpen }: { photo: GalleryPhoto; onOpen: () => void }) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={failed}
      aria-label={failed ? undefined : `View ${photo.alt}`}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel-raised)] text-left disabled:cursor-default"
    >
      {!failed ? (
        <>
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {photo.caption && (
            <p className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-2 p-3 text-[13px] font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.caption}
            </p>
          )}
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-[var(--color-border)] text-center">
          <span className="text-2xl" aria-hidden="true">
            📷
          </span>
          <span className="px-3 text-[11px] leading-snug text-[var(--color-slate)]">
            Add {filename(photo.src)} to /public/gallery
          </span>
        </div>
      )}
    </button>
  );
}

export function Gallery({ data }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? data.photos[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % data.photos.length));
      if (event.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + data.photos.length) % data.photos.length));
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, data.photos.length]);

  return (
    <section id="gallery" className="container py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-12 max-w-[60ch]">
        <SectionHeading>{data.eyebrow}</SectionHeading>
        <p className="mt-3 text-[var(--step-lead)] text-[var(--color-slate)]">{data.subheading}</p>
      </div>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
        {data.photos.map((photo, i) => (
          <Tile key={photo.src} photo={photo} onOpen={() => setActiveIndex(i)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40"
            >
              <Icon name="close" size={18} />
            </button>

            {data.photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((i) => (i === null ? i : (i - 1 + data.photos.length) % data.photos.length));
                  }}
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 sm:left-6"
                >
                  <Icon name="chevron-up" size={18} className="-rotate-90" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((i) => (i === null ? i : (i + 1) % data.photos.length));
                  }}
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 sm:right-6"
                >
                  <Icon name="chevron-down" size={18} className="-rotate-90" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full max-w-full flex-col items-center gap-3"
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              />
              {active.caption && <p className="text-center text-sm text-white/80">{active.caption}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

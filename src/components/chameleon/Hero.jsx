import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "./images";

export default function Hero() {
  const containerRef = useRef(null);
  const [percent, setPercent] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, ratio)));
  }, []);

  useEffect(() => {
    if (!dragging) return undefined;

    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const onUp = () => setDragging(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, updateFromClientX]);

  const startDrag = (e) => {
    e.preventDefault();
    updateFromClientX(e.clientX);
    setDragging(true);
  };

  return (
    <section id="top" data-swatch="#121212" className="relative h-screen">
      <div
        ref={containerRef}
        onPointerDown={startDrag}
        className="relative h-full touch-none select-none overflow-hidden">
        <Image
          src={IMAGES.beforeHero}
          alt="Dated oak kitchen before wrapping"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="pointer-events-none absolute bottom-24 right-16 z-4 flex items-center justify-center border-2 border-white px-3 py-2 text-[18px] font-medium tracking-[0.35em] text-white">
          BEFORE
        </span>

        <div
          style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
          className="absolute inset-0">
          <Image
            src={IMAGES.afterHero}
            alt="The same kitchen wrapped in matte grey vinyl"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="pointer-events-none absolute bottom-24 px-6 right-16 z-10 flex items-center justify-center border-2 border-black py-2 text-[18px] font-medium tracking-[0.35em] text-black">
            AFTER
          </span>
        </div>

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/30" />

        <div
          style={{ left: `${percent}%` }}
          className="absolute inset-y-0 z-10 w-[3px] -translate-x-1/2 bg-white/90 shadow-[0_0_24px_rgba(0,0,0,0.5)]">
          <button
            type="button"
            aria-label="Drag to compare before and after"
            onPointerDown={(e) => {
              e.stopPropagation();
              startDrag(e);
            }}
            className="absolute left-1/2 top-36 flex h-12 w-12 -translate-x-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-[#121212] text-white shadow-[0_0_24px_rgba(0,0,0,0.5)] transition-transform hover:scale-105">
            <ChevronsLeftRight className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-6 pb-24 pt-48 sm:px-10 lg:px-16">
          <p className="font-mono font-medium text-[12px] tracking-[0.4em] text-white/80 sm:text-[12px]">
            VINYL WRAPPING SPECIALISTS
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,8vw,6.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-white">
            Your favourite space.
            <br />
            <span className="italic">Reimagined</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Chameleon wraps worktops, wardrobes, fitted furniture, and
            commercial interiors in premium vinyl — delivering a seamless,
            mess-free transformation for a fraction of the cost of replacement.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-[#B8860B] px-7 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white transition-colors hover:bg-[#9a7009]">
              GET A FREE QUOTE
            </a>
            <a
              href="#work"
              className="border border-white/50 px-7 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white transition-colors hover:bg-white/10">
              SEE OUR WORK
            </a>
          </div>
        </div>

        <p className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 font-mono text-[9px] tracking-[0.35em] text-white/70">
          DRAG TO COMPARE
        </p>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "./images";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const reveal = useTransform(scrollYProgress, [0.05, 0.75], [0, 100]);
  const clip = useTransform(reveal, (v) => `inset(0 0 0 ${v}%)`);
  const bladeLeft = useTransform(reveal, (v) => `${v}%`);

  return (
    <section
      ref={ref}
      id="top"
      data-swatch="#121212"
      className="relative h-[230vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Image
          src={IMAGES.beforeHero}
          alt="Dated oak kitchen before wrapping"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <motion.div style={{ clipPath: clip }} className="absolute inset-0">
          <Image
            src={IMAGES.afterHero}
            alt="The same kitchen wrapped in matte grey vinyl"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{ left: bladeLeft }}
          className="absolute inset-y-0 z-10 w-[3px] bg-white/90 shadow-[0_0_24px_rgba(0,0,0,0.5)]">
          <span className="absolute left-1/2 top-6 -translate-x-1/2 bg-[#121212]/70 px-2 py-1 font-mono text-[9px] tracking-[0.35em] text-white">
            WRAP
          </span>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-6 pb-24 pt-48 sm:px-10 lg:px-16">
          <p className="font-mono font-medium text-[10px] tracking-[0.4em] text-white/80 sm:text-[11px]">
            NEWCASTLE UPON TYNE — SURFACE TRANSFORMATION SPECIALISTS
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,8vw,6.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-white">
            Your favourite space.
            <br />
            <span className="italic">Reimagined</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Chameleon wraps worktops, wardrobes and fitted furniture in premium
            vinyl — a seamless, mess-free transformation for a fraction of the
            cost of replacement.
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

        <p className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 font-mono text-[9px] tracking-[0.35em] text-white/70">
          <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          SCROLL TO REVEAL
        </p>
      </div>
    </section>
  );
}

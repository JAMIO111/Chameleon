import { Image } from "@/components/ui/image";
import { IMAGES } from "./images";

const STATS = [
  { k: "10+", v: "years of combined vinyl-wrapping experience" },
  { k: "100%", v: "average recomendation from 76 Facebook reviews" },
  { k: "Infinite", v: "possibilities for transforming your space" },
];

const TESTIMONIALS = [
  {
    quote:
      "Chameleon Home Wrapping do cupboards as well as work surfaces. Excellent work.",
    name: "Wendy Luke",
    source: "via Facebook",
  },
  {
    quote:
      "The kitchen cupboards were wrapped by Chameleon Home Wrapping and omg, look at the transformation — I LOVE it.",
    name: "Whickham Salerooms",
    source: "via Facebook",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-swatch="#4A5D4E"
      className="bg-[#121212] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative overflow-hidden">
            <Image
              src={IMAGES.handleMacro}
              alt="Matte vinyl wrap meeting a brushed brass handle"
              className="h-[420px] w-full object-cover sm:h-[560px]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="font-mono text-[10px] tracking-[0.35em] text-white/80">
                THE SEAMLESS JOIN — OUR SIGNATURE
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              ABOUT — NEWCASTLE UPON TYNE
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              A local crew with{" "}
              <span className="italic text-[#B8860B]">obsessive</span>{" "}
              standards.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Chameleon is a Newcastle-based wrapping studio with ten years of
              combined experience across kitchens, and bedroom furniture. We
              treat your home like a showroom: edges wrapped by hand, joins
              invisible, finishes flawless.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              There&rsquo;s no rip-out, no re-plastering, no weeks of
              tradespeople in your house — just a quiet, precise transformation
              of the surfaces you already own.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {STATS.map((s) => (
                <div key={s.k}>
                  <p className="font-display text-3xl font-light text-[#B8860B] sm:text-4xl">
                    {s.k}
                  </p>
                  <p className="mt-2 text-[11px] leading-snug text-white/50">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border border-white/10 p-8">
              <blockquote className="font-display text-lg font-light italic leading-relaxed text-white/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-mono text-[10px] tracking-[0.25em] text-white/40">
                {t.name.toUpperCase()} — {t.source.toUpperCase()}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

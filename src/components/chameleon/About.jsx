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
      "From first contact to completion they did a top class makeover very pleased with the outcome. Would definitely use again and would 100% recommend.",
    name: "Richard Porter",
    source: "via Facebook",
  },
  {
    quote:
      "Highly recommend chameleon, they have totally transformed our kitchen work tops to go in with the new decor. Couldn’t be happier with the result. Very friendly and professional service. Would definitely use again 5 stars.",
    name: "Lancaster Shell",
    source: "via Facebook",
  },
  {
    quote:
      "I would highly recommend to anyone looking for a quality, professional service. From our first enquiry, to actual instalation everything has been superb. Chameleon worked so hard to ensure we got the best finish possible from the wrapping. We are so pleased with the finish. It has completely changed our kitchen.",
    name: "Lyndsey Robinson",
    source: "via Facebook",
  },
  {
    quote:
      "Had my kitchen wrapped over the last couple of day and I absolutely love it! Amazing skill and finesse, its just beautiful highly recommend these guys couldn’t fault there service! Professional, timely absolute Marvels at there trade!",
    name: "Gemma Muldowney",
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
              src={IMAGES.fitterWorking}
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
              A local team with{" "}
              <span className="italic text-[#B8860B]">obsessive</span>{" "}
              standards.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Chameleon is a Newcastle-based company with over ten years of
              combined experience wrapping anything from kitchens to office
              spaces and more. Choosing Chameleon gives you full creative
              freedom by allowing you to select from our range of finishes and
              colours to digital prints. Then, when it comes to installation, we
              treat your space like a showroom, ensuring every detail is
              perfect.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              There&rsquo;s no rip-out, no re-plastering, no weeks of tradesmen
              in your house — just a quiet, precise transformation of the
              surfaces you already own.
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

        <h2 className="mt-20 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
          Testimonials
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border border-white/10 p-8">
              <blockquote className="font-display text-lg font-light italic leading-relaxed text-white/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex gap-3 flex-row items-center">
                <img
                  src="recommends.png"
                  alt={t.name}
                  className="w-6 h-6 object-cover"
                />
                <figcaption className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                  {t.name.toUpperCase()} — {t.source.toUpperCase()}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

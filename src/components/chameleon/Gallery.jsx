import { Image } from "@/components/ui/image";
import BlueprintDialog from "./BlueprintDialog";
import { IMAGES } from "./images";

const ASPECTS = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
];

const WORK = [
  {
    image: IMAGES.matteSaharaKitchen,
    title: "Matte Sahara kitchen",
    meta: "KITCHEN / MATTE",
    blurb:
      "This kitchen was given a sleek new look with our matte Sahara wrap. The subtle texture and warm tones add a modern, sophisticated touch.",
    original: "high-gloss grey doors and drawer fronts",
    wrap: "Matte sahara vinyl",
    benefits: ["Textured", "Refined", "Contemporary"],
    aspect: ASPECTS[0],
  },
  {
    image: IMAGES.matteBlackKitchen,
    title: "Matte obsidian transformation",
    meta: "KITCHEN / MATTE",
    blurb: "A full kitchen taken from 90s oak to a soft matte charcoal.",
    original: "Worn 1990s oak cabinets",
    wrap: "Premium matte black vinyl, full matching door & worktop set",
    benefits: [
      "Heat resistant",
      "Scratch resistant",
      "Anti-fingerprint finish",
    ],
    aspect: ASPECTS[1],
  },
  {
    image: IMAGES.sageKitchen,
    title: "Sage green refresh",
    meta: "KITCHEN / WORKTOP",
    blurb: "Open plan kitchen softened with a warm sage wrap.",
    original: "Basic wood kitchen cabinets",
    wrap: "Matte sage vinyl, Butchers block bench",
    benefits: ["Fresh", "Calm", "Modern"],
    aspect: ASPECTS[2],
  },
  {
    image: IMAGES.onyxWorktop,
    title: "Onyx gold worktop",
    meta: "WORKTOP / MARBLE",
    blurb:
      "This gorgeous finish brings deep rich tones, dramatic veining, and a high-end designer feel to any space. A perfect way to create that premium stone look without the cost and disruption of replacement.",
    original: "Worn laminate worktop",
    wrap: "Onyx Gold vinyl from the marble range.",
    benefits: ["Bold", "Elegant", "Timeless"],
    aspect: ASPECTS[3],
  },
  {
    image: IMAGES.beigeMarbleMediaWall,
    title: "Beige marble media wall",
    meta: "MEDIA WALL / MARBLE",
    blurb: "A media wall wrapped in beige marble.",
    original: "MDF media wall, raw finish",
    wrap: "Beige marble-effect vinyl, flush TV panel",
    benefits: ["Perfect edges", "No painting needed", "Premium finish"],
    aspect: ASPECTS[4],
  },
  {
    image: IMAGES.oakTop,
    title: "Warm oak drawer fronts",
    meta: "FURNITURE / TEXTURED",
    blurb: "Flat drawer fronts given warm oak grain you can feel.",
    original: "Plain drawer fronts",
    wrap: "Textured warm-oak vinyl",
    benefits: ["Tactile grain", "Seamless edges", "Scratch resistant"],
    aspect: ASPECTS[5],
  },
];

export default function Gallery() {
  return (
    <section
      id="work"
      data-swatch="#8A8F98"
      className="bg-[#F7F7F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
          THE GALLERY — PROOF OF CRAFT
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
          Some of our <span className="italic text-[#4A5D4E]">work</span>.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#121212]/60">
          Tap any piece to open its blueprint — the original surface, the wrap
          we applied, and what it delivers.
        </p>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 rounded">
          {WORK.map((item) => (
            <BlueprintDialog key={item.title} item={item}>
              <button className="group block w-full cursor-pointer text-left">
                <div
                  className={`relative overflow-hidden bg-[#121212] ${item.aspect}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 rounded"
                  />

                  <span className="absolute right-3 top-3 bg-[#121212]/70 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.25em] text-white opacity-100 backdrop-blur-sm transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                    VIEW BLUEPRINT
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
                    <p className="font-mono text-[9px] tracking-[0.3em] text-white/70">
                      {item.meta}
                    </p>
                    <p className="mt-1 font-display text-lg font-light text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </button>
            </BlueprintDialog>
          ))}
        </div>
      </div>
    </section>
  );
}

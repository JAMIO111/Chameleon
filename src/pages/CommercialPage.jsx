import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  ConciergeBell,
  DoorClosed,
  Hotel,
  MoveVertical,
  Sofa,
  Store,
  Table2,
  Grid2x2,
} from "lucide-react";
import { Image } from "@/components/ui/image";
import Navbar from "@/components/chameleon/Navbar";
import Footer from "@/components/chameleon/Footer";
import AdaptiveCursor from "@/components/chameleon/AdaptiveCursor";
import { IMAGES } from "@/components/chameleon/images";

const WRAP_CATEGORIES = [
  {
    icon: Building2,
    title: "Offices",
    blurb:
      "Desks, partitions, doors and window sills updated with minimal downtime.",
  },
  {
    icon: Store,
    title: "Retail & Showrooms",
    blurb: "Customer-facing surfaces refreshed with new or seasonal branding.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    blurb: "Reception counters, bars and fitted furniture wrapped in place.",
  },
  {
    icon: MoveVertical,
    title: "Lifts",
    blurb:
      "Lift doors and surrounding panels wrapped in our premium vinyl to really elevate the look.",
  },
  {
    icon: ChefHat,
    title: "Commercial Kitchens",
    blurb:
      "Cabinet doors and worktops wrapped in durable, easy-clean finishes that can be removed and replaced at any time.",
  },
  {
    icon: Sofa,
    title: "Fitted Furniture",
    blurb: "Cupboards, counters and built-in units given a new surface.",
  },
  {
    icon: DoorClosed,
    title: "Doors & Frames",
    blurb: "Existing doors and frames refreshed without full replacement.",
  },
  {
    icon: Grid2x2,
    title: "Glass & Glazing",
    blurb:
      "Frosted, coloured, branded and decorative films for windows and partitions.",
  },
  {
    icon: ConciergeBell,
    title: "Reception Areas",
    blurb: "The first impression, refreshed with a seamless new finish.",
  },
  {
    icon: Table2,
    title: "Worktops & Countertops",
    blurb: "Existing worktops transformed with durable decorative vinyl.",
  },
];

const COMPARISON_ROWS = [
  { was: "Removal of existing surfaces", now: "Existing surfaces retained" },
  { was: "More waste", now: "Minimal waste" },
  { was: "Longer installation", now: "Faster transformation" },
  { was: "Greater disruption to your space", now: "Reduced disruption" },
  { was: "Higher replacement costs", now: "Cost-effective refurbishment" },
];

const SURFACES = [
  "Wood",
  "MDF",
  "Laminate",
  "Metal",
  "Glass",
  "Selected plastics",
  "Composite materials",
  "Smooth sealed surfaces",
];

const FINISHES = [
  "Digital graphics",
  "Custom Branding",
  "Wood-effect",
  "Marble",
  "Stone",
  "Metal",
  "Matte",
  "Gloss",
  "Textured",
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Consultation",
    blurb:
      "Tell us about your commercial space and what you'd like to transform.",
  },
  {
    n: "02",
    title: "Site Assessment",
    blurb:
      "We assess the existing surfaces, measurements and project requirements.",
  },
  {
    n: "03",
    title: "Quote",
    blurb:
      "You receive a clear, no-obligation quotation based on the scope of work.",
  },
  {
    n: "04",
    title: "Preparation",
    blurb:
      "Surfaces are prepared to ensure the vinyl can be installed correctly.",
  },
  {
    n: "05",
    title: "Installation",
    blurb: "Our installers transform the surfaces with minimal disruption.",
  },
  {
    n: "06",
    title: "Completion",
    blurb:
      "Your newly transformed space is inspected and handed back ready to use.",
  },
];

const DISRUPTION_POINTS = [
  "Flexible scheduling around your business hours",
  "Existing furniture and fittings stay in place",
  "Significantly less mess and waste than a full refit",
  "Clear communication from quote to completion",
];

const CASE_STUDIES = [
  {
    category: "RETAIL",
    title: "Branded Retail Display ",
    images: [IMAGES.retailStand1, IMAGES.retailStand2, IMAGES.retailStand3],
    alt: "Retail display stand wrapped in a floral digital print ready for a seasonal marketing campaign",
    blurb:
      "A retail display stand wrapped in a bold floral digital print to match seasonal branding — updated without replacing the unit itself and easily removed when the time comes, again, for a new look",
    tags: ["Floral digital print", "Brand match", "Quick turnaround"],
  },
  {
    category: "LIFTS",
    title: "Face-Lift",
    images: [IMAGES.lift1, IMAGES.lift2],
    alt: "Lift wrapped in a brushed metal finish",
    blurb:
      "A tired office block elevator doors and interior panels wrapped in a sleek brushed-metal finish — transformed in place without removing the existing panels or taking the lift out of service for long.",
    tags: ["Metal finish", "Installed in place", "Minimal downtime"],
  },
  {
    category: "OFFICES",
    title: "Office Makeover",
    images: [IMAGES.hallway1, IMAGES.hallway2, IMAGES.hallway3],
    alt: "Office doors and walls in a wood and concrete effect vinyl",
    blurb:
      "All doors and frames stripped and re-wrapped with this beautiful wood-effect vinyl and walls finished in a concrete effect from our premium range to completely transform this office space.",
    tags: ["Wood & Concrete", "Doors and walls", "Complete transformation"],
  },
  {
    category: "GLAZING",
    title: "Glazing & partitions",
    images: [
      IMAGES.glassBranding1,
      IMAGES.glassBranding2,
      IMAGES.glassBranding3,
    ],
    alt: "Internal glass partition finished with frosted film",
    blurb:
      "Frosted film applied to internal glass partitions or glass doors for privacy and a cleaner, more considered look — without replacing the glass itself. The vinyl also offers heat insulation benefits in the summer months. Business name and logo can also be applied to the frosted film to serve as branding too.",
    tags: ["Frosted film", "Privacy", "No glass replacement"],
  },
  {
    category: "AMAZON DROPBOXES",
    title: "Amazon dropbox collaboration",
    images: [
      IMAGES.commercialCabinet,
      IMAGES.amazonDropbox1,
      IMAGES.amazonDropbox2,
    ],
    alt: "Amazon drop boxes wrapped outside St James' Park",
    blurb:
      "An Amazon dropbox updated with the famous black and white stripes of Newcastle United. Situated right outside St James' Park, this was only ever going to be the correct design for the job.",
    tags: ["Branded vinyl", "Quick update", "No replacement needed"],
  },
];

const WHY_CHAMELEON = [
  "Premium architectural vinyl",
  "Existing surfaces retained wherever possible",
  "A wide range of finishes",
  "Professional, tidy installation",
  "12-month warranty on lifts and peels",
  "Free, no-obligation quotations",
];

function CaseStudyImages({ images, alt }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative overflow-hidden bg-white/5">
      <Image
        src={images[index]}
        alt={alt}
        className="h-[400px] w-full object-cover sm:h-[480px]"
      />
      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={goPrev}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#121212]/70 text-white transition-colors hover:bg-[#121212]">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={goNext}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#121212]/70 text-white transition-colors hover:bg-[#121212]">
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const buttonGold =
  "bg-[#B8860B] px-7 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white transition-colors hover:bg-[#9a7009]";
const buttonOutline =
  "border border-white/50 px-7 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white transition-colors hover:bg-white/10";

export default function CommercialPage() {
  return (
    <>
      <AdaptiveCursor />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          id="commercial-top"
          data-swatch="#B8860B"
          className="relative isolate overflow-hidden bg-[#121212] pb-24 pt-40 sm:pb-32 sm:pt-48">
          <Image
            src={IMAGES.commercialCabinet}
            alt="Commercial cabinetry wrapped in vinyl"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/85 to-[#121212]/50" />
          <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              COMMERCIAL — VINYL WRAPPING
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-white">
              Commercial{" "}
              <span className="italic text-[#B8860B]">Vinyl Wrapping</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Transform commercial interiors, lifts, windows and glass doors
              with premium architectural vinyl — without the disruption and cost
              of full replacement.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className={buttonGold}>
                REQUEST A COMMERCIAL QUOTE
              </Link>
              <a href="#commercial-work" className={buttonOutline}>
                SEE OUR WORK
              </a>
            </div>
          </div>
        </section>

        {/* What we wrap */}
        <section
          id="what-we-wrap"
          data-swatch="#4A5D4E"
          className="bg-[#F7F7F5] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              WHAT WE WRAP — COMMERCIAL SURFACES
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
              What we <span className="italic text-[#4A5D4E]">wrap</span>.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#121212]/60">
              If it&rsquo;s a hard surface in a commercial space, we can very
              likely transform it — without ripping anything out.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {WRAP_CATEGORIES.map(({ icon: Icon, title, blurb }) => (
                <div
                  key={title}
                  className="border border-[#121212]/10 bg-white p-5">
                  <Icon className="h-5 w-5 text-[#B8860B]" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-base font-normal leading-snug text-[#121212]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#121212]/55">
                    {blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section
          id="commercial-work"
          data-swatch="#8A8F98"
          className="bg-[#121212] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              COMMERCIAL WORK
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              From existing to{" "}
              <span className="italic text-[#B8860B]">exceptional</span>.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
              Real commercial projects. Thoughtful transformations. Explore how
              premium vinyl wrapping can give existing spaces a completely new
              identity.
            </p>

            <div className="mt-16 space-y-16 sm:space-y-24">
              {CASE_STUDIES.map((study, i) => (
                <div
                  key={study.title}
                  className={`${i % 2 === 1 ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.8fr_1.2fr]"} grid items-center gap-10 border-t border-white/10 pt-12 first:border-t-0 first:pt-0 lg:gap-14`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <CaseStudyImages images={study.images} alt={study.alt} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A5D4E]">
                      CASE STUDY — {study.category}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-light text-white sm:text-3xl">
                      {study.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                      {study.blurb}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border hover:border-[#B8860B] transition-colors duration-300 hover:text-[#B8860B] border-white/15 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-white/60">
                          {tag.toUpperCase()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/#work"
              className="mt-16 inline-block font-mono text-[10px] tracking-[0.3em] text-[#B8860B] transition-colors hover:text-white">
              SEE MORE OF OUR WORK →
            </Link>
          </div>
        </section>

        {/* Surfaces & finishes */}
        <section
          id="surfaces-finishes"
          data-swatch="#8A8F98"
          className="bg-[#F7F7F5] py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              MATERIALS & FINISHES
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
              Surfaces we{" "}
              <span className="italic text-[#4A5D4E]">transform</span>.
            </h2>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[12px] tracking-[0.3em] text-[#121212]/40">
                  SURFACES WE CAN APPLY TO
                </p>
                <ul className="mt-5 space-y-2.5">
                  {SURFACES.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-[#121212]/70">
                      <span className="h-1 w-1 shrink-0 bg-[#B8860B]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[12px] tracking-[0.3em] text-[#121212]/40">
                  VINYL FINISHES AVAILABLE
                </p>
                <ul className="mt-5 space-y-2.5">
                  {FINISHES.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-[#121212]/70">
                      <span className="h-1 w-1 shrink-0 bg-[#4A5D4E]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-12 max-w-lg text-[13px] leading-relaxed text-[#121212]/50">
              Every project is assessed individually to confirm the existing
              surface is suitable for wrapping.{" "}
              <Link
                to="/#work"
                className="text-[#B8860B] underline-offset-2 hover:underline">
                Browse the gallery →
              </Link>
            </p>
          </div>
        </section>

        {/* Why vinyl instead of replacement */}
        <section
          id="why-vinyl"
          data-swatch="#B8860B"
          className="bg-[#121212] py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              THE CASE FOR WRAPPING
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              A smarter alternative to{" "}
              <span className="italic text-[#B8860B]">replacement</span>.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60">
              Vinyl wrapping refreshes what&rsquo;s already there, rather than
              tearing it out.
            </p>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {COMPARISON_ROWS.map((r) => (
                <div
                  key={r.was}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-2 sm:gap-8">
                  <p className="text-sm text-white/40">{r.was}</p>
                  <p className="font-display text-base text-white sm:text-lg">
                    <span className="text-[#B8860B]">→</span> {r.now}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13px] leading-relaxed text-white/40">
              Suitability depends on the condition and material of your existing
              surfaces — every commercial project is assessed individually.
            </p>
          </div>
        </section>

        {/* Minimal disruption */}
        <section
          id="disruption"
          data-swatch="#B8860B"
          className="bg-[#F7F7F5] py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              BUILT AROUND YOUR BUSINESS
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
              Keep your business{" "}
              <span className="italic text-[#B8860B]">moving</span>.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#121212]/70">
              Commercial refurbishment doesn&rsquo;t have to mean closing your
              space or major construction work. Vinyl wrapping transforms
              existing surfaces with far less disruption than a full
              replacement. In most cases we will work around you where possible
              to minimize any disruption to your business operations.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DISRUPTION_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border border-[#121212]/10 bg-white p-4 text-sm leading-relaxed text-[#121212]/75">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#B8860B]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          data-swatch="#4A5D4E"
          className="bg-[#121212] py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              THE COMMERCIAL PROCESS
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              How it <span className="italic text-[#4A5D4E]">works</span>.
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS_STEPS.map((step) => (
                <div key={step.n} className="border-t border-white/10 pt-5">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-[#B8860B]">
                    {step.n}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-light text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Chameleon */}
        <section
          id="why-chameleon"
          data-swatch="#4A5D4E"
          className="bg-[#F7F7F5] py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              WHY CHAMELEON
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
              Why work with <span className="italic text-[#4A5D4E]">us</span>.
            </h2>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {WHY_CHAMELEON.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#121212]/75">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#B8860B]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="commercial-quote"
          data-swatch="#B8860B"
          className="bg-[#121212] py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              To transform your commercial space,{" "}
              <span className="italic block text-[#B8860B]">
                Trust Chameleon.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Tell us what you&rsquo;d like to transform and we&rsquo;ll assess
              your project and provide a tailored, no-obligation quotation.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className={buttonGold}>
                REQUEST A COMMERCIAL QUOTE
              </Link>
            </div>
            <p className="mt-6 font-mono text-[10px] tracking-[0.25em] text-white/40">
              hello@chameleonhomewrapping.co.uk
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

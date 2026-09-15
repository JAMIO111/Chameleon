import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { IMAGES } from "./images";

const SERVICES = [
  {
    word: "COMMERCIAL",
    title: "Commercial",
    image: IMAGES.commercialCabinet,
    meta: "01 / OFFICE · RETAIL · HOSPITALITY",
    blurb:
      "Offices, bars and retail counters transformed with minimal downtime — hard-wearing wraps built for heavy use.",
    swatch: "#B8860B",
  },
  {
    word: "KITCHEN",
    title: "Kitchens",
    image: IMAGES.glossKitchen,
    meta: "02 / DOORS · DRAWERS · CUPBOARDS",
    blurb:
      "Doors, drawers and cupboards wrapped in seamless gloss, matte or textured vinyl. No rip-out, no mess — a brand-new kitchen in days.",
    swatch: "#B8860B",
  },
  {
    word: "WORKTOP",
    title: "Worktops",
    image: IMAGES.oakTop,
    meta: "03 / MARBLE · GRANITE · OAK",
    blurb:
      "Marble, granite and oak-effect wraps that are heat, stain and scratch resistant — seamless joins and a wipe-clean finish.",
    swatch: "#8A8F98",
  },
  {
    word: "WARDROBE",
    title: "Wardrobes & Bedrooms",
    image: IMAGES.sageWardrobe,
    meta: "04 / FITTED · FREESTANDING",
    blurb:
      "Fitted wardrobes and bedroom furniture refreshed in any finish — from timeless high-gloss white to soft matte sage.",
    swatch: "#4A5D4E",
  },
  {
    word: "MEDIA",
    title: "Media Walls & Fireplaces",
    image: IMAGES.mediaWall,
    meta: "05 / SURROUNDS · UNITS",
    blurb:
      "Media walls, fireplace surrounds and fitted units wrapped to match your space — flush, flawless and quietly modern.",
    swatch: "#3A3F45",
  },
  {
    word: "FURNITURE",
    title: "Furniture & Drawers",
    image: IMAGES.oakMacro,
    meta: "06 / HOME · OFFICE",
    blurb:
      "Dressers, drawer fronts, desks and office furniture given a premium new skin — grain-perfect, with seamless edges.",
    swatch: "#7A5C3E",
  },
];

export default function Services() {
  const [accent, setAccent] = useState("#4A5D4E");

  return (
    <section
      id="services"
      data-swatch="#B8860B"
      className="bg-[#F7F7F5] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              WHAT WE DO — THE MATERIALITY INDEX
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
              Every surface,{" "}
              <span
                style={{ color: accent }}
                className="italic transition-colors duration-500">
                reinvented
              </span>
              .
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#121212]/60">
            If it’s a hard surface in your home, we can wrap it — in countless
            colours, finishes and textures.
          </p>
        </div>
      </div>

      <div
        className="mt-14 flex snap-x gap-6 overflow-x-auto px-6 pb-6 lg:px-10 [scrollbar-width:thin]"
        onMouseLeave={() => setAccent("#4A5D4E")}>
        {SERVICES.map((s) => (
          <ServiceCard
            key={s.title}
            service={s}
            onHover={setAccent}
            onLeave={() => setAccent("#4A5D4E")}
          />
        ))}
      </div>
      <p className="px-6 font-mono text-[10px] tracking-[0.3em] text-[#121212]/40 lg:px-10">
        ← SCROLL THE RIBBON →
      </p>
    </section>
  );
}

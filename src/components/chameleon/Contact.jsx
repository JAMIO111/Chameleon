import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { SOCIALS } from "./images";

const CONTACT_EMAIL = "hello@chameleonhomewrapping.co.uk";

const SPACES = [
  "office space",
  "lift",
  "full kitchen",
  "kitchen cabinets",
  "worktops",
  "wardrobes",
  "media wall / fireplace",
  "drawers",
];

const FINISHES = ["gloss", "matte", "textured"];

const SPACE_PRICE_RANGES = {
  "office space": [800, 1500],
  lift: [600, 1200],
  "full kitchen": [1800, 3500],
  "kitchen cabinets": [900, 1800],
  worktops: [400, 900],
  wardrobes: [500, 1100],
  "media wall / fireplace": [350, 700],
  drawers: [150, 350],
};

const FINISH_MULTIPLIERS = {
  gloss: 1,
  matte: 1,
  textured: 1.15,
};

function estimateRange(space, finish) {
  const [low, high] = SPACE_PRICE_RANGES[space] ?? [0, 0];
  const multiplier = FINISH_MULTIPLIERS[finish] ?? 1;
  const round = (n) => Math.round((n * multiplier) / 10) * 10;
  return [round(low), round(high)];
}

function formatGBP(n) {
  return `£${n.toLocaleString("en-GB")}`;
}

function SentenceSelect({ value, onChange, options, width }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width }}
      className="mx-1 cursor-pointer appearance-none border-b-2 border-[#B8860B] bg-[#1a1a1a] font-mono tracking-[0.1em] text-[#B8860B] p-2 focus:outline-none pb-1 text-sm">
      {options.map((o) => (
        <option key={o} value={o} className="bg-[#121212] text-white">
          {o}
        </option>
      ))}
    </select>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    space: SPACES[0],
    finish: FINISHES[0],
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const [estimateLow, estimateHigh] = estimateRange(form.space, form.finish);

  function onSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please add your name and email so we can reply." });
      return;
    }

    const subject = `Quote Request – ${form.space} – ${form.finish}`;

    const body = [
      `NEW QUOTE REQUEST`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `CUSTOMER DETAILS`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Name:     ${form.name}`,
      `Email:    ${form.email}`,
      form.phone && `Phone:    ${form.phone}`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `PROJECT DETAILS`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Space:    ${form.space}`,
      `Finish:   ${form.finish}`,
      `Guide price:  ${formatGBP(estimateLow)} – ${formatGBP(estimateHigh)}`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `CUSTOMER MESSAGE`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      form.message || `No additional message provided.`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Sent via the Chameleon website`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputCls =
    "w-full border-b border-white/20 bg-transparent py-3 text-white placeholder:text-white/30 focus:border-[#B8860B] focus:outline-none";

  return (
    <section
      id="contact"
      data-swatch="#B8860B"
      className="bg-[#121212] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
          THE CONSULTATION
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
          Build your{" "}
          <span className="italic text-[#B8860B]">transformation</span>.
        </h2>

        <form onSubmit={onSubmit} className="mt-12 space-y-10">
          <p className="font-display text-xl font-light leading-relaxed text-white/90 sm:text-2xl">
            I want to transform my
            <SentenceSelect
              value={form.space}
              onChange={(v) => setForm((f) => ({ ...f, space: v }))}
              options={SPACES}
              width="230px"
            />
            using a
            <SentenceSelect
              value={form.finish}
              onChange={(v) => setForm((f) => ({ ...f, finish: v }))}
              options={FINISHES}
              width="120px"
            />
            finish.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 border border-[#B8860B]/30 bg-[#B8860B]/5 px-6 py-5">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/40">
                ESTIMATED GUIDE PRICE
              </p>
              <p className="mt-1 font-display text-2xl font-light text-[#B8860B] sm:text-3xl">
                {formatGBP(estimateLow)} – {formatGBP(estimateHigh)}
              </p>
            </div>
            <p className="max-w-xs text-[11px] leading-relaxed text-white/40">
              A rough guide based on typical jobs. Your final price is
              confirmed after a quick look at the space.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <input
              className={inputCls}
              placeholder="e.g. John"
              value={form.name}
              onChange={set("name")}
            />
            <input
              className={inputCls}
              type="email"
              placeholder="e.g. john@example.com"
              value={form.email}
              onChange={set("email")}
            />
            <input
              className={inputCls}
              placeholder="e.g. +44 123 456 7890 (optional)"
              value={form.phone}
              onChange={set("phone")}
            />
          </div>

          <textarea
            className={`${inputCls} min-h-[110px] resize-none`}
            placeholder="Tell us a little about the space — material, size, what you'd love it to become…"
            value={form.message}
            onChange={set("message")}
          />

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#B8860B] px-8 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white transition-colors hover:bg-[#9a7009]">
              REQUEST MY QUOTE
            </button>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
              FREE, NO-OBLIGATION QUOTES ACROSS NEWCASTLE & THE NORTH EAST
            </span>
          </div>
        </form>

        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/40">
            PREFER TO MESSAGE US?
          </span>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-white/15 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] text-white/80 transition-colors hover:border-[#B8860B] hover:text-white">
            <Facebook className="h-3.5 w-3.5" /> FACEBOOK
          </a>
          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-white/15 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] text-white/80 transition-colors hover:border-[#B8860B] hover:text-white">
            <Instagram className="h-3.5 w-3.5" /> INSTAGRAM
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-white/15 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] text-white/80 transition-colors hover:border-[#B8860B] hover:text-white">
            <Linkedin className="h-3.5 w-3.5" /> LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
}

import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, onHover, onLeave }) {
  return (
    <article
      onMouseEnter={() => onHover(service.swatch)}
      onMouseLeave={onLeave}
      className="group flex flex-col relative w-[85vw] shrink-0 snap-start overflow-hidden bg-[#121212] sm:w-[420px]">
      <div className="relative h-[300px] overflow-hidden sm:h-[360px]">
        <span className="pointer-events-none absolute -bottom-4 left-3 z-10 select-none font-display text-[5.5rem] font-light leading-none tracking-tight text-white/20 sm:text-[7rem]">
          {service.word}
        </span>
        <Image
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-1 flex-col sm:p-8">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/50">
          {service.meta}
        </p>
        <h3 className="mt-3 font-display text-2xl font-light text-white">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
          {service.blurb}
        </p>
        <div className="mt-5 flex flex-row items-center justify-between gap-4">
          <a
            href="/contact"
            className="inline-block font-mono text-[12px] tracking-[0.3em] text-[#B8860B] transition-colors hover:text-white">
            ENQUIRE →
          </a>
          {service.link && (
            <Link
              to={service.link}
              className="inline-block font-mono text-[12px] tracking-[0.3em] text-[#B8860B] transition-colors hover:text-white">
              SEE MORE →
            </Link>
          )}
        </div>
      </div>
      <span
        className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
        style={{ background: service.swatch }}
      />
    </article>
  );
}

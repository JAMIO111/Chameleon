import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import { SOCIALS } from "./images";
import { Image } from "@/components/ui/image";
import logoSrc from "@/assets/logo-no-bg.png?w=300&format=webp";

const HANGERS = [360, 480, 600, 720, 840, 960, 1080];
const ARCH_Y = {
  360: 104,
  480: 82,
  600: 58,
  720: 40,
  840: 58,
  960: 82,
  1080: 104,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d0d0d] pt-16 text-white">
      <svg
        viewBox="0 0 1440 160"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 w-full text-white/15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden>
        <path d="M0 150 H1440" />
        <path d="M240 150 Q720 -60 1200 150" />
        {HANGERS.map((x) => (
          <path key={x} d={`M${x} 150 V${ARCH_Y[x]}`} />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:px-10">
        <div className="flex flex-wrap items-start justify-between gap-10 pb-12">
          <div>
            <div className="flex flex-row items-start gap-4">
              <Image
                src={logoSrc}
                alt="Chameleon Home Wrapping logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <p className="font-display text-3xl font-light tracking-[0.06em] text-white">
                  CHAMELEON
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.35em] text-white/50">
                  HOME WRAPPING
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Premium vinyl wrapping for both home and commercial spaces.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/40">
                SITE
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li>
                  <Link to="/#services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/#work" className="hover:text-white">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/40">
                FIND US
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li>
                  <a
                    href={SOCIALS.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white">
                    <Facebook className="h-3.5 w-3.5" /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIALS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white">
                    <Instagram className="h-3.5 w-3.5" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white">
                    <Linkedin className="h-3.5 w-3.5" /> Linkedin
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" /> Newcastle upon Tyne
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 font-mono text-[10px] tracking-[0.25em] text-white/40">
          <span>© {new Date().getFullYear()} CHAMELEON HOME WRAPPING</span>
          <span>NEWCASTLE UPON TYNE — SERVING THE NORTH EAST</span>
        </div>
      </div>
    </footer>
  );
}

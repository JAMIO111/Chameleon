import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import logoSrc from "@/assets/logo-no-bg.png?w=300&format=webp";

const LINKS = [
  { label: "Services", to: "/#services" },
  { label: "Our Work", to: "/#work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-card/90 shadow-[0_1px_0_rgba(18,18,18,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <Image
            src={logoSrc}
            alt="Chameleon Home Wrapping logo"
            className="h-14 w-auto object-contain sm:h-12"
          />
          <div className="flex flex-col">
            <span
              className={`font-display text-2xl tracking-[0.08em] transition-colors ${
                scrolled || open ? "text-foreground" : "text-white"
              }`}>
              CHAMELEON
            </span>
            <span
              className={`align-middle font-mono tracking-[0.3em] transition-colors sm:inline text-[11px] ${
                scrolled || open ? "text-muted-foreground" : "text-white/80"
              }`}>
              HOME WRAPPING
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`font-mono tracking-[0.25em] transition-colors text-xs ${
                scrolled
                  ? "text-foreground/70 hover:border-b-2 border-[#B8860B] hover:pb-1 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}>
              {l.label.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent-foreground px-5 py-2.5 font-mono text-[11px] tracking-[0.25em] text-white transition-colors hover:bg-primary-foreground">
            GET A QUOTE
          </Link>
        </div>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`-mr-2.5 p-2.5 md:hidden ${scrolled || open ? "text-foreground" : "text-white"}`}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="bg-card px-6 pb-6 pt-2 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-foreground/10 py-4 font-mono text-xs tracking-[0.25em] text-foreground">
              {l.label.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-accent-foreground px-5 py-3 text-center font-mono text-xs tracking-[0.25em] text-white">
            GET A QUOTE
          </Link>
        </div>
      )}
    </header>
  );
}

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/chameleon/Navbar";
import Footer from "@/components/chameleon/Footer";
import AdaptiveCursor from "@/components/chameleon/AdaptiveCursor";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <>
      <AdaptiveCursor />
      <Navbar />
      <main className="relative flex min-h-screen items-center overflow-hidden bg-[#121212] pb-24 pt-32">
        <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#B8860B]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
            ERROR 404 — SURFACE NOT FOUND
          </p>

          <div className="relative mx-auto mt-6 w-fit">
            <h1 className="select-none font-display text-[clamp(6rem,22vw,13rem)] font-light leading-none tracking-[-0.03em] text-white/10">
              404
            </h1>
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{
                clipPath: [
                  "inset(0 100% 0 0)",
                  "inset(0 0% 0 0)",
                  "inset(0 0% 0 100%)",
                ],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                repeatDelay: 1.4,
                ease: "easeInOut",
              }}>
              <h1 className="select-none font-display text-[clamp(6rem,22vw,13rem)] font-light leading-none tracking-[-0.03em] text-[#B8860B]">
                404
              </h1>
            </motion.div>
          </div>

          <h2 className="mt-8 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-light leading-tight text-white">
            This page went full{" "}
            <span className="italic text-[#B8860B]">chameleon</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
            {pageName ? (
              <>
                We looked for{" "}
                <span className="text-white/90">&ldquo;/{pageName}&rdquo;</span>{" "}
                but it&rsquo;s blended into the background.{" "}
              </>
            ) : (
              <>The page you&rsquo;re after has blended into the background. </>
            )}
            Let&rsquo;s get you back to a space we can actually see.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="bg-[#B8860B] px-7 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white transition-colors hover:bg-[#9a7009]">
              BACK TO HOME
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 px-7 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white transition-colors hover:bg-white/10">
              CONTACT US
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

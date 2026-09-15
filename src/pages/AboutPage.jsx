import Navbar from "@/components/chameleon/Navbar";
import Footer from "@/components/chameleon/Footer";
import About from "@/components/chameleon/About";
import AdaptiveCursor from "@/components/chameleon/AdaptiveCursor";

export default function AboutPage() {
  return (
    <>
      <AdaptiveCursor />
      <Navbar />
      <main>
        <section className="bg-[#121212] pt-40 sm:pt-48">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              ABOUT — THE STUDIO
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              Wrapped, <span className="italic text-[#B8860B]">not wasted</span>
              .
            </h1>
            <div className="mt-8 space-y-5 pb-4 text-base leading-relaxed text-white/70">
              <p>
                Chameleon Home Wrapping is a vinyl-wrapping studio based in
                Benton, Newcastle upon Tyne, serving homes and businesses across
                the North East. We transform tired kitchens, wardrobes,
                worktops, media walls and fitted furniture without a single
                rip-out — instead of replacing your doors and surfaces, we wrap
                them by hand in premium vinyl, leaving seamless edges, invisible
                joins and a finish that simply wipes clean.
              </p>
              <p>
                It is faster, tidier and far kinder to your budget than a full
                refit, and nothing ends up in landfill. Most kitchen
                transformations take just one to three days, and every job is
                backed by our twelve-month warranty on lifts and peels.
              </p>
              <p>
                This site is for homeowners, landlords and commercial clients
                weighing up a refresh. Browse our services, step through the
                spec-sheet gallery of real transformations, read the answers to
                the questions we hear most, then build your free quote in a
                single sentence — send a few photos of the whole area and we
                will price it up for you.
              </p>
              <p>
                Behind Chameleon is a small local crew with over forty years of
                combined wrapping experience across cars, bikes and homes, and a
                5.0&#9733; average from 76 Facebook reviews. We treat every home
                like a showroom.
              </p>
            </div>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}

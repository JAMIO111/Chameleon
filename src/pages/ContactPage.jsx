import Navbar from "@/components/chameleon/Navbar";
import Footer from "@/components/chameleon/Footer";
import Contact from "@/components/chameleon/Contact";
import AdaptiveCursor from "@/components/chameleon/AdaptiveCursor";

export default function ContactPage() {
  return (
    <>
      <AdaptiveCursor />
      <Navbar />
      <main>
        <section className="bg-[#121212] pt-40 sm:pt-48">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
              CONTACT — SAY HELLO
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              Let&rsquo;s talk about your{" "}
              <span className="italic text-[#B8860B]">space</span>.
            </h1>
            <p className="mt-6 max-w-xl pb-4 text-base leading-relaxed text-white/70">
              Attach a few photos of the area you would like wrapped to the
              email — showing the whole space so we can see it clearly — and we
              will come back with a free, no-obligation quote. Prefer to chat
              first? Message us on Facebook or Instagram, or use the form below.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

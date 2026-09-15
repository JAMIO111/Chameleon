import AdaptiveCursor from "@/components/chameleon/AdaptiveCursor";
import Navbar from "@/components/chameleon/Navbar";
import Hero from "@/components/chameleon/Hero";
import Services from "@/components/chameleon/Services";
import Gallery from "@/components/chameleon/Gallery";
import About from "@/components/chameleon/About";
import Faq from "@/components/chameleon/Faq";
import Contact from "@/components/chameleon/Contact";
import Footer from "@/components/chameleon/Footer";

export default function Home() {
  return (
    <div className="bg-[#F7F7F5] text-[#121212] antialiased">
      <AdaptiveCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

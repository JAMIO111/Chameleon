import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Where are you based?",
    a: "We are based in Benton but cover the whole of the North East.",
  },
  {
    q: "Do you offer free quotes?",
    a: "We do, yes — just send over some pictures of what you'd like wrapped and we can price it up for you. The pictures must show the whole area so we can see clearly.",
  },
  {
    q: "How durable is the vinyl?",
    a: "It is quite durable, however not indestructible, so we advise the use of a chopping board and pan stand.",
  },
  {
    q: "Do we get any kind of warranty?",
    a: "Yes, we offer a 12-month warranty on lifts and peels.",
  },
  {
    q: "How long will it last?",
    a: "It can last as long as you'd like it to — as long as it's looked after, it can last years.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes, to confirm a booking we require a non-refundable 30% deposit, which comes off the final cost on the day of completion.",
  },
  {
    q: "Are we able to get a receipt?",
    a: "Yes — if you send your email address, we can send you a receipt once payment is received.",
  },
  {
    q: "How do we pay?",
    a: "Deposits can be paid by bank transfer, and final payments can be made by bank transfer or cash.",
  },
  {
    q: "How do we choose colours?",
    a: "We have a variety of colours. You can pop along and have a look at the swatch book, we can send pictures, or if you have an idea of what you'd like and we have the colours available, we can post out samples. There is also a variety of photos on our page to help with ideas.",
  },
  {
    q: "How long does it take to do?",
    a: "This depends on the style of your doors and how many bits there are in your kitchen to do — the average time is 1–3 days.",
  },
  {
    q: "Do the backs of the doors get wrapped?",
    a: "No, the vinyl gets folded over the back and cut neatly — they can be done for an extra charge, though.",
  },
  {
    q: "Is it best to get tiling and flooring before or after wrapping?",
    a: "We recommend getting these done first, then the wrapping done last. If you're wanting a new sink, it's also best to get that done first too.",
  },
  {
    q: "Can you wrap over tiles?",
    a: "No, unfortunately we can't.",
  },
  {
    q: "Can you wrap over cupboards which have been painted?",
    a: "Again, no sorry — unfortunately we can't.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      data-swatch="#4A5D4E"
      className="bg-[#F7F7F5] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#4A5D4E]">
          FAQ — THE SPEC SHEET
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
          You asked, <span className="italic text-[#4A5D4E]">We answered</span>.
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="border-b border-[#121212]/10">
              <AccordionTrigger className="group gap-4 py-6 text-left hover:no-underline [&>svg]:hidden">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#4A5D4E]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-lg font-normal leading-snug text-[#121212]">
                  {item.q}
                </span>
                <span className="font-mono text-lg text-[#B8860B] transition-transform duration-300 group-data-[state=open]:rotate-45">
                  +
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-9 pr-8 text-base leading-relaxed text-[#121212]/60">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

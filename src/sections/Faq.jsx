import TitleText from "@/components/TitleText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { cake, faqBlue, faqRed } from "@/assets";
import { faqList } from "@/lib/constants";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  useGSAP(() => {
    gsap.from(".faq-right", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#faq",
        start: "bottom, bottom",
      },
    });
    gsap.from(".faq-left", {
      x: -55,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#faq",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <section
      id="faq"
      className="flex flex-col md:flex-row gap-10 items-start justify-center px-6 md:px-16 lg:px-24 py-12 mb-10"
    >
      {/* Left Content */}
      <div className="relative w-full md:w-1/3 flex flex-col items-center">
        <TitleText title="Frequently Asked Questions" addClass={"faq-left"} />
        <p className="mt-5 faq-left">
          If your query isn&apos;t among the FAQ, please do not hesitate to send
          us a inquiry via the form in the Contact section below
        </p>
        <img
          src={faqRed}
          alt="Hero"
          className="w-full max-w-md mx-auto md:max-w-none faq-left"
        />
      </div>

      {/* Right Image */}
      <div className=" flex flex-col items-center md:items-start w-full md:text-left max-w-xl faq-right">
        <Accordion type="single" collapsible className="w-full">
          {faqList.map((item, i) => (
            <AccordionItem
              value={`item-${i + 1}`}
              key={i}
              className={`hover:bg-gray-100 px-2 rounded-lg ${
                i % 2 == 0 ? "bg-[#fff0f1]" : "bg-white"
              }`}
            >
              <AccordionTrigger className="font-semibold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-md font-light">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;

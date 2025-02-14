import { cityLogo, wilsonLogo } from "../assets";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
  // Load animation

  useGSAP(() => {
    gsap.from(".main-text", {
      y: 25,
      opacity: 0,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#quote",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <div
      id="quote"
      className="h-[300px] bg-redTheme flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 md:gap-10 gap-5"
    >
      <img
        src={cityLogo}
        alt="city guilds logo"
        className="md:w-30 md:h-30 w-15 h-15 main-text"
      />
      <p className="text-white font-medium text-lg md:text-xl lg:text-3xl text-center px-2 md:px-10 lg:px-20 main-text">
        Our esteemed affiliations with international qualification providers
        such as City and Guilds-UK and Wilton-US further underscore our
        dedication to excellence.
      </p>
      <img
        src={wilsonLogo}
        alt="city guilds logo"
        className="md:w-30 md:h-16 w-15 main-text"
      />
    </div>
  );
};

export default Quote;

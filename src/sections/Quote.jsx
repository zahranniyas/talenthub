import { cityLogo, nvq, tvec, wilsonLogo } from "../assets";
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
      className="h-[300px] bg-redTheme flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 md:gap-10 gap-5"
    >
      <p className="text-white font-medium text-lg md:text-xl lg:text-3xl text-center px-2 md:px-10 lg:px-20 main-text">
        Our esteemed affiliations with international qualification providers
        such as City and Guilds-UK and Wilton-US further underscore our
        dedication to excellence.
      </p>
      <div className="flex items-center gap-5">
        <img
          src={cityLogo}
          alt="city guilds logo"
          className="md:w-20 md:h-20 w-10 h-10 main-text"
        />
        <img
          src={tvec}
          alt="city guilds logo"
          className="md:w-20 w-10 main-text"
        />
        <img
          src={nvq}
          alt="city guilds logo"
          className="md:w-20 w-10 main-text"
        />
      </div>
    </div>
  );
};

export default Quote;

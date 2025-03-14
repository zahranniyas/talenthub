import { abs01, cake } from "../assets";
import TitleText from "../components/TitleText";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".about-text", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "bottom, bottom",
      },
    });
    gsap.from(".about-img", {
      x: 55,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <section
      id="about"
      className="flex h-auto flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12"
    >
      {/* Left Content */}
      <div className="text-center flex flex-col items-center md:items-start md:text-left max-w-xl">
        <TitleText title="About Us" addClass={"about-text"} />
        <p className="my-4 text-xs md:text-base about-text">
          At Talent Hub, we believe in the power of education to unlock
          potential and create opportunities. Our diverse range of vocational
          training programs includes Cookery, Bakery, Cake Decoration, Beauty
          Culture, Mehendi (Henna Art), and Dress Making. These programs are
          designed to equip our students with the skills and confidence they
          need to achieve their dreams and make a meaningful impact in their
          communities.
        </p>
        <div className="grid grid-cols-2 text-left grid-rows-1 gap-2 ">
          <div className="bg-blueLight rounded-lg flex flex-col gap-3 p-4 relative overflow-hidden about-text">
            <h1 className="md:text-2xl text-lg font-semibold z-20 relative">
              Our Vision
            </h1>
            <p className="text-xs z-20 relative">
              To be the leading and most productive training provider in Sri
              Lanka. Supporting women&apos;s empowerment and nation building
              through skill development
            </p>
            <div className="absolute w-full h-full overflow-hidden top-0 left-0 z-10 opacity-10">
              <img
                src={abs01}
                alt="abstract"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="bg-redLight text-left rounded-lg flex flex-col gap-3 p-4 relative overflow-hidden about-text">
            <h1 className="md:text-2xl text-lg font-semibold z-20 relative">
              Our Mission
            </h1>
            <p className="text-xs z-20 relative">
              To provide young and adult women with hands-on knowledge and skill
              training, to increase competency with national & international
              professional standards, and to improve women&apos;s employability
              and self-sustainability
            </p>
            <div className="absolute w-full h-full top-0 left-0 z-10 opacity-10">
              <img
                src={abs01}
                alt="abstract"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="col-span-2 text-left bg-yellowLight rounded-lg flex flex-col gap-5 p-4 relative overflow-hidden about-text">
            <h1 className="md:text-2xl text-lg font-semibold z-20 relative">
              Our Vision
            </h1>
            <ul className="text-xs flex flex-col gap-1 z-20 relative">
              <li>
                <span className="font-semibold">Competency</span> - Enhancing
                competency with practical and hands-on experience.
              </li>
              <li>
                <span className="font-semibold">High Standards</span> - Striving
                for high standards and professionalism, meeting national and
                international levels.
              </li>
              <li>
                <span className="font-semibold">Empowerment</span> - Empowering
                stakeholders to meet employment demands and life enhancement.
              </li>
              <li>
                <span className="font-semibold">Freedom</span> - Promoting
                freedom from economic burdens with high competency and
                professionalism.
              </li>
              <li>
                <span className="font-semibold">Team Work</span> - Motivating
                team work to achieve results in synergy.
              </li>
            </ul>
            <div className="absolute w-full h-full top-0 left-0 z-10 opacity-10">
              <img
                src={abs01}
                alt="abstract"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2 about-img">
        <img
          src={cake}
          alt="Hero"
          className="w-full max-w-md mx-auto md:max-w-none"
        />
      </div>
    </section>
  );
};

export default About;

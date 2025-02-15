import { heroBg, heroImg, logo } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.inOut",
    });
    gsap.from(".hero-img", {
      x: 55,
      duration: 2,
      opacity: 0,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      className="flex h-[100vh] flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Left Content */}
      <div className="text-center flex flex-col items-center md:items-start md:text-left max-w-lg">
        <img src={logo} alt="logo" className="w-20 mb-4 hero-text" />
        <div className="text-3xl md:text-5xl font-protest leading-tight ">
          <h1 className="text-blueTheme hero-text">Empowering Women,</h1>
          <h1 className="text-redTheme hero-text">Transforming Futures</h1>
        </div>
        <p className="my-4 text-gray-600 md:text-lg hero-text">
          Welcome to Talent Hub, a beacon of empowerment and skill development
          for young girls and women. As a TVEC approved vocational training
          institute, we are committed to nurturing talents and transforming
          lives.
        </p>
        <p className="md:text-lg text-gray-600 hero-text">
          Our diverse range of programs include{" "}
          <span className="font-yesteryear ml-1 text-2xl">Cookery</span>
        </p>
        <a
          href="#about"
          className="hero-text mt-6 px-6 py-3 bg-redTheme text-white rounded-lg hover:bg-blueTheme transition-colors cursor-pointer"
        >
          Get Started
        </a>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-[45%] max-sm:mb-5">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-xs mx-auto md:max-w-none shadow-2xl rounded-4xl hero-img"
        />
      </div>
    </section>
  );
};

export default Hero;

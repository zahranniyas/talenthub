import { heroBg, heroImg, logo } from "../assets";

const Hero = () => {
  return (
    <section
      className="flex md:h-[100vh] h-auto flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Left Content */}
      <div className="text-center flex flex-col items-center md:items-start md:text-left max-w-lg">
        <img src={logo} alt="logo" className="w-20 mb-4" />
        <div className="text-3xl md:text-5xl font-protest leading-tight ">
          <h1 className="text-blueTheme">Empowering Women,</h1>
          <h1 className="text-redTheme">Transforming Futures</h1>
        </div>
        <p className="my-4 text-gray-600 md:text-lg">
          Welcome to Talent Hub, a beacon of empowerment and skill development
          for young girls and women. As a TVEC approved vocational training
          institute, we are committed to nurturing talents and transforming
          lives.
        </p>
        <p className="md:text-lg text-gray-600">
          Our diverse range of programs include{" "}
          <span className="font-yesteryear ml-1 text-2xl">Cookery</span>
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-md mx-auto md:max-w-none"
        />
      </div>
    </section>
  );
};

export default Hero;

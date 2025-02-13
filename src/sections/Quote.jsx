import { cityLogo, wilsonLogo } from "../assets";

const Quote = () => {
  return (
    <div className="h-[300px] bg-redTheme flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 md:gap-10 gap-5">
      <img
        src={cityLogo}
        alt="city guilds logo"
        className="md:w-30 md:h-30 w-15 h-15"
      />
      <p className="text-white font-medium text-lg md:text-xl lg:text-3xl text-center px-2 md:px-10 lg:px-20">
        Our esteemed affiliations with international qualification providers
        such as City and Guilds-UK and Wilton-US further underscore our
        dedication to excellence.
      </p>
      <img
        src={wilsonLogo}
        alt="city guilds logo"
        className="md:w-30 md:h-16 w-15"
      />
    </div>
  );
};

export default Quote;

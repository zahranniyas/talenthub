import { comingsoonVid } from "@/assets";

const ComingSoon = () => {
  return (
    <div className="h-[100dvh] w-full bg-black flex flex-col justify-center items-center text-white">
      <video
        autoPlay
        playsInline={true}
        preload="auto"
        muted
        loop
        className="lg:w-[30%] md:w-[60%] w-[90%]"
      >
        <source src={comingsoonVid} type="video/mp4" />
      </video>
      <h1 className="text-white mt-[50px] lg:text-3xl md:text-2xl text-xl">
        Talent Hub
      </h1>
      <p className="text-xs md:text-base lg:text-lg">
        website is currently under construction
      </p>
      <p className="mt-5">Please check back soon!</p>
    </div>
  );
};

export default ComingSoon;

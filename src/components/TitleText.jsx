const TitleText = ({ title }) => {
  return (
    <div className="relative">
      <h1 className="font-bold relative z-20 text-3xl">{title}</h1>
      <div
        className={`absolute z-10 left-[-8px] top-0 w-[100px] h-[35px] bg-[#fff0f1] rounded-lg rotate-[-8deg]`}
      ></div>
    </div>
  );
};

export default TitleText;

import { cake } from "../assets";
import TitleText from "../components/TitleText";

const About = () => {
  return (
    <section className="flex md:h-[100vh] h-auto flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12">
      {/* Left Content */}
      <div className="text-center flex flex-col items-center md:items-start md:text-left max-w-xl">
        <TitleText title="About Us" />
        <p className="my-4 text-xs">
          At Talent Hub, we believe in the power of education to unlock
          potential and create opportunities. Our diverse range of vocational
          training programs includes Cookery, Bakery, Cake Decoration, Beauty
          Culture, Mehendi (Henna Art), and Dress Making. These programs are
          designed to equip our students with the skills and confidence they
          need to achieve their dreams and make a meaningful impact in their
          communities.
        </p>
        <div className="grid grid-cols-2 grid-rows-1 gap-2 ">
          <div className="bg-blueLight rounded-lg flex flex-col gap-3 p-4">
            <h1 className="text-2xl font-semibold">Our Vision</h1>
            <p className="text-xs">
              To be the leading and most productive training provider in Sri
              Lanka. Supporting women&apos;s empowerment and nation building
              through skill development
            </p>
          </div>
          <div className="bg-redLight rounded-lg flex flex-col gap-3 p-4">
            <h1 className="text-2xl font-semibold">Our Mission</h1>
            <p className="text-xs">
              To provide young and adult women with hands-on knowledge and skill
              training, to increase competency with national & international
              professional standards, and to improve women&apos;s employability
              and self-sustainability
            </p>
          </div>
          <div className="col-span-2 bg-yellowLight rounded-lg flex flex-col gap-5 p-4">
            <h1 className="text-2xl font-semibold">Our Vision</h1>
            <ul className="text-xs flex flex-col gap-1">
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
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2">
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

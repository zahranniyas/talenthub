import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TitleText from "../components/TitleText";
import { cakeDecor01, cakeDecor02, cakeDecor03 } from "@/assets";
import { FaRegClock } from "react-icons/fa6";

const coursesList = [
  {
    title: "Cake Decorator",
    cert: "NVQ-SL",
    content:
      "Master the art of cake decoration with our NVQ-certified course. Learn advanced techniques in icing, piping, and sugar craft to create professional and stunning cake designs.",
    duration: "6 Months",
    img: cakeDecor01,
  },
  {
    title: "Cake Decorator",
    cert: "Basic Certificate",
    content:
      "Begin your journey in cake decoration with our Basic Certificate course. Gain foundational skills in cake design, including basic icing and decorating techniques, to create beautiful cakes.",
    duration: "3 Months",
    img: cakeDecor02,
  },
  {
    title: "Dress Maker",
    cert: "Basic Certificate",
    content:
      "Develop your fashion design skills with our Dress Maker course. Learn the fundamentals of garment construction, pattern making, and sewing to create stylish and well-fitted clothing.",
    duration: "3 Months",
    img: cakeDecor03,
  },
  {
    title: "Cake Decorator",
    cert: "NVQ-SL",
    content:
      "Master the art of cake decoration with our NVQ-certified course. Learn advanced techniques in icing, piping, and sugar craft to create professional and stunning cake designs.",
    duration: "6 Months",
    img: cakeDecor01,
  },
];

const Courses = () => {
  return (
    <div className="flex flex-col items-center mb-[100px]">
      <TitleText title="Courses" />
      <p className="w-2xl text-center my-5">
        Our diverse range of programs are designed to equip our students with
        the skills and confidence they need to achieve their dreams and make a
        meaningful impact in their communities.
      </p>
      <div className="mt-10 text-white px-6 md:px-16 lg:px-30">
        <Carousel
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //   }),
        // ]}
        >
          <CarouselContent>
            {coursesList.map((item, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="rounded-lg p-5 flex flex-col justify-between h-[500px]"
                >
                  <div>
                    <h2 className="text-4xl font-semibold">{item.title}</h2>
                    <p className="font-thin text-md">{item.cert}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>{item.content}</p>
                    <div className="flex items-center gap-2 text-xs font-thin">
                      <FaRegClock />
                      <p>Duration - {item.duration}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </div>
  );
};

export default Courses;

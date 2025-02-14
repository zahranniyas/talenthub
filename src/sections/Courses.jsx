import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TitleText from "../components/TitleText";
import {
  baker01,
  cakeDecor01,
  cakeDecor02,
  cakeDecor03,
  cityg01,
  henna01,
  wilton01,
} from "@/assets";
import { FaRegClock } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ApplyForm } from "@/components/ApplyForm";

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
    title: "Baker Certificate",
    cert: "",
    content:
      "Become a skilled baker with our comprehensive Baker course. Learn the essentials of bread, pastry, and dessert making, and gain hands-on experience to excel in the baking industry.",
    duration: "6 Months",
    img: baker01,
  },
  {
    title: "Henna Designer",
    cert: "Basic Certificate",
    content:
      "Explore the intricate world of henna art with our Henna Designer course. Learn the history, techniques, and designs of henna application, from basic patterns to elaborate bridal designs.",
    duration: "2 Months",
    img: henna01,
  },
  {
    title: "City and Guilds Courses",
    cert: "Basic Certificate",
    content:
      "Achieve international recognition with our City and Guilds-UK certification for patisserie and confectionary. This certification ensures you have mastered advanced techniques in the relevant field making you a sought-after professional in the industry.",
    duration: "4 Months",
    img: cityg01,
  },
  {
    title: "Wilton Courses",
    cert: "Basic Certificate",
    content:
      "Elevate your cake decorating skills with our Wilton-US certification in 3 levels. Known for its excellence in cake decoration, this certification covers a wide range of techniques and styles, from basic to advanced, ensuring you can create stunning and professional-quality cakes.",
    duration: "4 Classes",
    img: wilton01,
  },
];

const Courses = () => {
  return (
    <div className="flex flex-col items-center mb-[100px]">
      <TitleText title="Courses" />
      <p className="md:w-2xl w-full px-4 md:px-0 text-center my-5">
        Our diverse range of programs are designed to equip our students with
        the skills and confidence they need to achieve their dreams and make a
        meaningful impact in their communities.
      </p>
      <div className="mt-10 text-white w-full px-6 md:px-16 lg:px-30">
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
          <CarouselPrevious className="text-black max-md:left-2" />
          <CarouselNext className="text-black max-md:right-2" />
        </Carousel>
      </div>
      <div className="mt-5">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="cursor-pointer bg-redTheme text-white"
            >
              Apply Now
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto  w-full max-w-sm text-xs">
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Application Form
                </DrawerTitle>
                <DrawerDescription className="text-center">
                  Please fill all the fields in the form below and send it to
                  us. We will reach out to you for further assistance
                </DrawerDescription>
              </DrawerHeader>
              <div className=" pb-0">
                <ApplyForm />
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Courses;

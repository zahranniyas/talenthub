import TitleText from "@/components/TitleText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { cake } from "@/assets";

const Faq = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-10 items-start justify-center px-6 md:px-16 lg:px-24 py-12">
      {/* Left Content */}
      <div className="relative w-full md:w-1/3">
        <img
          src={cake}
          alt="Hero"
          className="w-full max-w-md mx-auto md:max-w-none"
        />
      </div>

      {/* Right Image */}
      <div className="text-center flex flex-col items-center md:items-start w-full md:text-left max-w-xl">
        <TitleText title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="w-full mt-5 ">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Talent Hub?</AccordionTrigger>
            <AccordionContent>
              Talent Hub is a TVEC-approved vocational training institute in Sri
              Lanka, offering a range of courses to empower young girls and
              women. We are also affiliated with international qualification
              providers such as City and Guilds-UK and Wilton-US.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Where is Talent Hub located?</AccordionTrigger>
            <AccordionContent>
              Talent Hub is located in Dematagoda, Western Province, Sri Lanka.
              It is situated in the lane between commercial bank in base line
              road and lucky star clothing. It is around 500 meters from the
              Dematagoda railway station and Orion city.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can I contact Talent Hub?</AccordionTrigger>
            <AccordionContent>
              You can contact us via email at info@talenthublk.com or call us or
              chat via WhatsApp at +94 72 127 5281. Our official hours are
              between 9am to 5pm. Please leave a WhatsApp message beyond these
              hours or if you are unanswered. We will make sure to communicate
              within the earliest possible time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What are the operating hours of Talent Hub?
            </AccordionTrigger>
            <AccordionContent>
              Our operating hours are Monday to Saturday, from 9:00am to 5:00pm.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Are the courses at Talent Hub approved and certified?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our courses are approved by TVEC and international
              qualification providers such as City and Guilds-UK and Wilton-US.
              Get further details about each courses and their certifications
              from the office.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What courses does Talent Hub offer?
            </AccordionTrigger>
            <AccordionContent>
              We offer a variety of vocational training programs, including
              Cookery, Bakery, Cake Decoration, Beauty Culture, Mehendi (Henna
              Art), and Dress Making. Details of the latest course offerings can
              be obtained from our office.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              What is the duration of the course?
            </AccordionTrigger>
            <AccordionContent>
              The duration of each course varies. It ranges from 2 month to 6
              months. Please contact us for specific course durations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Do I need any prior experience to enroll in a course?
            </AccordionTrigger>
            <AccordionContent>
              No prior experience is required for most of our courses. Our
              programs are designed to cater to beginners as well as those
              looking to enhance their skills. But for some courses you may need
              prior learning. Check with us for specific details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              Are there any age restrictions for enrolling in the courses?
            </AccordionTrigger>
            <AccordionContent>
              Our courses are primarily aimed at young girls and women, but
              there are no strict age restrictions. Please contact us for more
              information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>How can I enroll in a course?</AccordionTrigger>
            <AccordionContent>
              You can enroll in a course by visiting our website and filling out
              the online registration form, or by contacting us directly. Then
              you will be directed through next steps.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>How much will it cost?</AccordionTrigger>
            <AccordionContent>
              There will be an admission fee for each course. The course fee of
              each course will vary. Please contact us for specific course fee
              details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;

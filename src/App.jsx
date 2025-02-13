import Courses from "./sections/Courses";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Quote from "./sections/Quote";
import Testimonial from "./sections/Testimonial";
import Faq from "./sections/Faq";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <div className="font-urbanist">
      {/* <Hero />
      <Quote />
      <About />
      <Courses />
      <Faq />
      <Testimonial /> */}
      <ComingSoon />
    </div>
  );
}

export default App;

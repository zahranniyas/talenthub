import Courses from "./sections/Courses";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Quote from "./sections/Quote";
import Testimonial from "./sections/Testimonial";
import Faq from "./sections/Faq";
import ComingSoon from "./components/ComingSoon";
import Apply from "./sections/Apply";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="font-urbanist">
      <Hero />
      <Quote />
      <About />
      <Courses />
      <Faq />
      <Contact />
      <Footer />
      {/*<Apply /> */}
      {/* <Testimonial /> */}
      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;

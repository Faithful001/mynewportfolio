import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

const Body = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Body;

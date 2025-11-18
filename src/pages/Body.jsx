import About from "../components/About";
import CalCom from "../components/CalCom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

const Body = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <CalCom />
      {/* <Footer /> */}
    </div>
  );
};

export default Body;

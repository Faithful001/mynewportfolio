
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  

  return (
    <>
      <div className="max-w-7xl mx-3">
        <Header/>
        <Home/>
        <About/>
        {/* <Work/> */}
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

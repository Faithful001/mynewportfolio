import React from "react";
import Services from "./Services";
import Work from "./Work";
import faithful from "../assets/faithful.jpg";

const About = () => {
  const techs = [
    { image: "/src/assets/portfolio-pngs/html.png", text: "HTML" },
    { image: "/src/assets/portfolio-pngs/css.png", text: "CSS" },
    { image: "/src/assets/portfolio-pngs/javascript.png", text: "Javascript" },
    { image: "/src/assets/portfolio-pngs/jquery.png", text: "JQuery" },
    { image: "/src/assets/portfolio-pngs/bootstrap.png", text: "BootStrap" },
    { image: "/src/assets/portfolio-pngs/reactjs.png", text: "React" },
    { image: "/src/assets/portfolio-pngs/tailwind.png", text: "Tailwind" },
    { image: "/src/assets/portfolio-pngs/typescript.png", text: "TypeScript" },
    { image: "/src/assets/portfolio-pngs/nodejs.png", text: "Node JS" },
    { image: "/src/assets/portfolio-pngs/python.png", text: "Python" },
    // { image: "/src/assets/portfolio-pngs/php.png", text: "PHP" },
    { image: "/src/assets/portfolio-pngs/linux.png", text: "Linux" },
    { image: "/src/assets/portfolio-pngs/git.png", text: "Git" },
  ];
  return (
    <div className="md:px-10 px-7 pt-16 sm:-mt-24" id="about">
      <h1 className="text-[#1B99F7] font-semibold text-2xl mt-5">About me</h1>
      <p className="my-3 text-white text-sm md:w-2/3 leading-[27px]">
        Hi, my name is Faithful Eromosele, I am a Fullstack web developer and UI
        designer. I have honed my skills in Web Development and have core
        understanding of advance UI design principles. <br />
        <p className="mt-5">
          I have used and still use a couple of tools and languages for my
          development process. I have listed a few of them below
        </p>
      </p>

      {/* <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">5+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div> */}

      {/* skills */}
      <div className="lang-pic md:flex justify-evenly">
        <div className="grid grid-cols-4">
          {techs.map((tech, index) => (
            <div key={index} className="">
              <img
                src={tech.image}
                alt=""
                className="p-4 h-[70px] grayscale hover:grayscale-0 cursor-pointer transition-all duration-500"
              />
              <p className="ml-6 text-xs text-white">{tech.text}</p>
            </div>
          ))}
        </div>
        <div className="faithful my-10 flex justify-center">
          <div className="border-dashed border-2 border-primary rounded-xl p-2">
            <img
              className="h-[300px] rounded cursor-pointer grayscale hover:grayscale-0 transition-all duration-300"
              src={faithful}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* services section */}
      {/* <Services /> */}
    </div>
  );
};

export default About;

import React from "react";
import emoji from "../assets/memoji1.png";
import my_resume from "./fullstack_resume.pdf";

const Hero = () => {
  return (
    <div
      className="home mt-12 relative md:bottom-20 bottom-[20px] md:px-10 px-7 md:h-screen flex flex-col md:flex-row items-center justify-center"
      id="home"
    >
      {/* <div className="section "> */}
      <div className="flex flex-col items-center justify-between w-full section md:flex-row">
        {/* image & content */}
        {/* text */}
        <div className="text-white">
          {/* <h6 className="mt-12 -mb-2 text-xl opacity-80">
            Hello there. My name is
          </h6> */}
          <h1 className="md:leading-[70px] leading-[50px] my-4 md:text-[64px] text-[50px] text-[#1B99F7] font-bold">
            Innovative Software <br /> Engineer.
          </h1>
          <p className="max-w-xl opacity-80">
            Software Developer & Problem Solver. I build deliberate world-class
            software. I like to craft beautiful, user-friendly, yet sophiticated
            products
          </p>
          <div className="mt-5">
            <a
              href="https://drive.google.com/file/d/1VpgEhGiA6MER2XU4tD6hZrSZ4c-YCM76/view?usp=sharing"
              //   download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-28 transition-all duration-500 bg-[#000000] outline-none outline-offset-1 outline-[#1B99F7] py-2 px-7 rounded hover:bg-[#1b98f734] text-[#1B99F7] text-sm"
            >
              Resume
              <span className="material-symbols-outlined">download</span>
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-full w-40 h-40 p-20 opacity-40 blur-3xl bg-[#1B99F7] absolute top-0 right-6" />
      <div className="rounded-full w-40 h-40 p-20 opacity-40 blur-3xl bg-[#1B99F7] absolute bottom-0 left-6" />
      <img
        className="md:h-[420px] md:max-w-[420px] h-[288px] max-w-[288px]"
        src={emoji}
        alt=""
      />
    </div>
  );
};

export default Hero;

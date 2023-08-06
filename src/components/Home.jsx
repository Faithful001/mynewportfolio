import React from "react";
import Img from "../assets/Willie.png";
import circle from "../assets/circle.png";
import img2 from "../assets/img2.png";
import Header from "./Header";
import emoji from "../assets/memoji1.png"

const Home = () => {
  return (
    <div
      className="home md:px-10 px-7 -mt-5 md:h-screen flex items-center justify-center"
      id="home"
    >
      {/* <div className="section "> */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-white">
            <h6 className="text-xl mt-12 -mb-2 opacity-80">
              Hello, my name is
            </h6>
            <h1 className="md:leading-[70px] leading-[50px] my-4 md:text-[64px] text-[50px] text-[#1B99F7] font-bold">
              Faithful Eromosele
            </h1>
            <p className="max-w-xl opacity-80">
              Software Developer & Problem Solver. I create software with world class functionalities. My job is to give you a beautiful,
              user-friendly, yet sophiticated product
            </p>
            <div className="mt-5">
              <button className="transition-all duration-500 bg-[#000000] outline-none outline-offset-1 outline-[#1B99F7] py-2 px-7 rounded hover:bg-[#1b98f734] text-[#1B99F7] text-sm">
                Resume
              </button>
            </div>
          </div>
          <img className="md:h-96 md:max-w-[384px] h-72 max-w-[288px]" src={emoji} alt="" />
        </div>
      {/* </div> */}
    </div>
  );
};

export default Home;

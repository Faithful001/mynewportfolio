import React from "react";
import Img from "../assets/Willie.png";
import circle from "../assets/circle.png";
import img2 from "../assets/img2.png";
import Header from "./Header";

const Home = () => {
  return (
    <div
      className="home md:px-10 px-7 pt-10 my-12 md:h-screen"
      id="home"
    >
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-white">
            <h6 className="text-xl mt-12 -mb-2 opacity-80">
              Hello, my name is
            </h6>
            <h1 className="leading-[70px] my-4 text-[4rem] text-[#1B99F7] font-bold">
              Faithful Eromosele
            </h1>
            <p className="max-w-xl opacity-80">
              Software Developer & Problem Solver. I create seamless software
              experiences for end-users. My job is to give you a beautiful,
              user-friendly, yet sophiticated product
            </p>
            <div className="mt-5">
              <button className="transition-all duration-500 bg-[#000000] outline-none outline-offset-1 outline-[#1B99F7] py-2 px-7 mt-3 rounded hover:bg-[#1b98f734] text-[#1B99F7] text-sm">
                Resume
              </button>
            </div>
          </div>
          {/* img */}
          {/* <div className='order-first md:order-last relative'>
                        <img src={img2} alt="" />
                    </div> */}
        </div>
      </div>
      <div className="h-24 w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
};

export default Home;

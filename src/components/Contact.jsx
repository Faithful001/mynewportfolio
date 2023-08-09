import React from "react";
import github from '../assets/socialss/github.png';
import facebook from '../assets/socialss/facebook.png';
import twitter from '../assets/socialss/twitter.png';
import instagram from '../assets/socialss/instagram.png';
import linkedin from '../assets/socialss/linkedin.png';

const Contact = () => {
  return (
    <div className="md:px-10 px-5 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-primary font-semibold text-2xl mt-16">
        Get In Touch
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
      {/* Satisfied with me? Please contact me */}
      </p>
      {/* social icons */}
      <div className="flex mt-8">
        <a href="https://www.linkedin.com/in/joshua-harris-321a24190/" target="_blank" rel="noreferrer">
          <img className="h-[22px] mr-5" src={github} alt="" />
        </a>
        <a className="ml-4" href="https://github.com/joshua-harris" target="_blank" rel="noreferrer">
        <img className="h-[22px] mr-5" src={facebook} alt="" />
        </a>
        <a className="ml-4" href="mailto:anpch@example.com" target="_blank" rel="noreferrer">
        <img className="h-[22px] mr-5" src={twitter} alt="" />
        </a>
        <a className="ml-4" href="mailto:anpch@example.com" target="_blank" rel="noreferrer">
        <img className="h-[22px] mr-5" src={instagram} alt="" />
        </a>
        <a className="ml-4" href="mailto:anpch@example.com" target="_blank" rel="noreferrer">
        <img className="h-[22px] mr-5" src={linkedin} alt="" />
        </a>
      </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-white text-base mb-6">Contact me, let's make magic together</p>
            <form>
                <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
                <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
                  Send
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

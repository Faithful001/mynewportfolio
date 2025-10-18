import React from "react";
import github from "../assets/socialss/github.png";
import financetracker from "../assets/projects/finance_tracker.png";
import diktion from "../assets/projects/diktion.png";
import workoutbuddy from "../assets/projects/workoutapp.png";
import saler from "../assets/projects/saler.png";
import appnovia from "../assets/projects/appnovia.png";
import vulue from "../assets/projects/vulue.png";
import mealstaer from "../assets/projects/mealstaer.png";
import bandage from "../assets/projects/bandage.png";
import owe_app from "../assets/projects/owe-app.png";
import wealthy_elephant from "../assets/projects/wealthy_elephant.png";
import fourgeehub from "../assets/projects/4geehub.png";
import fundify from "../assets/projects/fundify.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  const [showPrivate, setShowPrivate] = useState("");
  // console.log(showPrivate);

  function handleMouseEnter(project) {
    setShowPrivate(`true ${project}`);
  }
  function handleMouseLeave(project) {
    setShowPrivate(`false ${project}`);
  }

  function handleClick(e) {
    e.preventDefault();
    // Handle the click event logic here, if needed
  }
  const projects = [
    {
      title: "4GEE HUB",
      description:
        "4GEE Hub is a customer focused platform providing users with the best rates to trade their giftcards on the go.",
      technologies: ["React JS", "Redux", "RTK Query"],
      live_url: "https://4geehub.ng/",
      github_url: null,
      photo: fourgeehub,
    },
    {
      title: "WEALTHY ELEPHANT",
      description: "Wealthy Elephant Landing Page.",
      technologies: ["Next JS", "Context API", "Axios"],
      live_url: "https://www.wealthyelephant.com",
      github_url: null,
      photo: wealthy_elephant,
    },
    {
      title: "FUNDIFY",
      description:
        "A decentralized crowdfunding platform built on Ethereum (Sepolia Testnet) that enables trustless fundraising through cryptocurrency contributions",
      technologies: ["Solidity", "Next JS", "Third Web", "Cloudinary"],
      live_url: "https://funddifyy.vercel.app/",
      github_url: "https://github.com/Faithful001/fundify-app",
      photo: fundify,
    },
    {
      title: "OWE APP",
      description:
        "Owe is your Yoruba learning assistant. Level up your Yoruba, with every proverb. Yoruba wisdom, at your fingertips!",
      technologies: [
        "Next JS",
        "Node JS",
        "Gemini API",
        "Text-to-Speech",
        // "Speech-to-Text",
      ],
      live_url: "https://oweyoruba.vercel.app/",
      github_url: null,
      photo: owe_app,
    },
    {
      title: "MEALSTAER",
      description:
        "Your meal planning buddy. Effortlessly organize and plan your meals anytime, anywhere.",
      technologies: ["React JS", "Node JS", "REST API"],
      live_url: "https://mealstaerr.vercel.app",
      github_url: "https://github.com/Faithful001/mealstaer",
      photo: mealstaer,
    },

    {
      title: "FINANCE TRACKER",
      description:
        "Your Comprehensive Full-Stack Web Application for Seamless Transaction Management: A dynamic full-stack web application designed to effortlessly record and manage your financial transactions",
      technologies: ["React JS", "Node JS", "REST API"],
      live_url: "https://financetraccker.vercel.app/",
      github_url: "https://github.com/Faithful001/finance-tracker-app",
      photo: financetracker,
    },
    {
      title: "SALER APP LANDING PAGE",
      description:
        "Saler App Landing Page: Captivating entry point designed to engage and inform users about the Saler app.",
      technologies: ["React JS", "Tailwind"],
      live_url: "https://salerr.vercel.app",
      github_url: "https://github.com/Faithful001/saler-landing_page",
      photo: saler,
    },
    {
      title: "WORKOUT BUDDY",
      description:
        "A comprehensive fullstack web app designed to help you effortlessly log and monitor your workout exercises. Stay motivated with detailed exercise records and performance analytics.",
      technologies: ["React JS", "Node JS", "REST API"],
      live_url: "https://work-out-buddyy.vercel.app",
      github_url: "https://github.com/Faithful001/workout-app",
      photo: workoutbuddy,
    },
    // {
    //   title: "APPNOVIA",
    //   description:
    //     "Responsive landing page for Appnovia. This page ensures optimal user experience across all devices",
    //   technologies: ["Next JS", "Typescript", "Tailwind CSS"],
    //   live_url: "https://appnovia-web.vercel.app/",
    //   github_url: "https://github.com/Faithful001/appnovia_web",
    //   photo: appnovia,
    // },

    // {
    // 	title: "VULUE LANDING PAGE",
    // 	description: "Landing page of the vulue app.",
    // 	technologies: ["React JS", "Tailwind"],
    // 	live_url: "https://vulue.org/",
    // 	github_url: "https://github.com/Faithful001/vulue_landing_page",
    // 	photo: vulue,
    // },
    // {
    //   title: "DIKTION",
    //   description:
    //     "An intuitive app for searching your favorite words. Discover definitions, synonyms, and more. Dare to search and expand your vocabulary!",
    //   technologies: ["React JS", "Typescript", "REST API"],
    //   live_url: "https://diktion.vercel.app/",
    //   github_url: "https://github.com/Faithful001/diktion",
    //   photo: diktion,
    // },
    // {
    //   title: "BANDAGE LANDING PAGE",
    //   description:
    //     "A sleek, responsive landing page featuring an intuitive add-to-cart functionality. Enhance your shopping experience with seamless product selection and purchase capabilities.",
    //   technologies: ["Next JS", "Tailwind"],
    //   live_url: "https://basket-ecommerce.vercel.app",
    //   github_url: null,
    //   photo: bandage,
    // },
  ];

  // const techs = projects.map((tech) => {
  // 	return tech.technologies.split(",");
  // });

  return (
    // changeable
    <div className="md:px-10 px-7 pt-14 sm:-mt-24" id="projects">
      <div className="">
        <h1 className="text-[#1B99F7] font-semibold text-2xl mt-16">
          Featured Projects
        </h1>
        <p className="my-3 text-white text-sm md:w-2/4 w-full leading-[27px]">
          I have worked on many projects over the course of being a software
          developer, here are a few of my live, real-world projects
        </p>
      </div>
      {/* featured projects */}

      {/* changeable */}
      {/* <div className="flex flex-col items-center max-w-3xl mt-8 wrapper"> */}
      <div className="grid w-full grid-cols-1 mt-8 sm:grid-cols-2 gap-7 wrapper">
        {projects.map((project, index) => (
          <span
            className="bg-[#1A1A1A] p-5 rounded-xl gap-5 flex flex-col items-start"
            key={index}
          >
            <div
              className="flex justify-center mb-4"
              style={{ clipPath: "inset(0 0 0 0 round 0.5rem)" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                fill
                // className="object-cover project-image opacity-40 hover:opacity-80 transition-all duration-500 max-w-[480px] w-full rounded-lg"
                className="object-cover transition-all duration-500 project-image opacity-40 hover:opacity-80"
                src={project.photo}
                alt=""
              />
            </div>
            <div className="relative flex flex-col items-start justify-center w-full ">
              <div className="flex items-center gap-2 pr-2 mb-3">
                <p className="text-xl font-medium">{project.title}</p>
                <div
                  className={`private absolute flex items-center justify-between md:-top-2 -top-7 left-0 text-xs text-white opacity-0 transition-opacity duration-300 bg-[#3a3a3abd] p-1 px-2 rounded-lg ${
                    showPrivate === `true ${project.title}`
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <span className="mr-1 text-xs material-symbols-outlined">
                    lock
                  </span>
                  <p>This repository is private</p>
                </div>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => project.github_url == "" && handleClick(e)}
                  onMouseEnter={() =>
                    project.github_url == null &&
                    handleMouseEnter(project.title)
                  }
                  onMouseLeave={() =>
                    project.github_url == null &&
                    handleMouseLeave(project.title)
                  }
                >
                  <img className="h-6" src={github} alt="" />
                </a>
              </div>

              <div className="flex flex-wrap gap-3 mb-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="">
                    <p className="rounded-md bg-[#1B99F7] p-1 px-2 text-[11px] w-max">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mb-2 font-extralight text-[14px]">
                {project.description}
              </p>
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 flex items-center gap-1 text-xs bg-[#1a1a1a] border-[1px] border-white text-white duration-300 hover:bg-[#1B99F7] hover:text-white"
              >
                View Project <MdArrowOutward />
              </a>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;

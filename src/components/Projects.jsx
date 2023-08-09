import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "MY PORTFOLIO",
      description: "My portfolio website I built from scratch",
      technologies: "React JS, JSX",
      photo: "/src/assets/projects/img1.png",
    },
    {
      title: "FINANCE TRACKER",
      description:
        "A fullstack webapp that helps you keep record of your transactions",
      technologies:
        "React JS, Node, Express JS, Mongo DB, Context API, RESTFUL API",
      photo: "/src/assets/projects/img2.png",
    },
    {
      title: "WORKOUT BUDDY",
      description:
        "A fullstack webapp that helps you keep record of your workout tasks",
      technologies:
        "React JS, Node, Express JS, Mongo DB, Context API, RESTFUL API",
      photo: "/src/assets/projects/img2.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-5 pt-5" id="projects">
      <h1 className="text-[#1B99F7] font-semibold text-2xl mt-16">
        Featured Projects
      </h1>
      <p className="my-3 text-white text-sm md:w-3/4 leading-[27px]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      {/* project 1 */}
      <div className="wrapper mt-16">
        <span className="group flex justify-center items-center mb-20 hover:cursor-pointer">
          <div className="z- left-10 md:relative absolute">
            <h1 className="text-primary font-extrabold">Finance Tracker</h1>
            <p className="text-sm text-[#e9e9e9] p-7 max-w-lg md:bg-[#0A0A0D] rounded md:border-primary md:border">
              Finance Tracker is a fullstack webapp that helps you keep record
              of your transactions in real time
            </p>
            <p className="text-sm text-[#e9e9e9]">
              React JS, Node, Express JS, Mongo DB, Axios, Netlify
            </p>
          </div>
          <div className="">
            <div className="">
              <a href="#" >
                <img
                  src="/src/assets/projects/finance_tracker.png"
                  alt=""
                  className="h-[300px] max-w-[800px] md:opacity-70 opacity-30 -mt-5 rounded-lg group-hover:opacity-100 transition-all duration-500"
                />
              </a>
            </div>
          </div>
        </span>

      {/* project 2 */}
        <span className="group flex justify-center items-center mb-20 hover:cursor-pointer">
          <div className="z-10 left-10 md:relative absolute">
            <h1 className="text-primary font-extrabold">Finance Tracker</h1>
            <p className="text-sm text-[#e9e9e9] p-7 max-w-lg md:bg-[#0A0A0D] rounded md:border-primary md:border">
              Finance Tracker is a fullstack webapp that helps you keep record
              of your transactions in real time
            </p>
            <p className="text-sm text-[#e9e9e9]">
              React JS, Node, Express JS, Mongo DB, Axios, Netlify
            </p>
          </div>
          <div className="">
            <div className="relative">
              <a href="#">
                <img
                  src="/src/assets/projects/finance_tracker.png"
                  alt=""
                  className="h-[300px] md:opacity-70 opacity-30 -mt-5 rounded-lg group-hover:opacity-100 transition-all duration-500"
                />
              </a>
            </div>
          </div>
        </span>

        {/* project 3 */}
        <span className="group flex justify-center items-center mb-20 hover:cursor-pointer">
          <div className="z-10 left-10 md:relative absolute">
            <h1 className="text-primary font-extrabold">Finance Tracker</h1>
            <p className="text-sm text-[#e9e9e9] p-7 max-w-lg md:bg-[#0A0A0D] rounded md:border-primary md:border">
              Finance Tracker is a fullstack webapp that helps you keep record
              of your transactions in real time
            </p>
            <p className="text-sm text-[#e9e9e9]">
              React JS, Node, Express JS, Mongo DB, Axios, Netlify
            </p>
          </div>
          <div className="">
            <div className="relative">
              <a href="#">
                <img
                  src="/src/assets/projects/finance_tracker.png"
                  alt=""
                  className="h-[300px] md:opacity-70 opacity-30 -mt-5 rounded-lg group-hover:opacity-100 transition-all duration-500"
                />
              </a>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Projects;

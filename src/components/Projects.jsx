import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "TWINDER",
      description:
        "A live Geolocation app for finding tweets and twitter users around you.",
      photo: "/src/assets/projects/img1.png",
    },
    {
      title: "LIVENTS",
      description:
        "A video streaming app with live Geolocation, for streaming events.",
      photo: "/src/assets/projects/img2.png",
    },
    {
      title: "MOOVE",
      description:
        "Mobile app for booking instant pickup & dropoff accross major cities.",
      photo: "/src/assets/projects/img3.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8 pt-5" id="projects">
      <h1 className="text-[#1B99F7] font-semibold text-2xl mt-16">
        Featured Projects
      </h1>
      <p className="my-3 text-white text-sm md:w-3/4 leading-[27px]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              {/* <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              > */}
                <img src={project.photo} alt={project.title} />
              {/* </a> */}
              <h3 className="text-[#1B99F7] font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <button className="transition-all duration-500 bg-[#1B99F7] py-2 px-6 rounded text-white hover:bg-white hover:text-[#1B99F7]">
                  LIVE
                </button>
                {/* <button className="py-1.5 px-9 rounded border outline-[#1B99F7] ml-5 text-white ">
                  Projects
                </button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

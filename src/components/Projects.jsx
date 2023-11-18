import React from "react";
import github from "../assets/socialss/github.png";
import financetracker from "../assets/projects/finance_tracker.png";
import diktion from "../assets/projects/diktion.png";
import workoutbuddy from "../assets/projects/workoutapp.png";
import saler from "../assets/projects/saler.png";
import vulue from "../assets/projects/vulue.png";
import mealstaer from "../assets/projects/mealstaer.png";

const Projects = () => {
	const projects = [
		{
			title: "FINANCE TRACKER",
			description:
				"A fullstack webapp that helps you keep record of your transactions",
			technologies: ["React JS", "Node JS", "Context API", "REST API"],
			live_url: "https://finance-tracker-app1.netlify.app",
			github_url: "https://github.com/Faithful001/finance-tracker-app",
			photo: financetracker,
		},
		{
			title: "MEALSTAER",
			description: "Your meal planning buddy. Organize your meals on the go.",
			technologies: ["React JS", "TypeScript", "Node JS", "REST API"],
			live_url: "https://mealstaer.vercel.app",
			github_url: "https://github.com/Faithful001/mealstaer",
			photo: mealstaer,
		},
		{
			title: "SALER APP LANDING PAGE",
			description: "Landing page of the saler app.",
			technologies: ["React JS", "Tailwind"],
			live_url: "https://saler-app.vercel.app/",
			github_url: "https://github.com/Faithful001/saler-landing_page",
			photo: saler,
		},
		{
			title: "WORKOUT BUDDY",
			description:
				"A fullstack webapp that helps you keep record of your workout exercises",
			technologies: ["React JS", "Node JS", "Context API", "REST API"],
			live_url: "https://work-o-buddy.vercel.app/",
			github_url: "https://github.com/Faithful001/workout-app",
			photo: workoutbuddy,
		},
		{
			title: "VULUE LANDING PAGE",
			description: "Landing page of the vulue app.",
			technologies: ["React JS", "Tailwind"],
			live_url: "https://vulue.vercel.app/",
			github_url: "https://github.com/Faithful001/vulue_landing_page",
			photo: vulue,
		},
		{
			title: "DIKTION",
			description:
				"A dictionary app to search for your favourite words. Dare to search!",
			technologies: ["React JS", "Typescript", "Context API", "REST API"],
			live_url: "https://diktion.vercel.app/",
			github_url: "https://github.com/Faithful001/diktion",
			photo: diktion,
		},
	];

	// const techs = projects.map((tech) => {
	// 	return tech.technologies.split(",");
	// });

	return (
		// changeable
		<div
			className="md:px-10 px-7 my-5 pt-5 flex flex-col items-center"
			id="projects"
		>
			<h1 className="text-[#1B99F7] font-semibold text-2xl mt-16">
				Featured Projects
			</h1>
			<p className="my-3 text-white text-sm md:w-3/4 leading-[27px]">
				I have worked on many projects over the course of being a Web Developer,
				here are a few of my live, real-world projects
			</p>
			{/* featured projects */}

			{/* changeable */}
			<div className="wrapper mt-8 flex flex-col items-center max-w-3xl">
				{projects.map((project) => (
					<span className="md:flex mb-12 gap-5 max-w-5xl" key={project.title}>
						<div className="mb-4 flex justify-center">
							<img
								className="project-image opacity-40 hover:opacity-80 transition-all duration-500 max-w-[480px] w-full rounded-lg"
								src={project.photo}
								alt=""
							/>
						</div>
						<div className="flex flex-col justify-center items-start">
							<div className="gap-2 flex items-center mb-3 px-2">
								<p className="font-bold text-xl">{project.title}</p>
								<a href={project.github_url}>
									<img className="h-6" src={github} alt="" />
								</a>
							</div>

							<div className="gap-3 flex mb-3">
								{project.technologies.map((tech, index) => (
									<div key={index} className="">
										<p className="rounded-md bg-[#1B99F7] p-1 px-2 text-[11px]">
											{tech}
										</p>
									</div>
								))}
							</div>
							<p className="mb-2 text-[14px]">{project.description}</p>
							<a
								href={project.live_url}
								className="rounded-lg p-2 text-xs bg-[#1a1a1a] border-[1px] border-white text-white hover:bg-[#1B99F7] hover:text-white"
							>
								View Project
							</a>
						</div>
					</span>
				))}
			</div>
		</div>
	);
};

export default Projects;

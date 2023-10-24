import React from "react";
import github from "../assets/socialss/github.png";
import financetracker from "../assets/projects/finance_tracker.png";
import diktion from "../assets/projects/diktion.png";
import workoutbuddy from "../assets/projects/workoutapp.png";
import saler from "../assets/projects/saler.png";

const Projects = () => {
	const projects = [
		{
			title: "FINANCE TRACKER",
			description:
				"A fullstack webapp that helps you keep record of your transactions",
			technologies:
				"React JS, Node JS, Express JS, Mongo DB, Context API, REST API",
			live_url: "https://finance-tracker-app1.netlify.app",
			github_url: "https://github.com/Faithful001/finance-tracker-app",
			photo: financetracker,
		},
		{
			title: "SALER APP LANDING PAGE",
			description: "Built the landing page for the saler app",
			technologies: "React JS, Tailwind",
			live_url: "https://saler-app.vercel.app/",
			github_url: "https://github.com/Faithful001/saler-landing_page",
			photo: saler,
		},
		{
			title: "WORKOUT BUDDY",
			description:
				"A fullstack webapp that helps you keep record of your workout exercises",
			technologies:
				"React JS, Node JS, Express JS, Mongo DB, Context API, REST API",
			live_url: "https://work-o-buddy.vercel.app/",
			github_url: "https://github.com/Faithful001/workout-app",
			photo: workoutbuddy,
		},
		{
			title: "DIKTION",
			description:
				"A dictionary app to search for your favourite words. Dare to search!",
			technologies: "React JS, Typescript, Context API, REST API",
			live_url: "https://diktion.vercel.app/",
			github_url: "https://github.com/Faithful001/diktion",
			photo: diktion,
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

			<div className="wrapper mt-16">
				{/* project 3 */}
				{projects.map((project) => (
					<span
						key={project.title}
						className="flex flex-col items-center justify-center mb-16"
					>
						<div className="flex items-center justify-center">
							<a href={project.live_url}>
								<img
									src={project.photo}
									alt=""
									className="opacity-40 hover:opacity-80 transition-all duration-500 w-[550px]"
								/>
							</a>
						</div>
						<div className="bg-black border-primary border-2 p-5 px-10 max-w-[550px] flex items-center justify-center">
							<div className="pr-10">
								<p className="font-bold">{project.title}</p>
								<p className="text-sm">{project.description}</p>
								<p className="text-sm">
									<i>Tech: {project.technologies}</i>
								</p>
							</div>
							<div>
								<a href={project.github_url}>
									<img
										src={github}
										alt=""
										className="h-[30px] cursor-pointer min-w-[30px]"
									/>
								</a>
							</div>
						</div>
					</span>
				))}
			</div>
		</div>
	);
};

export default Projects;

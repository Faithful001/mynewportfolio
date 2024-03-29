import React from "react";
import Services from "./Services";
import Work from "./Work";
import faithful from "../assets/faithful.jpg";
import html from "../assets/portfolio-pngs/html.png";
import css from "../assets/portfolio-pngs/css.png";
import js from "../assets/portfolio-pngs/javascript.png";
import jquery from "../assets/portfolio-pngs/jquery.png";
// import bootstrap from "../assets/portfolio-pngs/bootstrap.png";
import react from "../assets/portfolio-pngs/reactjs.png";
import tailwind from "../assets/portfolio-pngs/tailwind.png";
import typescript from "../assets/portfolio-pngs/typescript.png";
import nodejs from "../assets/portfolio-pngs/nodejs.png";
import python from "../assets/portfolio-pngs/python.png";
import linux from "../assets/portfolio-pngs/linux.png";
import git from "../assets/portfolio-pngs/git.png";
import php from "../assets/portfolio-pngs/php.png";

const About = () => {
	const techs = [
		{ image: html, text: "HTML" },
		{ image: css, text: "CSS" },
		{ image: js, text: "Javascript" },
		{ image: jquery, text: "JQuery" },
		// { image: bootstrap, text: "BootStrap" },
		{ image: react, text: "React" },
		{ image: tailwind, text: "Tailwind" },
		{ image: typescript, text: "TypeScript" },
		{ image: nodejs, text: "Node JS" },
		{ image: php, text: "PHP" },
		{ image: python, text: "Python" },
		{ image: linux, text: "Linux" },
		{ image: git, text: "Git" },
	];
	return (
		<div className="md:px-10 px-7 pt-14 sm:-mt-24" id="about">
			<h1 className="text-[#1B99F7] font-semibold text-2xl mt-5">
				About me<span className={`animate-bounce`}>🔥</span>
			</h1>
			<p className="my-3 text-white font-light text-sm md:w-2/3 leading-[27px]">
				Hi, my name is Faithful Eromosele, I am a software developer. I have
				honed my skills in software development, actively crafting
				visually-appealing user-interfaces and building robust, scalable and
				secure server-side solutions.
				<br />
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
								className="p-4 h-[65px] max-w-[80px] grayscale hover:grayscale-0 cursor-pointer transition-all duration-500"
							/>
							<p className="ml-6 text-xs text-white">{tech.text}</p>
						</div>
					))}
				</div>
				<div className="faithful my-10 flex justify-center">
					<div className="border-dashed border-2 border-primary rounded-xl p-2">
						<img
							className="h-[300px] max-w-[300px] rounded cursor-pointer grayscale hover:grayscale-0 transition-all duration-300"
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

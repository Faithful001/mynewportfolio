import React, { useState } from "react";
import {
	BookOpenIcon,
	Bars3BottomRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, ScrollLink } from "react-scroll";

const Header = () => {
	let Links = [
		{ name: "Home", link: "home" },
		{ name: "About me", link: "about" },
		{ name: "Projects", link: "projects" },
		{ name: "Contact", link: "contact" },
	];
	let [open, setOpen] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener("scroll", changeBackground);

	return (
		<div
			className={
				navbar
					? "header active w-[90%] fixed bg-[#1b1b1b] rounded-full z-10 opacity-[0.96]"
					: "header w-full mt-2 z-50"
			}
		>
			<div className="md:flex items-center justify-between py-3 md:px-10 px-7 z-50">
				{/* logo section */}
				<div className="relative flex items-center justify-between z-50">
					<div className="font-bold text-2xl cursor-pointer flex items-center gap-1 z-50">
						<Link
							to={Links[0].link}
							activeClass="active"
							smooth={true}
							spy={true}
						>
							<span className="text-primary text-lg hover:text-white transition-all duration-300">
								Faithful Dev
							</span>
						</Link>
					</div>
					{/* Menu icon */}
					<div
						onClick={() => setOpen(!open)}
						className="transition-transform duration-200 absolute right-0 cursor-pointer md:hidden w-11 h-11 text-white"
					>
						{open ? (
							<XMarkIcon className="p-2" />
						) : (
							<Bars3BottomRightIcon className="p-2" />
						)}
					</div>
				</div>
				{/* linke items */}
				<ul
					className={`md:flex md:items-center md:pb-0 absolute md:static z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-[#1b1b1b] opacity-[0.98] sm:bg-transparent transition-all duration-500 ease-in ${
						open ? "top-12" : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li
							className="md:ml-8 md:my-0 my-7 font-medium text-[14px] w-20"
							key={link.name}
						>
							<Link
								to={link.link}
								activeClass="active"
								smooth={true}
								spy={true}
								className="text-white hover:text-[#1B99F7] duration-300 cursor-pointer"
								onClick={() => setOpen(false)}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
				{/* button */}
			</div>
		</div>
	);
};

export default Header;

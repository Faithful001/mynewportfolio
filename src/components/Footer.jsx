import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
	return (
		<div className="md:px-10 px-7 mt-24">
			<p className="text-white hover:text-primary transition-all duration-300 opacity-50 flex flex-col md:flex-row justify-between items-center my-5 cursor-pointer ">
				Designed & Built with ❤ by Faithful
			</p>
		</div>
	);
};

export default Footer;

import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import github from "../assets/socialss/github.png";
import facebook from "../assets/socialss/facebook.png";
import twitter from "../assets/socialss/twitter.png";
import linkedin from "../assets/socialss/linkedin.png";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_4m537wy",
				"template_sdjfdga",
				form.current,
				"ba9oJemctLCFFL7ko"
			)
			.then(
				(result) => {
					console.log(result.text);
					setName("");
					setEmail("");
					setMessage("");
					alert("Message sent successfully. I will get back to you shortly");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="md:px-10 px-5 my-10" id="contact">
			<div className="flex flex-col md:flex-row">
				{/* text and icons */}
				<div className="md:w-1/2">
					<h1 className="text-primary font-semibold text-2xl">Get In Touch</h1>
					<p className="my-3 text-white md:w-3/4 leading-[2]">
						{/* Satisfied with me? Please contact me */}
					</p>
					{/* social icons */}
					<div className="flex mt-8">
						<a
							href="https://github.com/Faithful001"
							target="_blank"
							rel="noreferrer"
						>
							<img className="h-[22px] mr-5" src={github} alt="" />
						</a>
						<a
							className="ml-4"
							href="https://web.facebook.com/profile.php?id=100049869877529"
							target="_blank"
							rel="noreferrer"
						>
							<img className="h-[22px] mr-5" src={facebook} alt="" />
						</a>
						<a
							className="ml-4"
							href="https://twitter.com/faithfultheking"
							target="_blank"
							rel="noreferrer"
						>
							<img className="h-[22px] mr-5" src={twitter} alt="" />
						</a>
						<a
							className="ml-4"
							href="www.linkedin.com/in/faithful-eromosele"
							target="_blank"
							rel="noreferrer"
						>
							<img className="h-[22px] mr-5" src={linkedin} alt="" />
						</a>
					</div>
				</div>
				{/* form */}
				<div className="md:w-1/2">
					<p className="mt-16 text-white text-base mb-6">
						Contact me, let's make magic together ✨
					</p>
					<form ref={form} onSubmit={sendEmail}>
						<input
							type="text"
							name="name"
							placeholder="Name:"
							className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email:"
							className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							name="message"
							id="message"
							cols="54"
							rows="4"
							className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2"
							required
							placeholder="Message:"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
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

const sentModal = () => {};

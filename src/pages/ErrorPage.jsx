import { Link } from "react-router-dom";
import error from "../assets/background/error.png";
const ErrorPage = () => {
	return (
		<div className="error-page ">
			<div className="flex flex-col items-center justify-center mt-[6rem] p-5">
				<img src={error} alt="" className="max-w-[11rem]" />
				<h1 className="text-[8rem] -mb-5 font-bold">404</h1>
				<p className="text-[1rem] font-light">
					This page is out of your reach chief 😢
				</p>
				<Link to={"/"}>
					<button className="mt-5 transition-all duration-500 bg-[#000000] outline-none outline-offset-1 outline-[#1B99F7] py-2 px-7 rounded hover:bg-[#1b98f734] text-[#1B99F7] text-sm">
						Find your way home 🚀
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;

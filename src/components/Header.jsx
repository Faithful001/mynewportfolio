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
    { name: "Services", link: "services" },
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
      className={`
        header
        ${
          navbar
            ? "active w-[90%] max-w-[1400px] fixed bg-[#1b1b1b] backdrop-blur-md bg-opacity-30 border-2 border-opacity-40 border-[#3a3a3a] rounded-full z-10 "
            : "w-full mt-2 z-50"
        }`}
    >
      <div className="z-50 items-center justify-between py-4 md:flex md:px-10 px-7">
        {/* logo section */}
        <div className="relative z-50 flex items-center justify-between">
          <div className="z-50 flex items-center gap-1 text-2xl font-bold cursor-pointer">
            <Link
              to={Links[0].link}
              activeClass="active"
              smooth={true}
              spy={true}
            >
              <span className="text-lg transition-all duration-300 text-primary hover:text-white">
                Faithful Dev
              </span>
            </Link>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-0 text-white transition-transform duration-200 cursor-pointer md:hidden w-11 h-11"
          >
            {open ? (
              <XMarkIcon className="p-2" />
            ) : (
              <Bars3BottomRightIcon className="p-2" />
            )}
          </div>
        </div>
        {/* link items | add sm:bg-transparent below if there is any transparency problem*/}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static z-10 left-0 w-full md:w-auto mt-6 md:mt-0 md:pl-0 pl-9 md:bg-transparent md:bg-opacity-100 bg-opacity-95 bg-[#1b1b1b] rounded-3xl transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
            // opacity-[0.98]
          }
          `}
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

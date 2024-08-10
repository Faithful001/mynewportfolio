const Services = () => {
  const services = [
    // {
    //   name: "UI & UX DESIGNING",
    //   description: "I design beautiful web iterfaces with Figma and Adove XD",
    //   image: "../src/assets/icons/ruler-pen.png",
    // },
    {
      name: "FRONTEND DEVELOPMENT",
      description:
        "I create responsive, user-friendly interfaces with a vast array of technologies including Next.js, React.js, and Tailwind CSS, transaforming ideas into seamless digital experiences.",
      image: "../src/assets/icons/frontend-development.png",
    },
    {
      name: "BACKEND DEVELOPMENT",
      description:
        "I design and implement robust, highly-performant backend infrastructure that scale effortlessly. Leveraging cutting-edge technologies, I ensure your applications run smoothly and efficiently, even as they grow.",
      image: "../src/assets/icons/backend-development.png",
    },
    {
      name: "MOBILE APP DEVELOPMENT",
      description:
        "I specialize in mobile development using React Native, crafting intuitive and responsive apps that deliver exceptional user experiences across platforms. My focus is on delivering seamless functionality and high performance, ensuring apps meet users' needs effectively and efficiently.",
      image: "../src/assets/icons/mobile-development.png",
    },
    {
      name: "TECHNICAL SUPPORT",
      description:
        "I provide expert technical support to swiftly troubleshoot and resolve software challenges, ensuring your systems run smoothly and efficiently. My focus is on delivering prompt, effective solutions to maintain seamless user experiences and optimal system performance.",
      image: "../src/assets/icons/technical-support.png",
    },
    // {
    //   name: "VERSION CONTROL",
    //   description:
    //     "I can use version control systems well, and Git & Mecurial are my go-to tool.",
    //   image: "../src/assets/icons/git-repo.png",
    // },
    // {
    //   id: 5,
    //   name: "NPM AND NODEJS",
    //   description:
    //     "I have core understanding of NPM. I can also develop general purpose applications with NodeJS",
    //   image: "../src/assets/icons/javascript.png",
    // },
    // {
    //   id: 6,
    //   name: "WEB SCRAPING",
    //   description:
    //     "I can collect content and data from the internet then manipulate and analyze as needed.",
    //   image: "../src/assets/icons/web-scraping.png",
    // },
  ];

  return (
    <div className={`pt-5 my-5 md:px-10 px-7`} id="services">
      <div className="gradientTex mb-7">
        <h1 className="text-[#1B99F7] font-semibold text-2xl mt-5">
          Services<span className={`animate-bounce`}>👨🏼‍💻</span>
        </h1>
        <p className="text-lg">What I bring to the table 😏</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((data, index) => (
          <div
            className="flex flex-col bg-[#1A1A1A] p-7 rounded-xl gap-1"
            key={index}
          >
            <img className="max-w-[4.5rem] mb-3" src={data.image} alt="" />
            <p className="font-bold text-2xl">{data.name}</p>

            <p className="font-light">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

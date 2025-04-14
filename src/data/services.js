import { IoCode } from "react-icons/io5";
import { LuServer } from "react-icons/lu";
import { CiMobile1 } from "react-icons/ci";
import { SiBnbchain } from "react-icons/si";
import { CgSupport } from "react-icons/cg";

const services = [
  {
    name: "FRONTEND DEVELOPMENT",
    description:
      "I create responsive, user-friendly interfaces with a vast array of technologies including Next.js, React.js, and Tailwind CSS, transforming ideas into seamless digital experiences.",
    image: IoCode,
  },
  {
    name: "BACKEND DEVELOPMENT",
    description:
      "I design and implement robust, highly-performant backend infrastructure that scale effortlessly. Leveraging cutting-edge technologies, I ensure your applications run smoothly and efficiently, even as they grow.",
    image: LuServer,
  },
  {
    name: "MOBILE APP DEVELOPMENT",
    description:
      "I specialize in mobile development using React Native, crafting intuitive and responsive apps that deliver exceptional user experiences across platforms.",
    image: CiMobile1,
  },
  {
    name: "BLOCKCHAIN DEVELOPMENT",
    description:
      "Building and deploying decentralized applications (dApps) and smart contracts with expertise in Solidity and various blockchain technologies.",
    image: SiBnbchain,
  },
  {
    name: "TECHNICAL SUPPORT",
    description:
      "I provide expert technical support to swiftly troubleshoot and resolve software challenges, ensuring your systems run smoothly and efficiently.",
    image: CgSupport,
  },
];

export default services;

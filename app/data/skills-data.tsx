import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { SiAstro } from "react-icons/si";

import { SiMysql } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export type SkillsIconsProps = {
  id: number;
  icon: JSX.Element;
  secondIcon?: JSX.Element;
  color: string;
  name: string;
};

export const skillsIcons: SkillsIconsProps[] = [
  {
    id: 1,
    icon: <FaHtml5 />,
    color: "#f59e0b",
    name: "HTML5",
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    color: "#3b82f6",
    name: "CSS3",
  },
  {
    id: 3,
    icon: <IoLogoJavascript />,
    color: "#eab308",
    name: "JavaScript",
  },
  {
    id: 4,
    icon: <FaReact />,
    color: "#2563eb",
    name: "React",
  },
  {
    id: 5,
    icon: <SiTypescript />,
    color: "#3b82f6",
    name: "TypeScript",
  },
  {
    id: 6,
    icon: <FaNodeJs />,
    color: "#22c55e",
    name: "Node",
  },
  {
    id: 7,
    icon: <SiExpress />,
    color: "#f59e0b",
    name: "Express",
  },
  {
    id: 8,
    icon: <DiMongodb />,
    color: "#052e16",
    name: "MongoDB",
  },
  {
    id: 9,
    icon: <SiTailwindcss />,
    color: "#06b6d4",
    name: "Tailwind",
  },
  {
    id: 10,
    icon: <TbBrandNextjs />,
    color: "#94a3b8",
    name: "Next",
  },
  {
    id: 11,
    icon: <SiVite />,
    color: "#7c3aed",
    name: "Vite",
  },
  {
    id: 12,
    icon: <SiAstro />,
    color: "#ef4444",
    name: "Astro",
  },
];

export const nextToLearn: SkillsIconsProps[] = [
  {
    id: 1,
    icon: <SiMysql />,
    color: "#3b82f6",
    name: "MySQL",
  },
  {
    id: 2,
    icon: <SiCypress />,
    color: "#22c55e",
    name: "Cypress",
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    secondIcon: <FaReact />,
    color: "#2563eb",
    name: "React Native",
  },
  {
    id: 4,
    icon: <FaAngular />,
    color: "#ef4444",
    name: "Angular",
  },
  {
    id: 5,
    icon: <FaVuejs />,
    color: "#22c55e",
    name: "Vue.js",
  },
  {
    id: 6,
    icon: <FaPython />,
    color: "#eab308",
    name: "Python",
  },
];

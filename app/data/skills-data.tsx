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
import { BiLogoPostgresql } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

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
    color: "#ef4444",
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
    icon: <SiJquery />,
    color: "#2563eb",
    name: "JQuery",
  },
  {
    id: 7,
    icon: <FaNodeJs />,
    color: "#22c55e",
    name: "Node",
  },
  {
    id: 8,
    icon: <SiExpress />,
    color: "#f59e0b",
    name: "Express",
  },
  {
    id: 9,
    icon: <DiMongodb />,
    color: "#052e16",
    name: "MongoDB",
  },
  {
    id: 10,
    icon: <BiLogoPostgresql />,
    color: "#3b82f6",
    name: "PostgreSQL",
  },
  {
    id: 11,
    icon: <SiMysql />,
    color: "#007c77",
    name: "MySQL",
  },
  {
    id: 12,
    icon: <SiTailwindcss />,
    color: "#06b6d4",
    name: "Tailwind",
  },
  {
    id: 13,
    icon: <FaSass />,
    color: "#bf1363",
    name: "SCSS/SASS",
  },
  {
    id: 14,
    icon: <SiStyledcomponents />,
    color: "#f59e0b",
    name: "Styled-Components",
  },
  {
    id: 15,
    icon: <TbBrandNextjs />,
    color: "#94a3b8",
    name: "Next",
  },
  {
    id: 16,
    icon: <SiVite />,
    color: "#7c3aed",
    name: "Vite",
  },
  {
    id: 17,
    icon: <FaGitAlt />,
    color: "#ed474a",
    name: "Git",
  },
  {
    id: 18,
    icon: <SiAstro />,
    color: "#ef4444",
    name: "Astro",
  },
];

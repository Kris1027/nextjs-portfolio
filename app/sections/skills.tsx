import { motion } from "framer-motion";

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

const skillsIcons = [
  {
    icon: <FaHtml5 />,
    color: "#f59e0b",
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt />,
    color: "#3b82f6",
    name: "CSS3",
  },
  {
    icon: <IoLogoJavascript />,
    color: "#eab308",
    name: "JavaScript",
  },
  {
    icon: <FaReact />,
    color: "#2563eb",
    name: "React",
  },
  {
    icon: <SiTypescript />,
    color: "#3b82f6",
    name: "TypeScript",
  },
  {
    icon: <FaNodeJs />,
    color: "#22c55e",
    name: "Node",
  },
  {
    icon: <SiExpress />,
    color: "#f59e0b",
    name: "Express",
  },
  {
    icon: <DiMongodb />,
    color: "#052e16",
    name: "MongoDB",
  },
  {
    icon: <SiTailwindcss />,
    color: "#06b6d4",
    name: "Tailwind",
  },
  {
    icon: <TbBrandNextjs />,
    color: "#94a3b8",
    name: "Next",
  },
  {
    icon: <SiVite />,
    color: "#7c3aed",
    name: "Vite",
  },
  {
    icon: <SiAstro />,
    color: "#ef4444",
    name: "Astro",
  },
];

const nextToLearn = [
  {
    icon: <SiMysql />,
    color: "#3b82f6",
    name: "MySQL",
  },
  {
    icon: <SiCypress />,
    color: "#22c55e",
    name: "Cypress",
  },
  {
    icon: <FaMobileAlt />,
    secondIcon: <FaReact />,
    color: "#2563eb",
    name: "React Native",
  },
  {
    icon: <FaAngular />,
    color: "#ef4444",
    name: "Angular",
  },
  {
    icon: <FaVuejs />,
    color: "#22c55e",
    name: "Vue.js",
  },
  {
    icon: <FaPython />,
    color: "#eab308",
    name: "Python",
  },
];

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function Skills() {
  return (
    <section
      className="pt-40 px-10 bg-white dark:bg-black min-h-screen flex flex-col gap-10 justify-center overflow-hidden ease-in-out duration-500"
      id="skills"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Know technologies
      </h2>
      <ul className="relative md:text-6xl lg:text-8xl text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-gray-600 pb-10 md:w-2/3 lg:w-1/2 mx-auto">
        {skillsIcons.map((icon, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            whileHover={{
              x: -5,
              y: -5,
              scale: 1.1,
              color: icon.color,
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div>{icon.icon}</div>
            <div className="text-sm">{icon.name}</div>
          </motion.li>
        ))}
      </ul>
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Next to learn
      </h2>
      <ul className="relative md:text-6xl lg:text-8xl text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-gray-600 pb-10 md:w-2/3 lg:w-1/2 mx-auto">
        {nextToLearn.map((icon, index) => (
          <motion.li
            className="flex flex-col items-center"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            whileHover={{ x: -5, y: -5, scale: 1.1, color: icon.color }}
            viewport={{ once: true }}
          >
            <div className="flex">
              <span>{icon.icon}</span>
              {icon.secondIcon && <span>{icon.secondIcon}</span>}
            </div>
            <span className="text-xs md:text-sm">{icon.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

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

import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiMysql } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

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
  const skillsIcons = [
    {
      icon: <FaHtml5 />,
      color: "#3b82f6",
    },
    {
      icon: <FaCss3Alt />,
      color: "#3b82f6",
    },
    {
      icon: <IoLogoJavascript />,
      color: "#eab308",
    },
    {
      icon: <FaReact />,
      color: "#2563eb",
    },
    {
      icon: <SiTypescript />,
      color: "#3b82f6",
    },
    {
      icon: <FaNodeJs />,
      color: "#22c55e",
    },
    {
      icon: <SiExpress />,
      color: "#f59e0b",
    },
    {
      icon: <DiMongodb />,
      color: "#052e16",
    },
    {
      icon: <SiTailwindcss />,
      color: "#06b6d4",
    },
    {
      icon: <TbBrandNextjs />,
      color: "#94a3b8",
    },
    {
      icon: <SiVite />,
      color: "#7c3aed",
    },
    {
      icon: <SiAstro />,
      color: "#ef4444",
    },
  ];

  const nextToLearn = [
    {
      icon: <AiOutlineConsoleSql />,
      color: "#3b82f6",
    },
    {
      icon: <SiMysql />,
      color: "#3b82f6",
    },
    {
      icon: <SiCypress />,
      color: "#22c55e",
    },
    {
      icon: <FaMobileAlt />,
      secondIcon: <FaReact />,
      color: "#2563eb",
    },
    {
      icon: <FaAngular />,
      color: "#ef4444",
    },
    {
      icon: <FaVuejs />,
      color: "#22c55e",
    },
    {
      icon: <FaPython />,
      color: "#eab308",
    },
  ];

  return (
    <section
      className="pt-40 px-10 bg-white dark:bg-black min-h-screen flex flex-col gap-10 justify-center overflow-hidden"
      id="skills"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Know technologies
      </h2>
      <ul className="lg:text-8xl text-5xl flex flex-wrap justify-center gap-16 text-gray-600 pb-10 lg:w-1/2 mx-auto">
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
          >
            {icon.icon}
          </motion.li>
        ))}
      </ul>
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Next to learn
      </h2>
      <ul className="lg:text-8xl text-5xl flex flex-wrap justify-center gap-16 text-gray-600 pb-10 lg:w-1/2 mx-auto">
        {nextToLearn.map((icon, index) => (
          <motion.li
            className="flex"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            whileHover={{ x: -5, y: -5, scale: 1.1, color: icon.color }}
            viewport={{ once: true }}
          >
            {icon.icon}
            {icon.secondIcon && icon.secondIcon}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

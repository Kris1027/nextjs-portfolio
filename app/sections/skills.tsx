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

const fadeInAnimationVariants = {
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
      color: "orange-500",
    },
    {
      icon: <FaCss3Alt />,
      color: "blue-500",
    },
    {
      icon: <IoLogoJavascript />,
      color: "yellow-500",
    },
    {
      icon: <FaReact />,
      color: "blue-600",
    },
    {
      icon: <SiTypescript />,
      color: "blue-500",
    },
    {
      icon: <FaNodeJs />,
      color: "green-500",
    },
    {
      icon: <SiExpress />,
      color: "amber-500",
    },
    {
      icon: <DiMongodb />,
      color: "green-950",
    },
    {
      icon: <SiTailwindcss />,
      color: "cyan-500",
    },
    {
      icon: <TbBrandNextjs />,
      color: "slate-400",
    },
    {
      icon: <SiVite />,
      color: "violet-600",
    },
    {
      icon: <SiAstro />,
      color: "red-500",
    },
  ];

  const nextToLearn = [
    {
      icon: <AiOutlineConsoleSql />,
      color: "blue-500",
    },
    {
      icon: <SiMysql />,
      color: "blue-500",
    },
    {
      icon: <SiCypress />,
      color: "green-500",
    },
    {
      icon: <FaMobileAlt />,
      secondIcon: <FaReact />,
      color: "blue-600",
    },
    {
      icon: <FaAngular />,
      color: "red-500",
    },
    {
      icon: <FaVuejs />,
      color: "green-500",
    },
    {
      icon: <FaPython />,
      color: "yellow-500",
    },
  ];

  return (
    <section className="p-10 pt-40 bg-white dark:bg-black" id="skills">
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Know technologies
      </h2>
      <ul className="text-5xl flex flex-wrap justify-center gap-16 text-gray-600 pb-10 lg:w-1/2 mx-auto">
        {skillsIcons.map((icon, index) => (
          <motion.li
            key={index}
            className={`hover:text-${icon.color} hover:scale-110`}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {icon.icon}
          </motion.li>
        ))}
      </ul>
      <h3 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Next to learn
      </h3>
      <ul className="text-5xl flex flex-wrap justify-center gap-16 text-gray-600 pb-10 lg:w-1/2 mx-auto">
        {nextToLearn.map((icon, index) => (
          <motion.li
            key={index}
            className={`flex hover:text-${icon.color} hover:scale-110`}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {icon.icon}
            {icon.secondIcon && icon.secondIcon}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

import Heading from "../components/heading";

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

import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiMysql } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <section className="p-10 bg-white dark:bg-black" id="skills">
      <Heading>Know technologies</Heading>
      <div className="text-5xl flex flex-wrap justify-center gap-16 text-gray-600 pb-10">
        <FaHtml5 className="hover:text-orange-500 hover:scale-110" />
        <FaCss3Alt className="hover:text-blue-500 hover:scale-110" />
        <IoLogoJavascript className="hover:text-yellow-500 hover:scale-110" />
        <FaReact className="hover:text-blue-600 hover:scale-110" />
        <SiTypescript className="hover:text-blue-500 hover:scale-110" />
        <FaNodeJs className="hover:text-green-500 hover:scale-110" />
        <SiExpress className="hover:text-amber-500 hover:scale-110" />
        <DiMongodb className="hover:text-green-950 hover:scale-110" />
        <SiTailwindcss className="hover:text-cyan-500 hover:scale-110" />
        <TbBrandNextjs className="hover:text-slate-400 hover:scale-110" />
        <SiVite className="hover:text-violet-600 hover:scale-110" />
      </div>
      <Heading>Next to learn</Heading>
      <div className="text-5xl flex flex-wrap justify-center gap-16 text-gray-600 pb-10">
        <AiOutlineConsoleSql className="hover:text-blue-500 hover:scale-110" />
        <SiMysql className="hover:text-blue-500 hover:scale-110" />
        <SiCypress className="hover:text-green-500 hover:scale-110" />
        <div className="flex hover:text-blue-600 hover:scale-110">
          <FaMobileAlt />
          <FaReact />
        </div>
        <FaAngular className="hover:text-red-500 hover:scale-110" />
        <FaVuejs className="hover:text-green-500 hover:scale-110" />
        <FaPython className="hover:text-yellow-500 hover:scale-110" />
      </div>
    </section>
  );
}

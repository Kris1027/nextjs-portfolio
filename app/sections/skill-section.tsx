import Heading from "../components/heading";
import SectionWrapper from "../components/section-wrapper";

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

export default function SkillSection() {
  return (
    <SectionWrapper>
      <div className="pb-10 text-center">
        <Heading>Technologies</Heading>
      </div>
      <div className="text-5xl flex flex-wrap justify-center gap-16 text-gray-600">
        <FaHtml5 className="hover:text-orange-500" />
        <FaCss3Alt className="hover:text-blue-500" />
        <IoLogoJavascript className="hover:text-yellow-500" />
        <FaReact className="hover:text-blue-600" />
        <SiTypescript className="hover:text-blue-500" />
        <FaNodeJs className="hover:text-green-500" />
        <SiExpress className="hover:text-amber-500" />
        <DiMongodb className="hover:text-green-950" />
        <SiTailwindcss className="hover:text-cyan-500" />
        <TbBrandNextjs className="hover:text-slate-400" />
        <SiVite className="hover:text-violet-600" />
      </div>
    </SectionWrapper>
  );
}

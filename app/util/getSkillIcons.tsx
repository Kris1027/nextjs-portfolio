import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAstro,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const getSkillIcons = (iconName: string) => {
  switch (iconName) {
    case "FaHtml5":
      return <FaHtml5 />;
    case "FaCss3Alt":
      return <FaCss3Alt />;
    case "IoLogoJavascript":
      return <IoLogoJavascript />;
    case "FaReact":
      return <FaReact />;
    case "SiTypescript":
      return <SiTypescript />;
    case "FaNodeJs":
      return <FaNodeJs />;
    case "SiExpress":
      return <SiExpress />;
    case "DiMongodb":
      return <DiMongodb />;
    case "BiLogoPostgresql":
      return <BiLogoPostgresql />;
    case "SiMysql":
      return <SiMysql />;
    case "SiTailwindcss":
      return <SiTailwindcss />;
    case "FaSass":
      return <FaSass />;
    case "SiStyledcomponents":
      return <SiStyledcomponents />;
    case "TbBrandNextjs":
      return <TbBrandNextjs />;
    case "FaGitAlt":
      return <FaGitAlt />;
    case "SiAstro":
      return <SiAstro />;
    case "SiPrisma":
      return <SiPrisma />;
    default:
      return null;
  }
};

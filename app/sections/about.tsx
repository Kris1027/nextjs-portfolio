import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./skills";
import { splitStringUsingRegex } from "../components/util/splitStringUsingRegex";

import GithubImg from "../../public/github.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const descripion =
  "Since November 2022, I've been diving into frontend development, fueled by a passion for creating captivating digital experiences. From mastering HTML, CSS, and JavaScript to exploring advanced technologies like React and TypeScript, I'm dedicated to continuous learning. Despite challenges, I persistently push forward, always seeking new techniques and best practices. I prioritize design principles and usability, striving to strike the perfect balance between form and function. As I continue my journey, I'm excited to collaborate, contribute, and grow in this dynamic field.";
const title = "Krzysztof Obarzanek";
const profession = "Frontend developer";

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function About() {
  const titleChars = splitStringUsingRegex(title);
  const professionChars = splitStringUsingRegex(profession);
  const descripionChars = splitStringUsingRegex(descripion);

  const socials = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/",
      color: "#3b82f6",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Kris1027",
      color: "#111827",
    },
    {
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/krzy1027/",
      color: "#ef4444",
    },
  ];

  return (
    <section
      className="pt-40 pb-10 px-10 bg-white dark:bg-black min-h-screen flex flex-col justify-between overflow-hidden"
      id="about"
    >
      <div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.02 }}
          className="text-5xl py-2 text-teal-600 font-bold text-center"
        >
          {titleChars.map((char) => (
            <motion.span
              key={char}
              variants={charVariants}
              transition={{ duration: 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center"
        >
          {professionChars.map((char) => (
            <motion.span
              key={char}
              variants={charVariants}
              transition={{ duration: 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.006 }}
          className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center"
        >
          {descripionChars.map((char) => (
            <motion.span
              key={char}
              variants={charVariants}
              transition={{ duration: 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <ul className="text-5xl lg:text-7xl flex justify-center gap-16 text-gray-600">
        {socials.map((social, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            whileHover={{ x: -5, y: -5, scale: 1.1, color: social.color }}
          >
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="relative rounded-full w-80 h-80 lg:w-[40rem] lg:h-[40rem] mx-auto overflow-hidden shadow-lg shadow-zinc-800 dark:shadow-zinc-600"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
      >
        <Image src={GithubImg} alt="image from github" fill />
      </motion.div>
    </section>
  );
}

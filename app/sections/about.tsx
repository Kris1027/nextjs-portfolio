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
      target: "_blank",
      rel: "noopener noreferrer",
      color: "blue-500",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Kris1027",
      target: "_blank",
      rel: "noopener noreferrer",
      color: "gray-900",
    },
    {
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/krzy1027/",
      target: "_blank",
      rel: "noopener noreferrer",
      color: "red-500",
    },
  ];

  return (
    <section className="p-10 pt-40 bg-white dark:bg-black" id="about">
      <div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.02 }}
          className="text-5xl py-2 text-teal-600 font-bold text-center"
          viewport={{
            once: true,
          }}
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
          viewport={{
            once: true,
          }}
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
          viewport={{
            once: true,
          }}
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
      <ul className="text-5xl flex justify-center gap-16 text-gray-600">
        {socials.map((social, index) => (
          <motion.li
            key={index}
            className={`hover:text-${social.color}`}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{ x: -5, y: -5, scale: 1.1 }}
          >
            <a href={social.link} target={social.target} rel={social.rel}>
              {social.icon}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="relative rounded-full w-80 h-80 lg:w-96 lg:h-96 mx-auto mt-20 overflow-hidden shadow-lg shadow-zinc-800 dark:shadow-zinc-600"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Image src={GithubImg} alt="image from github" fill />
      </motion.div>
    </section>
  );
}

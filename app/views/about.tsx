import Image from "next/image";
import { motion } from "framer-motion";
import { splitStringUsingRegex } from "../util/splitStringUsingRegex";

import GithubImg from "../../public/github.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Section from "../ui/section";

const descripion =
  "Hi there! I am a web developer who is passionate about creating user-friendly and visually appealing websites. I have been learning to code since November 2022, and I have experience with HTML, CSS, JavaScript, React, and TypeScript. I am always eager to learn new technologies and improve my skills. I believe that web development is a powerfull tool that can be used to create positive change in the world. I am excited to use my skills to build websites that make a difference. I am currently looking for a job as a frontend developer, so if you think I would be a good fit for your team, please don't hesitate to reach out. Thank you for your time!";
const title = "Krzysztof Obarzanek";
const profession = "Frontend developer";

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
    <Section id="about">
      <div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.02 }}
          className="text-5xl py-2 text-teal-600 font-bold text-center"
          viewport={{ once: true }}
        >
          {titleChars.map((char, index) => (
            <motion.span
              key={index}
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
          viewport={{ once: true }}
        >
          {professionChars.map((char, index) => (
            <motion.span
              key={index}
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
          className="text-sm px-2 md:text-lg lg:text-xl pb-5 leading-8 text-gray-800 dark:text-gray-600 xl:w-3/4 mx-auto text-center"
          viewport={{ once: true }}
        >
          {descripionChars.map((char, index) => (
            <motion.span
              key={index}
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
            viewport={{ once: true }}
          >
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="relative rounded-full w-56 h-56 sm:w-96 sm:h-96 md:w-[29rem] md:h-[29rem] lg:w-[32rem] lg:h-[32rem] mx-auto overflow-hidden shadow-lg shadow-zinc-800 dark:shadow-zinc-600"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Image src={GithubImg} alt="image from github" fill />
      </motion.div>
    </Section>
  );
}

"use client";
import { splitStringUsingRegex } from "../../util/splitStringUsingRegex";
import { motion } from "framer-motion";

const descripion =
  "Hi there! I am a web developer who is passionate about creating user-friendly and visually appealing websites. I have been learning to code since November 2022, and I have experience with HTML, CSS, JavaScript, React, and TypeScript. I am always eager to learn new technologies and improve my skills. I believe that web development is a powerfull tool that can be used to create positive change in the world. I am excited to use my skills to build websites that make a difference. I am currently looking for a job as a frontend developer, so if you think I would be a good fit for your team, please don't hesitate to reach out. Thank you for your time!";
const title = "Krzysztof Obarzanek";
const profession = "Frontend developer";

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function AboutTitle() {
  const titleChars = splitStringUsingRegex(title);
  const professionChars = splitStringUsingRegex(profession);
  const descriptionChars = splitStringUsingRegex(descripion);

  return (
    <>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.02 }}
        className="text-5xl tablet:text-7xl desktop:text-9xl py-2 text-primary dark:text-primaryDark font-bold text-center"
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
        className="text-2xl tablet:text-4xl desktop:text-6xl pt-2 text-secondary dark:text-secondaryDark pb-10 text-center"
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
        className="text-sm tablet:text-lg desktop:text-xl pb-5 leading-8 text-secondary dark:text-secondaryDark text-center tablet:w-4/5 desktop:w-3/5 mx-auto"
        viewport={{ once: true }}
      >
        {descriptionChars.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </>
  );
}

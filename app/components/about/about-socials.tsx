"use client";
import { socials } from "@/app/data/socials";
import { fadeInAnimationVariants } from "../skill-item";
import { motion } from "framer-motion";

export default function AboutSocials() {
  return (
    <ul className="text-5xl lg:text-7xl flex justify-center gap-16 text-secondary dark:text-secondaryDark mb-10 md:mb-20">
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
  );
}

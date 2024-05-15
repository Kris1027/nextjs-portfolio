"use client";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/app/theme/fadeInAnimation";
import { getSocialIcons } from "@/app/util/getSocialIcons";

type SocialsItemProps = {
  id: number;
  color: string;
  icon: string;
  link: string;
};

export default function SocialsItem({
  id,
  link,
  color,
  icon,
}: SocialsItemProps) {
  return (
    <motion.li
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      custom={id}
      whileHover={{
        x: -5,
        y: -5,
        scale: 1.1,
        color: color,
      }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {getSocialIcons(icon)}
      </a>
    </motion.li>
  );
}

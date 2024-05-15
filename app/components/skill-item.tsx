"use client";
import { motion } from "framer-motion";
import { getSkillIcons } from "../util/getSkillIcons";
import { fadeInAnimation } from "../theme/fadeInAnimation";

type SkillItemProps = {
  id: number;
  color: string;
  icon: string;
  name: string;
};

export default function SkillItem({ id, color, icon, name }: SkillItemProps) {
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
      <div>{getSkillIcons(icon)}</div>
      <div className="text-sm">{name}</div>
    </motion.li>
  );
}

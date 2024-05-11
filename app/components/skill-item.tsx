"use client";
import { motion } from "framer-motion";
import { type SkillsIconsProps } from "../data/skills-data";

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

export default function SkillItem({ id, color, icon, name }: SkillsIconsProps) {
  return (
    <motion.li
      variants={fadeInAnimationVariants}
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
      <div>{icon}</div>
      <div className="text-sm">{name}</div>
    </motion.li>
  );
}

import Image from "next/image";
import { motion } from "framer-motion";
import { cardAnimationVariants } from "../components/project-item";
import { type CoursesListProps } from "../data/courses-data";

export default function CourseItem({
  id,
  title,
  image,
  link,
}: CoursesListProps) {
  return (
    <motion.li
      className="flex flex-col justify-center items-center w-96 h-96 dark:bg-gray-950 bg-gray-100 rounded-lg p-2"
      custom={id}
      variants={cardAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h1 className="text-xl text-center">{title}</h1>
      <a className="hover:text-blue-500 text-center text-xs" href={link}>
        {link}
      </a>
      <div className=" w-64 h-48 relative">
        <Image src={image} alt={title} fill objectFit="cover" />
      </div>
    </motion.li>
  );
}

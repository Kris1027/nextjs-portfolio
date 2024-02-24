import Image from "next/image";
import { motion } from "framer-motion";
import { type ProjectProps } from "../data/projects-data";

export const cardAnimationVariants = {
  initial: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -200 : 200,
  }),
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.2,
    },
  }),
};

export default function ProjectItem({
  title,
  image,
  live,
  github,
  technologies,
  id,
}: ProjectProps) {
  return (
    <motion.li
      variants={cardAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={id}
      viewport={{ once: true }}
      className="flex flex-col items-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative rounded-lg overflow-hidden shadow-md"
    >
      <div className="flex flex-col justify-between p-2 w-full h-full z-10 hover:bg-black text-transparent hover:text-gray-300 hover:bg-opacity-80">
        <h3 className="text-2xl py-2 text-center">{title}</h3>
        <p className="flex flex-wrap gap-1 justify-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="p-1 px-2 bg-gray-600 text-white rounded-lg xl:text-lg"
            >
              {tech}
            </span>
          ))}
        </p>
        <div className="text-center">
          <a
            className="hover:text-blue-500 text-sm"
            href={live}
            target="_blank"
            rel="norefferer"
          >
            <span className="block">Live: </span>
            {live}
          </a>
          <a
            className="hover:text-blue-500 text-sm"
            href={github}
            target="_blank"
            rel="norefferer"
          >
            <span className="block">GitHub: </span>
            {github}
          </a>
        </div>
      </div>
      <Image src={image} alt={title} fill objectFit="cover" />
    </motion.li>
  );
}

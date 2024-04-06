import Image from "next/image";
import { type ProjectProps } from "../data/projects-data";
import { GoLinkExternal } from "react-icons/go";

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
  description,
}: ProjectProps) {
  return (
    <li className="flex flex-col gap-4 bg-slate-400 bg-opacity-25 rounded-2xl p-6 text-slate-700 dark:text-slate-300">
      <div className="relative w-full h-80 bg-black rounded-t-2xl">
        <Image
          className="rounded-t-2xl"
          src={image}
          alt={title}
          fill
          objectFit="cover"
        />
      </div>
      <ul className="flex flex-wrap gap-1">
        {technologies.map((tech, index) => {
          return (
            <li
              className="border-[1px] border-slate-300 dark:border-slate-700 rounded-2xl py-1 px-5 hover:text-slate-500 hover:border-slate-500 dark:hover:text-slate-200 dark:hover:border-slate-200"
              key={index}
            >
              {tech}
            </li>
          );
        })}
      </ul>
      <h3 className="text-2xl">{title}</h3>
      <ul className="list-disc pl-4 space-y-2">
        {description.map((desc, index) => {
          return <li key={index}>{desc}</li>;
        })}
      </ul>
      <div className="flex justify-between">
        <a
          className="flex items-center gap-2 border-[1px] border-slate-300 dark:border-slate-700 py-1 px-3 cursor-pointer hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-400"
          href={live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Live
          <GoLinkExternal />
        </a>
        <a
          className="flex items-center gap-2 border-[1px] border-slate-300 dark:border-slate-700 py-1 px-3 cursor-pointer hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-400"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          See Code
          <GoLinkExternal />
        </a>
      </div>
    </li>
  );
}

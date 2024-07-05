"use client";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { imageKitLoader } from "../util/image-kit-loader";
import ListItem from "../ui/list-item";
import { sideAnimation } from "../theme/animations/side-animation";

type ProjectProps = {
  id: number;
  title: string;
  image: string;
  live: string;
  github: string;
  technologies: string[];
  description: string[];
};

export default function ProjectItem({
  id,
  title,
  image,
  live,
  github,
  technologies,
  description,
}: ProjectProps) {
  return (
    <ListItem id={id} variants={sideAnimation}>
      <div className="relative bg-[var(--background)] rounded-t-lg overflow-hidden">
        <Image
          className="scale-[1.4] rotate-12"
          loader={imageKitLoader}
          src={image}
          sizes="(min-width: 768px) 564px, (min-width: 384px) 224px"
          alt={title}
          width={564}
          height={233}
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <ul className="flex items-center flex-wrap gap-1">
          {technologies.map((tech, index) => {
            return (
              <li
                className="border-[1px] border-[var(--secondary)] rounded-2xl py-1 px-5 hover:text-[var(--primary)] hover:border-[var(--primary)] text-xs tablet:text-xs"
                key={index}
              >
                {tech}
              </li>
            );
          })}
        </ul>
        <h3 className="text-xl tablet:text-3xl">{title}</h3>
        <ul className="list-disc pl-4 space-y-2 text-xs tablet:text-sm">
          {description.map((desc, index) => {
            return <li key={index}>{desc}</li>;
          })}
        </ul>
        <div className="flex justify-between text-xs tablet:text-base">
          <a
            className="flex items-center gap-2 border-[1px] border-[var(--secondary)] py-1 px-3 cursor-pointer hover:text-[var(--link)] hover:border-[var(--link)]"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Live
            <GoLinkExternal />
          </a>
          <a
            className="flex items-center gap-2 border-[1px] border-[var(--secondary)] py-1 px-3 cursor-pointer hover:text-[var(--link)] hover:border-[var(--link)]"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Code
            <GoLinkExternal />
          </a>
        </div>
      </div>
    </ListItem>
  );
}

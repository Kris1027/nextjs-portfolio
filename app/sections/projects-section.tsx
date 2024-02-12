import Image from "next/image";
import Heading from "../components/heading";
import Paragraph from "../components/paragraph";
import { type StaticImageData } from "next/image";

import HummerMushroomsImg from "../../public/hummer-mushrooms.png";
import MovieRatingImg from "../../public/movie-rating.png";
import JSGameImg from "../../public/frela-game.png";
import PortfolioImg from "../../public/portfolio.png";

type ProjectProps = {
  title: string;
  description: string;
  image: StaticImageData;
  live: string;
  github: string;
};

export default function ProjectsSection() {
  const projects: ProjectProps[] = [
    {
      title: "Movie rating app",
      description: "This is another project I worked on.",
      image: MovieRatingImg,
      live: "https://nextjs-movie-rating-app.vercel.app/",
      github: "https://github.com/Kris1027/nextjs-movie-rating-app",
    },
    {
      title: "Portfolio",
      description: "This is another project I worked on.",
      image: PortfolioImg,
      live: "https://kris1027-nextjs-portfolio.vercel.app/",
      github: "https://github.com/Kris1027/nextjs-portfolio",
    },
    {
      title: "E-commerce site",
      description: "This is a project I worked on.",
      image: HummerMushroomsImg,
      live: "https://hummer-mushrooms.netlify.app/",
      github: "https://github.com/Kris1027/mushrooms-shop",
    },
    {
      title: "JavaScript game",
      description: "This is a project I worked on.",
      image: JSGameImg,
      live: "https://kris1027.github.io/Frela---The-Game/",
      github: "https://github.com/Kris1027/Frela---The-Game",
    },
  ];

  return (
    <section className="p-10 bg-white dark:bg-black">
      <Heading>Projects</Heading>
      <Paragraph>Here are some of the projects I&apos;ve worked on.</Paragraph>
      <div className="flex flex-wrap gap-10 justify-center w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col p-5 items-center text-gray-800 dark:text-gray-300 shadow-md w-96"
          >
            <Heading>{project.title}</Heading>
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                objectFit="cover"
                className="hover:scale-150"
              />
            </div>
            <Paragraph>{project.description}</Paragraph>
            <div className="text-center">
              <a
                className="hover:text-blue-500 text-sm"
                href={project.live}
                target="_blank"
                rel="norefferer"
              >
                <span className="block">Live: </span>
                {project.live}
              </a>
              <a
                className="hover:text-blue-500 text-sm"
                href={project.github}
                target="_blank"
                rel="norefferer"
              >
                <span className="block">GitHub: </span>
                {project.github}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

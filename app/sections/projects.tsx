import Image from "next/image";
import { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

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

const projectsAnimationVariants = {
  initial: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -500 : 500,
  }),
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: index * 0.05,
    },
  }),
};

export default function Projects() {
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
    <section className="p-10 pt-40 bg-white dark:bg-black" id="projects">
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Projects
      </h2>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        Here are some of the projects I&apos;ve worked on.
      </p>
      <div className="flex flex-wrap gap-10 justify-center w-1/2 mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={projectsAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="flex flex-col p-5 items-center text-gray-800 dark:text-gray-300 shadow-md w-96"
          >
            <h3 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
              {project.title}
            </h3>
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                objectFit="cover"
                className="hover:scale-150"
              />
            </div>
            <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
              {project.description}
            </p>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}

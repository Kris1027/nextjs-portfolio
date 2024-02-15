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
    <section
      className="pt-40 pb-10 px-10 bg-white dark:bg-black min-h-screen"
      id="projects"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Projects
      </h2>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        Here are some of the projects I&apos;ve worked on.
      </p>
      <div className="flex flex-wrap gap-10 justify-center w-3/4 mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={projectsAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="flex flex-col items-center w-96 h-96 relative rounded-md overflow-hidden shadow-md"
          >
            <div className="flex flex-col justify-between p-2 w-full h-full z-10 hover:bg-black text-transparent hover:text-gray-300 hover:bg-opacity-80">
              <h3 className="text-2xl pt-2 pb-10 text-center">
                {project.title}
              </h3>
              <p className="text-sm md:text-lg pb-5 leading-8 lg:w-1/2 mx-auto text-center">
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
            </div>
            <Image
              src={project.image}
              alt={project.title}
              fill
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

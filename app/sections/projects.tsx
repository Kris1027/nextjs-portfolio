import Image from "next/image";
import { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import HummerMushroomsImg from "../../public/projects/hummer-mushrooms.png";
import MovieRatingImg from "../../public/projects/movie-rating.png";
import JSGameImg from "../../public/projects/frela-game.png";
import PortfolioImg from "../../public/projects/portfolio.png";
import CountriesImg from "../../public/projects/countries.png";

type ProjectProps = {
  title: string;
  image: StaticImageData;
  live: string;
  github: string;
  technologies: string[];
};

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

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Movie rating app",
      image: MovieRatingImg,
      live: "https://nextjs-movie-rating-app.vercel.app/",
      github: "https://github.com/Kris1027/nextjs-movie-rating-app",
      technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
    {
      title: "Portfolio",
      image: PortfolioImg,
      live: "https://kris1027-nextjs-portfolio.vercel.app/",
      github: "https://github.com/Kris1027/nextjs-portfolio",
      technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
    {
      title: "E-commerce site",
      image: HummerMushroomsImg,
      live: "https://hummer-mushrooms.netlify.app/",
      github: "https://github.com/Kris1027/mushrooms-shop",
      technologies: ["React", "React Router", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Countries rest API",
      image: CountriesImg,
      live: "https://effortless-churros-ad658b.netlify.app/",
      github:
        "https://github.com/Kris1027/rest-countries-api?tab=readme-ov-file",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      title: "JavaScript game",
      image: JSGameImg,
      live: "https://kris1027.github.io/Frela---The-Game/",
      github: "https://github.com/Kris1027/Frela---The-Game",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      className="pt-40 px-2 sm:px-10 bg-white dark:bg-black min-h-screen overflow-hidden flex flex-col gap-5 justify-center ease-in-out duration-500"
      id="projects"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Projects
      </h2>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        Here are some of the projects I&apos;ve worked on.
      </p>
      <ul className="flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={cardAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-[35rem] xl:h-[35rem] relative rounded-lg overflow-hidden shadow-md"
          >
            <div className="flex flex-col justify-between p-2 w-full h-full z-10 hover:bg-black text-transparent hover:text-gray-300 hover:bg-opacity-80">
              <h3 className="text-2xl py-2 text-center">{project.title}</h3>
              <p className="flex flex-wrap gap-1 justify-center">
                {project.technologies.map((tech, index) => (
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
          </motion.li>
        ))}
      </ul>
      <p className="text-sm md:text-lg leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        More you can find on my Github profile!
      </p>
    </section>
  );
}

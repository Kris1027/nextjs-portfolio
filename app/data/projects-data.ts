import HummerMushroomsImg from "../../public/projects/hummer-mushrooms.png";
import MovieRatingImg from "../../public/projects/movie-rating.png";
import JSGameImg from "../../public/projects/frela-game.png";
import PortfolioImg from "../../public/projects/portfolio.png";
import CountriesImg from "../../public/projects/countries.png";
import { StaticImageData } from "next/image";

export type ProjectProps = {
  id: number;
  title: string;
  image: StaticImageData;
  live: string;
  github: string;
  technologies: string[];
};

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Movie rating app",
    image: MovieRatingImg,
    live: "https://nextjs-movie-rating-app.vercel.app/",
    github: "https://github.com/Kris1027/nextjs-movie-rating-app",
    technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
  },
  {
    id: 2,
    title: "Portfolio",
    image: PortfolioImg,
    live: "https://kris1027-nextjs-portfolio.vercel.app/",
    github: "https://github.com/Kris1027/nextjs-portfolio",
    technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
  },
  {
    id: 3,
    title: "E-commerce site",
    image: HummerMushroomsImg,
    live: "https://hummer-mushrooms.netlify.app/",
    github: "https://github.com/Kris1027/mushrooms-shop",
    technologies: ["React", "React Router", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "Countries rest API",
    image: CountriesImg,
    live: "https://effortless-churros-ad658b.netlify.app/",
    github: "https://github.com/Kris1027/rest-countries-api?tab=readme-ov-file",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "JavaScript game",
    image: JSGameImg,
    live: "https://kris1027.github.io/Frela---The-Game/",
    github: "https://github.com/Kris1027/Frela---The-Game",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

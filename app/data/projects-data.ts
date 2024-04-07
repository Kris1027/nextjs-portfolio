import HummerMushroomsImg from "../../public/projects/hummer-mushrooms.png";
import MovieRatingImg from "../../public/projects/movie-rating.png";
import JSGameImg from "../../public/projects/frela-game.png";
import PortfolioImg from "../../public/projects/portfolio.png";
import CountriesImg from "../../public/projects/countries.png";
import ReactProjectsImg from "../../public/projects/25React.png";
import { StaticImageData } from "next/image";

export type ProjectProps = {
  id: number;
  title: string;
  image: StaticImageData;
  live: string;
  github: string;
  technologies: string[];
  description: string[];
};

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "25 React projects",
    image: ReactProjectsImg,
    live: "https://25-react-projects.netlify.app/",
    github: "https://github.com/Kris1027/25-react-projects",
    technologies: [
      "React",
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
    description: [
      "The app allows users to search for movies and add them to their favorites list.",
      "The app uses the TMDB API to fetch movie data.",
      "Implemented a responsive design that adapts to different screen sizes.",
    ],
  },
  {
    id: 2,
    title: "Movie rating app",
    image: MovieRatingImg,
    live: "https://nextjs-movie-rating-app.vercel.app/",
    github: "https://github.com/Kris1027/nextjs-movie-rating-app",
    technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    description: [
      "The app allows users to search for movies and add them to their favorites list.",
      "The app uses the TMDB API to fetch movie data.",
      "Implemented a responsive design that adapts to different screen sizes.",
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    image: PortfolioImg,
    live: "https://kris1027-nextjs-portfolio.vercel.app/",
    github: "https://github.com/Kris1027/nextjs-portfolio",
    technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    description: [
      "The app allows users to search for movies and add them to their favorites list.",
      "The app uses the TMDB API to fetch movie data.",
      "Implemented a responsive design that adapts to different screen sizes.",
    ],
  },
  {
    id: 4,
    title: "E-commerce site",
    image: HummerMushroomsImg,
    live: "https://hummer-mushrooms.netlify.app/",
    github: "https://github.com/Kris1027/mushrooms-shop",
    technologies: ["React", "React Router", "Tailwind CSS", "TypeScript"],
    description: [
      "The app allows users to search for movies and add them to their favorites list.",
      "The app uses the TMDB API to fetch movie data.",
      "Implemented a responsive design that adapts to different screen sizes.",
    ],
  },
  {
    id: 5,
    title: "Countries rest API",
    image: CountriesImg,
    live: "https://effortless-churros-ad658b.netlify.app/",
    github: "https://github.com/Kris1027/rest-countries-api?tab=readme-ov-file",
    technologies: ["React", "Tailwind CSS"],
    description: [
      "The app allows users to search for movies and add them to their favorites list.",
      "The app uses the TMDB API to fetch movie data.",
      "Implemented a responsive design that adapts to different screen sizes.",
    ],
  },
  {
    id: 6,
    title: "JavaScript game",
    image: JSGameImg,
    live: "https://kris1027.github.io/Frela---The-Game/",
    github: "https://github.com/Kris1027/Frela---The-Game",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: [
      "The app allows users to search for movies and add them to their favorites list.",
      "The app uses the TMDB API to fetch movie data.",
      "Implemented a responsive design that adapts to different screen sizes.",
    ],
  },
];

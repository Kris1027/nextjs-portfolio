export type ProjectProps = {
  id: number;
  title: string;
  image: string;
  live: string;
  github: string;
  technologies: string[];
  description: string[];
};

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "25 React projects",
    image:
      "https://ik.imagekit.io/1027/portfolio-projects/25React.png?updatedAt=1713867200682",
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
      "A collection of 25 React projects.",
      "Learing how to build useful React projects and components with TypeScript.",
    ],
  },
  {
    id: 2,
    title: "Movie rating app",
    image:
      "https://ik.imagekit.io/1027/portfolio-projects/movie-rating.png?updatedAt=1713867178600",
    live: "https://nextjs-movie-rating-app.vercel.app/",
    github: "https://github.com/Kris1027/nextjs-movie-rating-app",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Framer Motion",
    ],
    description: [
      "The app allows users to search for movies and add them to their favorites list.",
      "The app uses the TMDB API to fetch movie data.",
      "Working with API.",
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    image:
      "https://ik.imagekit.io/1027/portfolio-projects/portfolio.png?updatedAt=1713867195662",
    live: "https://kris1027-nextjs-portfolio.vercel.app/",
    github: "https://github.com/Kris1027/nextjs-portfolio",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Framer Motion",
      "Toastify",
    ],
    description: [
      "Working with animations using Framer Motion and Toastify.",
      "Implemented a responsive design that adapts to different screen sizes.",
      "Implemented emailjs for sending emails.",
    ],
  },
  {
    id: 4,
    title: "React Quiz",
    image:
      "https://ik.imagekit.io/1027/portfolio-projects/quiz.png?updatedAt=1713867198417",
    live: "https://react-quiz-app-rosy-nine.vercel.app/",
    github: "https://github.com/Kris1027/react-quiz-app",
    technologies: ["React", "Tailwind CSS", "SQLite"],
    description: [
      "Working with database.",
      "using useReducer hook for state management.",
    ],
  },
  {
    id: 5,
    title: "Countries rest API",
    image:
      "https://ik.imagekit.io/1027/portfolio-projects/countries.png?updatedAt=1713867202810",
    live: "https://effortless-churros-ad658b.netlify.app/",
    github: "https://github.com/Kris1027/rest-countries-api?tab=readme-ov-file",
    technologies: ["React", "Tailwind CSS"],
    description: [
      "Working with API.",
      "Implemented a responsive design that adapts to different screen sizes.",
      "Dark mode with React Context.",
    ],
  },
  {
    id: 6,
    title: "JavaScript game",
    image:
      "https://ik.imagekit.io/1027/portfolio-projects/frela-game.png?updatedAt=1713867192786",
    live: "https://kris1027.github.io/Frela---The-Game/",
    github: "https://github.com/Kris1027/Frela---The-Game",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: [
      "Implementing keyboard controls.",
      "Implementing game mechanics.",
    ],
  },
];

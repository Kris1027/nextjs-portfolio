export type CoursesListProps = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export const coursesList: CoursesListProps[] = [
  {
    id: 1,
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    image:
      "https://ik.imagekit.io/1027/nextjs-portfolio/portfolio-courses/JavaScript.png?updatedAt=1713868108239",
    link: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  {
    id: 2,
    title: "The Ultimate React Course 2023: React, Redux & More",
    image:
      "https://ik.imagekit.io/1027/nextjs-portfolio/portfolio-courses/React.png?updatedAt=1713868108240",
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
  },
  {
    id: 3,
    title: "React & TypeScript - The Practical Guide",
    image:
      "https://ik.imagekit.io/1027/nextjs-portfolio/portfolio-courses/React-TypeScript.png?updatedAt=1713868108225",
    link: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
  },
  {
    id: 4,
    title: "Understanding TypeScript",
    image:
      "https://ik.imagekit.io/1027/nextjs-portfolio/portfolio-courses/TypeScript.png?updatedAt=1713868113254",
    link: "https://www.udemy.com/course/understanding-typescript/",
  },
  {
    id: 5,
    title: "Zrozumieć React",
    image:
      "https://ik.imagekit.io/1027/nextjs-portfolio/portfolio-courses/ZrozumiecReact.png?updatedAt=1713868108371",
    link: "https://zrozumreact.pl/",
  },
  {
    id: 6,
    title: "The complete SQL bootcamp: Go from Zero to Hero",
    image:
      "https://ik.imagekit.io/1027/nextjs-portfolio/portfolio-courses/Sql.png?updatedAt=1713868108613",
    link: "https://www.udemy.com/course/the-complete-sql-bootcamp/?couponCode=24T3FS41524",
  },
];

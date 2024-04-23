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
    image: "cert-js.png",
    link: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  {
    id: 2,
    title: "The Ultimate React Course 2023: React, Redux & More",
    image: "cert-react.png",
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
  },
  {
    id: 3,
    title: "React & TypeScript - The Practical Guide",
    image: "cert-react-ts.png",
    link: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
  },
  {
    id: 4,
    title: "Understanding TypeScript",
    image: "cert-ts.png",
    link: "https://www.udemy.com/course/understanding-typescript/",
  },
  {
    id: 5,
    title: "Zrozumieć React",
    image: "cert-zr.png",
    link: "https://zrozumreact.pl/",
  },
  {
    id: 6,
    title: "The complete SQL bootcamp: Go from Zero to Hero",
    image: "cert-sql.png",
    link: "https://www.udemy.com/course/the-complete-sql-bootcamp/?couponCode=24T3FS41524",
  },
];

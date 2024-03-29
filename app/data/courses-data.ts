import { StaticImageData } from "next/image";

import JavaScriptImg from "../../public/courses/JavaScript.png";
import ReactImg from "../../public/courses/React.png";
import ReactTSImg from "../../public/courses/React-TypeScript.png";
import TypeScriptImg from "../../public/courses/TypeScript.png";

export type CoursesListProps = {
  id: number;
  title: string;
  image: StaticImageData;
  link: string;
};

export const coursesList: CoursesListProps[] = [
  {
    id: 1,
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    image: JavaScriptImg,
    link: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  {
    id: 2,
    title: "The Ultimate React Course 2023: React, Redux & More",
    image: ReactImg,
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
  },
  {
    id: 3,
    title: "React & TypeScript - The Practical Guide",
    image: ReactTSImg,
    link: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
  },
  {
    id: 4,
    title: "Understanding TypeScript",
    image: TypeScriptImg,
    link: "https://www.udemy.com/course/understanding-typescript/",
  },
];

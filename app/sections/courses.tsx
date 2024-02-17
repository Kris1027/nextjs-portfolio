import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { cardAnimationVariants } from "./projects";

import JavaScriptImg from "../../public/courses/JavaScript.png";
import ReactImg from "../../public/courses/React.png";
import ReactTSImg from "../../public/courses/React-TypeScript.png";
import TypeScriptImg from "../../public/courses/TypeScript.png";

type CoursesList = {
  title: string;
  image: StaticImageData;
  link: string;
};

export default function Courses() {
  const coursesList: CoursesList[] = [
    {
      title: "The Complete JavaScript Course 2023: From Zero to Expert!",
      image: JavaScriptImg,
      link: "https://www.udemy.com/course/the-complete-javascript-course/",
    },
    {
      title: "The Ultimate React Course 2023: React, Redux & More",
      image: ReactImg,
      link: "https://www.udemy.com/course/the-ultimate-react-course/",
    },
    {
      title: "React & TypeScript - The Practical Guide",
      image: ReactTSImg,
      link: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
    },
    {
      title: "Understanding TypeScript",
      image: TypeScriptImg,
      link: "https://www.udemy.com/course/understanding-typescript/",
    },
  ];

  return (
    <section
      className="pt-40 pb-10 px-10 bg-white dark:bg-black min-h-screen flex flex-col justify-center overflow-hidden"
      id="courses"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Courses
      </h2>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        The most important courses I have completed
      </p>
      <ul className="flex flex-wrap gap-5 justify-center dark:text-gray-500">
        {coursesList.map((course, index) => (
          <motion.li
            className="flex flex-col justify-center items-center w-96 h-96 dark:bg-gray-950 bg-gray-100 rounded-lg p-2"
            key={index}
            custom={index}
            variants={cardAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-xl text-center">{course.title}</h1>
            <a
              className="hover:text-blue-500 text-center text-xs"
              href={course.link}
            >
              {course.link}
            </a>
            <div className=" w-64 h-48 relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                objectFit="cover"
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

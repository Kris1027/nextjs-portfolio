import JavaScriptImg from "../../public/courses/JavaScript.png";
import ReactImg from "../../public/courses/React.png";
import ReactTSImg from "../../public/courses/React-TypeScript.png";
import TypeScriptImg from "../../public/courses/TypeScript.png";

export default function Courses() {
  const coursesList = [
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
      className="pt-40 pb-10 px-10 bg-white dark:bg-black min-h-screen flex flex-col overflow-hidden"
      id="courses"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Courses
      </h2>
    </section>
  );
}

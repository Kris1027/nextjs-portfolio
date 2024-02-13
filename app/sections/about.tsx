import Image from "next/image";

import GithubImg from "../../public/github.png";
import Heading from "../components/heading";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const descripion =
  "Since November 2022, I've been diving into frontend development, fueled by a passion for creating captivating digital experiences. From mastering HTML, CSS, and JavaScript to exploring advanced technologies like React and TypeScript, I'm dedicated to continuous learning. Despite challenges, I persistently push forward, always seeking new techniques and best practices. I prioritize design principles and usability, striving to strike the perfect balance between form and function. As I continue my journey, I'm excited to collaborate, contribute, and grow in this dynamic field.";

export default function About() {
  return (
    <section className="p-10 pt-40 bg-white dark:bg-black" id="about">
      <div>
        <h1 className="text-5xl py-2 text-teal-600 font-bold text-center">
          Krzysztof Obarzanek
        </h1>
        <Heading>Frontend developer</Heading>
        <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
          {descripion}
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 text-gray-600">
        <a
          href="https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Kris1027"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/krzy1027/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 hover:scale-110"
        >
          <FaInstagramSquare />
        </a>
      </div>
      <div className="relative rounded-full w-80 h-80 lg:w-96 lg:h-96 mx-auto mt-20 overflow-hidden shadow-lg shadow-zinc-800 dark:shadow-zinc-600">
        <Image src={GithubImg} alt="image from github" fill />
      </div>
    </section>
  );
}

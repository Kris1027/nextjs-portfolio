import { useDarkMode } from "../theme/dark-mode-context";
import Image from "next/image";
import GithubImg from "../../public/github.png";
import SectionWrapper from "../components/section-wrapper";
import Heading from "../components/heading";

import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Paragraph from "../components/paragraph";

export default function MainSection() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <SectionWrapper>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl dark:text-blue-300">Kris1027</h1>
        <ul className="flex items-center">
          <li>
            <button
              className="cursor-pointer text-xl text-black dark:text-blue-300"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BsMoonStarsFill /> : <FaSun />}
            </button>
          </li>
          <li>
            <a
              className="dark:bg-gradient-to-r dark:from-cyan-950 dark:to-teal-950 bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md text-white dark:text-blue-300 ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <h2 className="text-5xl py-2 text-teal-600 font-bold text-center">
          Krzysztof Obarzanek
        </h2>
        <Heading>Frontend developer</Heading>
        <Paragraph>
          Since November <span className="text-green-500">2022</span>, I&apos;ve
          been diving into frontend development, fueled by a passion for
          creating captivating digital experiences. From mastering{" "}
          <span className="text-orange-500">HTML</span>,{" "}
          <span className="text-blue-500">CSS</span>, and{" "}
          <span className="text-yellow-500">JavaScript</span> to exploring
          advanced technologies like{" "}
          <span className="text-blue-600">React</span> and{" "}
          <span className="text-blue-500">TypeScript</span>, I&apos;m dedicated
          to continuous learning. Despite challenges, I persistently push
          forward, always seeking new techniques and best practices. I
          prioritize design principles and usability, striving to strike the
          perfect balance between form and function. As I continue my journey,
          I&apos;m excited to collaborate, contribute, and grow in this dynamic
          field.
        </Paragraph>
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
    </SectionWrapper>
  );
}

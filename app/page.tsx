"use client";
import { useDarkMode } from "./theme/dark-mode-context";
import Image from "next/image";
import GithubImg from "../public/github.png";

import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="min-h-screen px-10 bg-white dark:bg-black">
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
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-bold">
            Krzysztof Obarzanek
          </h2>
          <h3 className="text-2xl py-2 dark:text-gray-500">
            Frontend developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-600">
            Freelancer providing services for programming and design content
            needs. Join me down below and let&apos;s get cracking!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 text-gray-600">
          <FaLinkedin className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <FaInstagramSquare className="cursor-pointer" />
        </div>
        <div className="relative rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden">
          <Image
            src={GithubImg}
            alt="image from github"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </main>
  );
}

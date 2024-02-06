import Image from "next/image";
import GithubImg from "../public/github.png";

import { BsMoonStarsFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Kris1027</h1>
          <ul className="flex items-center">
            <li>
              <BsMoonStarsFill className="cursor-pointer" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md text-white ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Krzysztof Obarzanek
          </h2>
          <h3 className="text-2xl py-2">Frontend developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
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

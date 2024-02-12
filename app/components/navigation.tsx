"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "./util/useMediaQuery";
import { useDarkMode } from "../theme/dark-mode-context";

import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Navigation() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <nav className={darkMode ? "dark" : ""}>
      <div className="flex justify-between p-10 bg-white dark:bg-black text-gray-800 dark:text-gray-300">
        {/* Desktop menu */}
        {matches && (
          <div>
            <ul className="flex text-lg gap-16">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Courses</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Theme switcher */}
        <div>
          <button
            className="cursor-pointer text-xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <BsMoonStarsFill /> : <FaSun />}
          </button>
        </div>

        {/* Burger */}
        {!matches && (
          <div
            className="space-y-1.5 cursor-pointer z-50"
            onClick={() => setToggled((prevToggle) => !prevToggle)}
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black dark:bg-gray-300"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24 }}
              className="block h-0.5 w-6 bg-black dark:bg-gray-300"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-black dark:bg-gray-300"
            ></motion.span>
          </div>
        )}

        {/* Mobile menu */}
        {toggled && !matches && (
          <div className="fixed flex justify-center items-center bg-white dark:bg-black bottom-0 left-0 w-full h-screen z-40 ">
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className="flex flex-col gap-24 text-lg items-center dark:text-gray-300"
            >
              <motion.a variants={itemMotion} href="#">
                Home
              </motion.a>
              <motion.a variants={itemMotion} href="#">
                About
              </motion.a>
              <motion.a variants={itemMotion} href="#">
                Projects
              </motion.a>
              <motion.a variants={itemMotion} href="#">
                Courses
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
}

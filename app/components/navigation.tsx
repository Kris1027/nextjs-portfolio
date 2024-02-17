"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useMediaQuery } from "./util/useMediaQuery";
import { useDarkMode } from "../theme/dark-mode-context";

import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const navDesktop = {
  hidden: { x: "-100vw", scale: 0, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

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

  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    window.addEventListener("hashchange", () => setHash(window.location.hash));

    return () => {
      window.removeEventListener("hashchange", () =>
        setHash(window.location.hash)
      );
    };
  }, []);

  const links = [
    { href: "#about", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#courses", text: "Courses" },
  ];

  return (
    <nav className={darkMode ? "dark" : ""}>
      <div className="flex justify-between p-10 bg-white dark:bg-black text-gray-800 dark:text-gray-300 fixed w-full z-40">
        {/* Desktop menu */}
        {matches && (
          <div>
            <ul className="flex text-lg gap-16">
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  variants={navDesktop}
                  animate="visible"
                  initial="hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    className={
                      link.href === hash ? "text-teal-600 text-2xl" : ""
                    }
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
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
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
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
          </motion.div>
        )}

        {/* Mobile menu */}
        {toggled && !matches && (
          <motion.ul
            className="fixed flex flex-col justify-center gap-24 items-center bg-white dark:bg-black dark:text-gray-300 bottom-0 left-0 w-full h-screen text-4xl z-40"
            variants={navMotion}
            animate="visible"
            initial="hidden"
          >
            {links.map((link) => (
              <motion.li
                key={link.href}
                variants={itemMotion}
                whileHover={{ scale: 1.3 }}
                onClick={() => setToggled((prevToggle) => !prevToggle)}
              >
                <a
                  href={link.href}
                  className={link.href === hash ? "text-teal-600 text-5xl" : ""}
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

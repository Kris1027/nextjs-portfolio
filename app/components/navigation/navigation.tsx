"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../util/useMediaQuery";
import { ThemeSwitcher } from "../../theme/themeSwitcher";
import { navDesktop, navMobile, navMobileItem } from "../../theme/navAnimation";

export default function Navigation() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");

  const links = [
    { href: "#about", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#courses", text: "Courses" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav>
      <div className="flex justify-between items-center py-5 px-10 bg-white dark:bg-black text-primary dark:text-primaryDark fixed w-full z-40">
        {/* Desktop menu */}
        {matches && (
          <div>
            <ul className="flex text-2xl gap-16">
              {links.map((link) => (
                <motion.li
                  className="font-bold"
                  key={link.href}
                  variants={navDesktop}
                  animate="visible"
                  initial="hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={link.href}>{link.text}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
        <ThemeSwitcher />
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
              className="block h-0.5 w-8 bg-primary dark:bg-primaryDark"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24 }}
              className="block h-0.5 w-6 bg-primary dark:bg-primaryDark"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-primary dark:bg-primaryDark"
            ></motion.span>
          </motion.div>
        )}

        {/* Mobile menu */}
        {toggled && !matches && (
          <motion.ul
            className="fixed flex flex-col justify-center gap-24 items-center bg-white dark:bg-black text-primary dark:text-primaryDark bottom-0 left-0 w-full h-screen text-4xl z-40"
            variants={navMobile}
            animate="visible"
            initial="hidden"
          >
            {links.map((link) => (
              <motion.li
                className="font-bold"
                key={link.href}
                variants={navMobileItem}
                whileHover={{ scale: 1.3 }}
                onClick={() => setToggled((prevToggle) => !prevToggle)}
              >
                <a href={link.href}>{link.text}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

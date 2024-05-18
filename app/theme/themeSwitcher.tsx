"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { navDesktop } from "./navAnimation";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <motion.ul
      className="flex gap-4"
      variants={navDesktop}
      animate="visible"
      initial="hidden"
    >
      <motion.li
        whileHover={{
          x: -2,
          y: -2,
          scale: 1.1,
        }}
      >
        <FiSun
          className="cursor-pointer z-50"
          size={30}
          onClick={() => setTheme("light")}
          color={resolvedTheme === "light" ? "" : "#4b5563"}
        />
      </motion.li>
      <motion.li
        whileHover={{
          x: -2,
          y: -2,
          scale: 1.1,
        }}
      >
        <FiMoon
          className="cursor-pointer z-50"
          size={30}
          onClick={() => setTheme("dark")}
          color={resolvedTheme === "dark" ? "" : "#4b5563"}
        />
      </motion.li>
      <motion.li
        whileHover={{
          x: -2,
          y: -2,
          scale: 1.1,
        }}
      >
        <MdComputer
          className="cursor-pointer z-50"
          size={30}
          onClick={() => setTheme("system")}
          color="#4b5563"
        />
      </motion.li>
    </motion.ul>
  );
}

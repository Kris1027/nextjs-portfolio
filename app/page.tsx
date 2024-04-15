"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDarkMode } from "./theme/dark-mode-context";

import About from "./views/about";
import Projects from "./views/projects";
import Skills from "./views/skills";
import Courses from "./views/courses";
import Contact from "./views/contact";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <main className={darkMode ? "dark" : ""}>
      <About />
      <Skills />
      <Projects />
      <Courses />
      <Contact />
      <ToastContainer />
    </main>
  );
}

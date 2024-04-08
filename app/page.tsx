"use client";
import { useDarkMode } from "./theme/dark-mode-context";

import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Courses from "./sections/courses";
import Contact from "./sections/contact";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <main className={darkMode ? "dark" : ""}>
      <About />
      <Skills />
      <Projects />
      <Courses />
      <Contact />
    </main>
  );
}

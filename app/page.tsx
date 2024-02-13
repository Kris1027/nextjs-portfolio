"use client";
import { useDarkMode } from "./theme/dark-mode-context";

import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <main className={darkMode ? "dark" : ""}>
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

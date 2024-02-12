"use client";
import MainSection from "./sections/main-section";
import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-section";
import { useDarkMode } from "./theme/dark-mode-context";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <main className={darkMode ? "dark" : ""}>
      <MainSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}

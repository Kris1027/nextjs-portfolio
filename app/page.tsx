"use client";
import MainSection from "./sections/main-section";
import { useDarkMode } from "./theme/dark-mode-context";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <main className={darkMode ? "dark" : ""}>
      <MainSection />
    </main>
  );
}

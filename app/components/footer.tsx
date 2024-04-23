"use client";
import { useDarkMode } from "../theme/dark-mode-context";

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={darkMode ? "dark" : ""}>
      <div className="p-2 sm:p-10 bg-white dark:bg-black text-secondary dark:text-secondaryDark ease-in-out duration-500">
        <p className="text-center">
          ©2024 All rights reserved. Designed & crafted with love by{" "}
          <a
            href="https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark hover:underline font-bold"
          >
            Kris1027
          </a>
        </p>
      </div>
    </footer>
  );
}

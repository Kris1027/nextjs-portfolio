"use client";
import { useDarkMode } from "../theme/dark-mode-context";

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={darkMode ? "dark" : ""}>
      <div className="p-2 sm:p-10 bg-white dark:bg-black text-gray-800 dark:text-gray-600 ease-in-out duration-500">
        <p className="text-center">
          ©2024 All rights reserved. Designed & crafted with love by{" "}
          <a
            href="https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 dark:text-pink-400 hover:underline"
          >
            Kris1027
          </a>
        </p>
      </div>
    </footer>
  );
}

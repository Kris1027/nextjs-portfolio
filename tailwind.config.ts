import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CNR: "code-new-roman",
      },
      colors: {
        primary: "#0d9488",
        primaryDark: "#059669",
        secondary: "#1f2937",
        secondaryDark: "#4b5563",
      },
    },
  },
  plugins: [],
};
export default config;

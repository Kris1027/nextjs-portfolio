import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "./views/about";
import Projects from "./views/projects";
import Skills from "./views/skills";
import Courses from "./views/courses";
import Contact from "./views/contact";

export default function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Courses />
      <Contact />
      <ToastContainer />
    </main>
  );
}

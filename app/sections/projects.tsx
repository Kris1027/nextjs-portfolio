import ProjectItem from "../components/project-item";
import { projects } from "../data/projects-data";

export default function Projects() {
  return (
    <section
      className="pt-40 px-2 sm:px-10 bg-white dark:bg-black min-h-screen overflow-hidden flex flex-col gap-5 justify-center ease-in-out duration-500"
      id="projects"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Projects
      </h2>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        Here are some of the projects I&apos;ve worked on.
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mx-auto xl:w-5/6">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            live={project.live}
            github={project.github}
            technologies={project.technologies}
            description={project.description}
          />
        ))}
      </ul>
      <p className="text-sm md:text-lg leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center pt-10">
        More you can find on my{" "}
        <a
          className="text-pink-600"
          href="https://github.com/Kris1027"
          target="_blank"
          rel="norefferer"
        >
          GitHub
        </a>{" "}
        profile!
      </p>
    </section>
  );
}

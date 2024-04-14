import ProjectItem from "../components/project-item";
import Section from "../ui/section";
import { projects } from "../data/projects-data";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";

export default function Projects() {
  return (
    <Section id="projects">
      <Heading>Projects</Heading>
      <Paragraph>Here are some of the projects I&apos;ve worked on.</Paragraph>
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
    </Section>
  );
}

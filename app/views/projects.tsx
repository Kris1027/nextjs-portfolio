import db from "@/db/db";
import ProjectItem from "../components/project-item";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";

export default async function Projects() {
  const projects = await db.projects.findMany({
    include: {
      technologies: true,
      description: true,
    },
  });

  return (
    <Section id="projects">
      <Heading>Projects</Heading>
      <Paragraph>Here are some of the projects I&apos;ve worked on.</Paragraph>
      <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            live={project.live}
            github={project.github}
            technologies={project.technologies.map((tech) => tech.name)}
            description={project.description.map((desc) => desc.name)}
          />
        ))}
      </ul>
      <p className="text-sm md:text-lg leading-8 text-secondary dark:text-secondaryDark lg:w-1/2 mx-auto text-center pt-10">
        More you can find on my{" "}
        <a
          className="text-primary dark:text-primaryDark hover:underline font-bold"
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

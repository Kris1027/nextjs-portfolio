import Heading from "../components/heading";
import Paragraph from "../components/paragraph";
import SectionWrapper from "../components/section-wrapper";

import HummerMushroomsImg from "../../public/hummer-mushrooms.png";
import MovieRatingImg from "../../public/movie-rating.png";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "hummer-mushrooms e-commerce site",
      description: "This is a project I worked on.",
      image: HummerMushroomsImg,
      live: "",
      github: "",
    },
    {
      title: "movie rating app ",
      description: "This is another project I worked on.",
      image: MovieRatingImg,
      live: "",
      github: "",
    },
  ];

  return (
    <SectionWrapper>
      <Heading>Projects</Heading>
      <Paragraph>Here are some of the projects I&apos;ve worked on.</Paragraph>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center">
          <Heading>{project.title}</Heading>
          <Paragraph>{project.description}</Paragraph>
          <div className="pb-10 w-80 h-80 lg:w-96 lg:h-96">
            <Image src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}

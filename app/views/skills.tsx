import db from "@/db/db";
import SkillItem from "../components/skill-item";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";

export default async function Skills() {
  const skillsIcons = await db.skillIcons.findMany();

  return (
    <Section id="skills">
      <Heading>Known technologies</Heading>
      <Paragraph>Here are some of the technologies I have used.</Paragraph>
      <ul className="relative text-8xl md:text-9xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-secondary dark:text-secondaryDark pb-10 md:w-2/3 lg:w-1/2 mx-auto">
        {skillsIcons.map((icon) => (
          <SkillItem
            key={icon.id}
            id={icon.id}
            icon={icon.icon}
            color={icon.color}
            name={icon.name}
          />
        ))}
      </ul>
    </Section>
  );
}

import SkillItem from "../components/skill-item";
import { nextToLearn, skillsIcons } from "../data/skills-data";

export default function Skills() {
  return (
    <section
      className="pt-40 px-10 bg-white dark:bg-black min-h-screen flex flex-col gap-10 justify-center overflow-hidden ease-in-out duration-500"
      id="skills"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Know technologies
      </h2>
      <ul className="relative md:text-6xl lg:text-8xl text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-gray-600 pb-10 md:w-2/3 lg:w-1/2 mx-auto">
        {skillsIcons.map((icon) => (
          <SkillItem
            key={icon.id}
            id={icon.id}
            icon={icon.icon}
            secondIcon={icon.secondIcon}
            color={icon.color}
            name={icon.name}
          />
        ))}
      </ul>
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Next to learn
      </h2>
      <ul className="relative md:text-6xl lg:text-8xl text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-gray-600 pb-10 md:w-2/3 lg:w-1/2 mx-auto">
        {nextToLearn.map((icon) => (
          <SkillItem
            key={icon.id}
            id={icon.id}
            icon={icon.icon}
            secondIcon={icon.secondIcon}
            color={icon.color}
            name={icon.name}
          />
        ))}
      </ul>
    </section>
  );
}

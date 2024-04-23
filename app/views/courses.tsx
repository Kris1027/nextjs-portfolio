import { type CoursesListProps, coursesList } from "../data/courses-data";
import CourseItem from "../components/course-item";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";

export default function Courses() {
  return (
    <Section id="courses">
      <Heading>Courses</Heading>
      <Paragraph>The most important courses I have completed</Paragraph>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mx-auto xl:w-5/6">
        {coursesList.map((course: CoursesListProps) => (
          <CourseItem
            key={course.id}
            id={course.id}
            title={course.title}
            image={course.image}
            link={course.link}
          />
        ))}
      </ul>
    </Section>
  );
}
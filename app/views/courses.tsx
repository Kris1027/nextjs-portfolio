import db from "@/db/db";
import CourseItem from "../components/course-item";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";
import List from "../ui/list";

export default async function Courses() {
  const coursesList = await db.courses.findMany();

  return (
    <Section id="courses">
      <Heading ariaLabel="courses heading">Courses</Heading>
      <Paragraph ariaLabel="courses description">
        The most important courses I have completed
      </Paragraph>
      <List dataTestId="courses list">
        {coursesList.map((course) => (
          <CourseItem
            key={course.id}
            id={course.id}
            title={course.title}
            image={course.image}
            link={course.link}
          />
        ))}
      </List>
    </Section>
  );
}

import { type CoursesListProps, coursesList } from "../data/courses-data";
import CourseItem from "../components/course-item";
import Section from "../ui/section";

export default function Courses() {
  return (
    <Section id="courses">
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Courses
      </h2>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        The most important courses I have completed
      </p>
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

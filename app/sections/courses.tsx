import { type CoursesListProps, coursesList } from "../data/courses-data";
import CourseItem from "../components/course-item";

export default function Courses() {
  return (
    <section
      className="pt-40 pb-10 px-10 bg-white dark:bg-black min-h-screen flex flex-col justify-center overflow-hidden ease-in-out duration-500"
      id="courses"
    >
      <h2 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Courses
      </h2>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        The most important courses I have completed
      </p>
      <ul className="flex flex-wrap gap-5 justify-center dark:text-gray-500">
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
    </section>
  );
}

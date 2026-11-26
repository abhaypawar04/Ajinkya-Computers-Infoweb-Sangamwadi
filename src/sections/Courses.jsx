import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="What you can learn"
          title="Explore the technologies shaping tomorrow."
          description="Discover computer studies across programming, enterprise applications and modern web technologies."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

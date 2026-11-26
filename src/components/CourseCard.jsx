import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CourseCard({ course, index }) {
  const Icon = course.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative bg-white border border-ink/10 hover:border-brand-blue transition-all duration-300 hover:shadow-[0_8px_30px_rgba(15,98,254,0.08)] hover:-translate-y-1 p-7 md:p-8 flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-ink-soft tracking-widest">
          {course.number}
        </span>
        <div className="w-10 h-10 flex items-center justify-center bg-light-bg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-ink mb-3 group-hover:text-brand-blue transition-colors duration-300">
        {course.name}
      </h3>

      <p className="text-sm text-ink-soft leading-relaxed mb-6 flex-grow">
        {course.description}
      </p>

      <ul className="flex flex-wrap gap-2 mb-6">
        {course.topics.map((topic) => (
          <li
            key={topic}
            className="text-[11px] font-medium text-ink-soft bg-light-bg px-2.5 py-1 tracking-wide"
          >
            {topic}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue group/link"
      >
        Explore Course
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
      </a>
    </motion.article>
  );
}

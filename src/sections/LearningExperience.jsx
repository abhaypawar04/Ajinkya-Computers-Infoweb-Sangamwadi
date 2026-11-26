import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const stages = [
  {
    num: "01",
    title: "Discover",
    description: "Understand the fundamentals of computer technologies.",
  },
  {
    num: "02",
    title: "Learn",
    description: "Explore programming concepts and technical knowledge.",
  },
  {
    num: "03",
    title: "Practice",
    description: "Apply concepts through practical exercises.",
  },
  {
    num: "04",
    title: "Develop",
    description: "Strengthen problem-solving and technical skills.",
  },
];

export default function LearningExperience() {
  return (
    <section id="learning" className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="How we approach learning"
          title="From fundamentals to practical understanding."
        />

        <div className="mt-16 relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-ink/10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative flex items-center mb-5">
                  <div className="w-16 h-16 flex items-center justify-center bg-white border border-ink/10 font-mono text-sm text-brand-blue relative z-10">
                    {stage.num}
                  </div>
                  <span className="lg:hidden ml-4 h-px flex-1 bg-ink/10" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed max-w-xs">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

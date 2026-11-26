import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { technologies } from "../data/technologies";

export default function Technologies() {
  return (
    <section className="relative py-20 md:py-28 bg-dark-bg overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-dark opacity-80"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(15,98,254,0.18), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Technology Showcase"
          title="Explore the world of technology."
          light
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative bg-dark-bg p-6 md:p-8 flex flex-col justify-between min-h-[130px] hover:bg-white/[0.03] transition-colors duration-300"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-brand-blue transition-colors">
                {tech.category}
              </span>
              <span className="text-lg md:text-xl font-semibold text-white group-hover:text-brand-blue transition-colors">
                {tech.name}
              </span>
              <span className="absolute top-4 right-4 w-1.5 h-1.5 bg-brand-blue/40 rounded-full group-hover:bg-brand-blue transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

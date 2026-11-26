import { motion } from "framer-motion";
import { Code2, Database, Globe } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const highlights = [
  { num: "01", label: "Programming Education", icon: Code2 },
  { num: "02", label: "Enterprise Technologies", icon: Database },
  { num: "03", label: "Web Development", icon: Globe },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="About the Institute"
              title="Technology education designed for a digital world."
              description="Ajinkya Computers Infoweb – Academy for Computer Studies focuses on computer education and technical skill development. Explore programming, enterprise applications and web technologies through structured learning experiences."
            />

            <div className="mt-10 space-y-0 divide-y divide-ink/10 border-t border-ink/10">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.num}
                    className="flex items-center gap-5 py-5 group"
                  >
                    <span className="font-mono text-xs text-ink-soft tracking-widest">
                      {h.num}
                    </span>
                    <Icon
                      className="w-5 h-5 text-brand-blue flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-base font-medium text-ink group-hover:text-brand-blue transition-colors">
                      {h.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right – abstract visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
            aria-hidden="true"
          >
            {/* <div className="relative bg-light-bg border border-ink/10 p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="relative grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square border border-ink/10 flex items-center justify-center ${
                      i === 4 ? "bg-brand-blue text-white" : "bg-white"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs ${i === 4 ? "text-white" : "text-ink/30"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-6 flex items-center justify-between text-xs font-mono text-ink-soft">
                <span>LEARNING_PATH</span>
                <span className="text-brand-blue">● ACTIVE</span>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

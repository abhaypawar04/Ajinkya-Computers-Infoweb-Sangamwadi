import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border-t border-ink/10 pt-8"
    >
      <div className="w-11 h-11 flex items-center justify-center bg-light-bg text-brand-blue mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
      <p className="text-sm text-ink-soft leading-relaxed">{description}</p>
    </motion.div>
  );
}

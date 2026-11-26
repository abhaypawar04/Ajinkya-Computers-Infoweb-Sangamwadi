import { Compass, Layers, Cpu, Lightbulb } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    icon: Compass,
    title: "Practical Learning",
    description:
      "Focus on understanding technical concepts through hands-on practice.",
  },
  {
    icon: Layers,
    title: "Structured Education",
    description: "Learn computer subjects through organized learning paths.",
  },
  {
    icon: Cpu,
    title: "Technology Exposure",
    description:
      "Explore programming languages, enterprise systems and web technologies.",
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    description: "Build technical knowledge and problem-solving abilities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Why Ajinkya Computers Infoweb"
          title="More than learning concepts. Building technical confidence."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

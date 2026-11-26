// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowRight, Sparkles } from "lucide-react";
// import Button from "../components/Button";

// const codeLines = [
//   { text: "const future = ", color: "text-white/80", kw: true },
//   { text: '"built with skills"', color: "text-brand-blue", kw: false },
//   { text: ";", color: "text-white/60" },
// ];

// export default function Hero() {
//   const reduce = useReducedMotion();

//   const container = {
//     hidden: {},
//     show: {
//       transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
//     },
//   };
//   const item = {
//     hidden: { opacity: 0, y: reduce ? 0 : 24 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
//   };

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-light-bg pt-28 md:pt-36 pb-20 md:pb-28"
//     >
//       {/* Background grid */}
//       <div
//         className="absolute inset-0 bg-grid opacity-60 pointer-events-none"
//         aria-hidden="true"
//       />

//       {/* Gradient wash */}
//       <div
//         className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(15,98,254,0.12), transparent 70%)",
//         }}
//         aria-hidden="true"
//       />

//       <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
//         {/* Left column */}
//         <motion.div variants={container} initial="hidden" animate="show">
//           <motion.p
//             variants={item}
//             className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-brand-blue mb-6 flex items-center gap-2"
//           >
//             <span className="w-6 h-px bg-brand-blue inline-block" />
//             Ajinkya Computers Infoweb | Academy for Computer Studies
//           </motion.p>

//           <motion.h1
//             variants={item}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink"
//           >
//             Build the skills.
//             <br />
//             <span className="text-brand-blue">Shape the future</span>
//             <br />
//             of technology.
//           </motion.h1>

//           <motion.p
//             variants={item}
//             className="mt-7 text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl"
//           >
//             Explore the world of programming, enterprise technologies and modern
//             web development through structured computer education and practical
//             learning.
//           </motion.p>

//           <motion.div
//             variants={item}
//             className="mt-9 flex flex-col sm:flex-row gap-3"
//           >
//             <Button href="#courses" showArrow className="group">
//               Explore Courses
//             </Button>
//             <Button href="#contact" variant="secondary">
//               Contact Us
//             </Button>
//           </motion.div>

//           <motion.p
//             variants={item}
//             className="mt-10 text-sm font-mono tracking-[0.25em] uppercase text-ink-soft"
//           >
//             Learn. Practice. Build. Grow.
//           </motion.p>
//         </motion.div>

//         {/* Right column – illustration */}
//         <motion.div
//           initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
//           className="relative hidden md:block"
//           aria-hidden="true"
//         >
//           <div className="relative aspect-square max-w-lg mx-auto">
//             {/* Center node */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-32 h-32 rounded-full border border-brand-blue/20 flex items-center justify-center">
//                 <div className="w-20 h-20 rounded-full border border-brand-blue/40 flex items-center justify-center">
//                   <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
//                     <Sparkles
//                       className="w-5 h-5 text-brand-blue"
//                       strokeWidth={1.5}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Rotating orbits */}
//             <div className="absolute inset-0 animate-float-slow">
//               <svg viewBox="0 0 400 400" className="w-full h-full">
//                 <circle
//                   cx="200"
//                   cy="200"
//                   r="150"
//                   fill="none"
//                   stroke="rgba(15,98,254,0.15)"
//                   strokeWidth="1"
//                   strokeDasharray="4 8"
//                 />
//                 <circle
//                   cx="200"
//                   cy="200"
//                   r="100"
//                   fill="none"
//                   stroke="rgba(15,98,254,0.2)"
//                   strokeWidth="1"
//                 />
//               </svg>
//             </div>

//             {/* Node dots */}
//             {[
//               { top: "10%", left: "50%", label: "Python" },
//               { top: "30%", left: "88%", label: "SAP" },
//               { top: "78%", left: "82%", label: "React" },
//               { top: "88%", left: "30%", label: "C++" },
//               { top: "40%", left: "8%", label: "JS" },
//             ].map((node, i) => (
//               <div
//                 key={node.label}
//                 className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
//                 style={{
//                   top: node.top,
//                   left: node.left,
//                   animationDelay: `${i * 0.8}s`,
//                 }}
//               >
//                 <div className="flex items-center gap-1.5 bg-white border border-ink/10 shadow-sm px-2.5 py-1.5">
//                   <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
//                   <span className="font-mono text-[10px] text-ink tracking-wide">
//                     {node.label}
//                   </span>
//                 </div>
//               </div>
//             ))}

//             {/* Code editor card */}
//             <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-dark-bg shadow-xl w-64 p-3.5">
//               <div className="flex items-center gap-1.5 mb-2.5">
//                 <span className="w-2 h-2 rounded-full bg-white/20" />
//                 <span className="w-2 h-2 rounded-full bg-white/20" />
//                 <span className="w-2 h-2 rounded-full bg-brand-blue" />
//                 <span className="ml-auto font-mono text-[9px] text-white/40">
//                   main.js
//                 </span>
//               </div>
//               <div className="font-mono text-[11px] leading-relaxed">
//                 <div className="flex gap-2">
//                   <span className="text-white/30 select-none">1</span>
//                   <span>
//                     <span className="text-[#7DD3FC]">const</span>{" "}
//                     <span className="text-white/80">future</span>{" "}
//                     <span className="text-white/50">=</span>{" "}
//                     <span className="text-[#86EFAC]">"skills"</span>
//                     <span className="text-white/50">;</span>
//                   </span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span className="text-white/30 select-none">2</span>
//                   <span>
//                     <span className="text-[#7DD3FC]">build</span>
//                     <span className="text-white/50">(</span>
//                     <span className="text-white/80">future</span>
//                     <span className="text-white/50">);</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// -------------------------------------------//

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "../components/Button";

const nodes = [
  {
    top: "10%",
    left: "50%",
    label: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    top: "30%",
    left: "88%",
    label: "SAP",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/960px-SAP_2011_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20251019084649",
  },
  {
    top: "78%",
    left: "82%",
    label: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    top: "40%",
    left: "8%",
    label: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-light-bg pt-28 md:pt-36 pb-20 md:pb-28"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient wash */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(15,98,254,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-brand-blue mb-6 flex items-center gap-2"
          >
            <span className="w-6 h-px bg-brand-blue inline-block" />
            Ajinkya Computers Infoweb | Academy for Computer Studies
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink"
          >
            Build the skills.
            <br />
            <span className="text-brand-blue">Shape the future</span>
            <br />
            of technology.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl"
          >
            Explore the world of programming, enterprise technologies and modern
            web development through structured computer education and practical
            learning.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <Button href="#courses" showArrow className="group">
              Explore Courses
            </Button>

            <Button href="#contact" variant="secondary">
              Contact Us
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 text-sm font-mono tracking-[0.25em] uppercase text-ink-soft"
          >
            Learn. Practice. Build. Grow.
          </motion.p>
        </motion.div>

        {/* RIGHT COLUMN - TECHNOLOGY ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative hidden md:block"
          aria-hidden="true"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* CENTRAL TECHNOLOGY NODE */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border border-brand-blue/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-brand-blue/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Sparkles
                      className="w-7 h-7 text-brand-blue"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ROTATING ORBITS */}
            <div className="absolute inset-0 animate-float-slow">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="rgba(15,98,254,0.15)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />

                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="rgba(15,98,254,0.2)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* TECHNOLOGY LOGO CARDS */}
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{
                  opacity: 0,
                  scale: reduce ? 1 : 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: reduce ? 0 : 0.5 + i * 0.15,
                  duration: reduce ? 0 : 0.5,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{
                  top: node.top,
                  left: node.left,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: reduce ? "0s" : undefined,
                }}
              >
                <div className="group flex flex-col items-center justify-center gap-2 bg-white border border-ink/10 shadow-lg px-4 py-3 min-w-[100px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-blue/40">
                  {/* TECHNOLOGY IMAGE */}
                  <div className="w-11 h-11 flex items-center justify-center">
                    <img
                      src={node.image}
                      alt={`${node.label} logo`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>

                  {/* TECHNOLOGY NAME */}
                  <span className="font-mono text-[10px] font-medium text-ink tracking-wide">
                    {node.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* CODE EDITOR CARD */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-dark-bg shadow-xl w-64 p-3.5 z-10">
              {/* EDITOR HEADER */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-brand-blue" />

                <span className="ml-auto font-mono text-[9px] text-white/40">
                  main.js
                </span>
              </div>

              {/* CODE CONTENT */}
              <div className="font-mono text-[11px] leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-white/30 select-none">1</span>

                  <span>
                    <span className="text-[#7DD3FC]">const</span>{" "}
                    <span className="text-white/80">future</span>{" "}
                    <span className="text-white/50">=</span>{" "}
                    <span className="text-[#86EFAC]">"skills"</span>
                    <span className="text-white/50">;</span>
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-white/30 select-none">2</span>

                  <span>
                    <span className="text-[#7DD3FC]">build</span>
                    <span className="text-white/50">(</span>
                    <span className="text-white/80">future</span>
                    <span className="text-white/50">);</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

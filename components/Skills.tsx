"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const legalSkills = [
  { name: "Criminal Defense", level: 98 },
  { name: "Trial Advocacy", level: 95 },
  { name: "Evidence Analysis", level: 97 },
  { name: "Constitutional Law", level: 90 },
  { name: "Civil Rights", level: 88 },
  { name: "Appeals & Post-Trial", level: 85 },
];

const combatSkills = [
  { name: "Hand-to-Hand Combat", level: 96 },
  { name: "Radar Sense", level: 100 },
  { name: "Acrobatics", level: 94 },
  { name: "Billy Club Mastery", level: 93 },
  { name: "Stealth & Infiltration", level: 91 },
  { name: "Enhanced Perception", level: 99 },
];

const tools = [
  "New York Bar", "Westlaw", "LexisNexis", "Billy Club",
  "Radar Sense", "Sonar Echo", "Heightened Touch", "Lie Detection",
  "Muay Thai", "Ninjutsu", "Capoeira", "Parkour",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs text-devil-silver tracking-wider">{name}</span>
        <span className="font-mono text-xs text-devil-red">{level}%</span>
      </div>
      <div className="h-px  relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-devil-blood via-devil-red to-devil-red/80 relative"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-devil-red shadow-[0_0_6px_#CC0000]" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-32 bg-devil-dark relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-devil-red/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-devil-red/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-12 h-px bg-devil-red" />
          <span className="font-mono text-devil-red text-xs tracking-[0.4em]">02. CAPABILITIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl text-white tracking-wider mb-16"
        >
          WHAT I <span className="text-devil-red">BRING</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="border-glow p-8 bg-devil-smoke/30"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded border border-devil-red/50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-devil-red stroke-[1.5]">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-white tracking-wider">LEGAL ARSENAL</h3>
            </div>
            <div className="space-y-5">
              {legalSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={0.3 + i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Combat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="border-glow p-8 bg-devil-smoke/30"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded border border-devil-red/50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-devil-red stroke-[1.5]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-white tracking-wider">COMBAT MASTERY</h3>
            </div>
            <div className="space-y-5">
              {combatSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={0.4 + i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools / Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="font-mono text-xs text-devil-fog tracking-[0.3em] mb-6">TOOLS & DISCIPLINES</div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.05 * i + 0.7 }}
                whileHover={{ borderColor: "#CC0000", color: "#CC0000" }}
                className="font-mono text-xs text-devil-fog tracking-wider px-4 py-2 border border-devil-ash cursor-default transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { year: "1985", event: "Born in Hell's Kitchen, New York", detail: "Son of boxer 'Battlin' Jack Murdock." },
  { year: "1997", event: "Blinded by radioactive chemicals", detail: "Saving a pedestrian; enhanced remaining senses beyond human limits." },
  { year: "2003", event: "Trained under Stick", detail: "Mastered martial arts under the enigmatic mentor." },
  { year: "2009", event: "Columbia Law School — J.D.", detail: "Graduated top of class. Passed the New York Bar." },
  { year: "2010", event: "Founded Nelson & Murdock", detail: "Opened firm in Hell's Kitchen with Foggy Nelson." },
  { year: "2012", event: "Became Daredevil", detail: "Took to the streets in a black mask to protect the neighborhood." },
  { year: "2015", event: "First confrontation with Kingpin", detail: "Took down Wilson Fisk's criminal empire." },
  { year: "2023", event: "Reinstated. Active.", detail: "New York's Devil is back. Clients welcome." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-devil-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-devil-crimson/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-12 h-px bg-devil-red" />
          <span className="font-mono text-devil-red text-xs tracking-[0.4em]">01. ORIGIN STORY</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-6xl text-white tracking-wider mb-8"
            >
              THE MAN
              <br />
              <span className="text-devil-red glow-red">WITHOUT FEAR</span>
            </motion.h2>

            {[
              "Matthew Michael Murdock lost his sight at age twelve in a chemical accident. But instead of darkness, he gained something extraordinary — a radar sense that paints the world in sound, smell, and heartbeat.",
              "By day, I practice law at Murdock & Associates in Hell's Kitchen, fighting for the people who can't afford justice. I believe every person deserves a fierce defender — inside the courtroom and out.",
              "By night, I ensure the law's blind spots don't become opportunities for those who prey on the innocent. I've faced crime lords, ninjas, assassins, and demigods. Hell's Kitchen is still standing.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="font-body text-lg text-devil-fog leading-relaxed mb-5"
              >
                {para}
              </motion.p>
            ))}

            {/* Attributes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 gap-4 mt-10"
            >
              {[
                { label: "LOCATION", value: "Hell's Kitchen, NY" },
                { label: "SPECIALTY", value: "Criminal Defense" },
                { label: "STATUS", value: "Active (Both Roles)" },
                { label: "AVAILABILITY", value: "By Appointment" },
              ].map((attr) => (
                <div key={attr.label} className="border-l-2 border-devil-red/40 pl-4">
                  <div className="font-mono text-[10px] text-devil-red tracking-wider mb-1">{attr.label}</div>
                  <div className="font-body text-devil-silver text-sm">{attr.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div>
            <div className="relative">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ originY: 0 }}
                className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-devil-red via-devil-crimson/50 to-transparent"
              />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
                    className="flex gap-6 relative group"
                  >
                    {/* Year */}
                    <div className="w-12 flex-shrink-0 text-right">
                      <span className="font-mono text-xs text-devil-red tracking-wider">{item.year}</span>
                    </div>
                    {/* Dot */}
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-devil-red mt-1.5 relative z-10 group-hover:shadow-[0_0_10px_#CC0000] transition-shadow" />
                    {/* Content */}
                    <div className="pb-2">
                      <div className="font-body text-white font-semibold text-base mb-0.5">{item.event}</div>
                      <div className="font-body text-devil-fog text-sm italic">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

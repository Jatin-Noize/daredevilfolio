"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    id: "001",
    title: "People v. Fisk",
    type: "CRIMINAL DEFENSE",
    year: "2015",
    outcome: "CONVICTION",
    description:
      "Dismantled Wilson Fisk's criminal empire using a combination of courtroom evidence and nocturnal evidence gathering. Exposed corruption reaching the NYPD and City Hall.",
    tags: ["RICO", "Corruption", "High-Profile"],
    status: "closed",
  },
  {
    id: "002",
    title: "Natchios Probate",
    type: "CIVIL LITIGATION",
    year: "2016",
    outcome: "SETTLED",
    description:
      "Complex multinational estate dispute involving criminal organization assets. Required both legal expertise and off-the-books recovery of stolen documents.",
    tags: ["International", "Estate", "Asset Recovery"],
    status: "closed",
  },
  {
    id: "003",
    title: "The Punisher Trial",
    type: "CRIMINAL DEFENSE",
    year: "2016",
    outcome: "ACQUITTED",
    description:
      "Defended Frank Castle in a high-stakes murder trial. Argued diminished capacity following military trauma. Controversial, successful, and deeply personal.",
    tags: ["Murder Defense", "Military", "Media"],
    status: "closed",
  },
  {
    id: "004",
    title: "Elektra v. Roxxon Corp",
    type: "CLASS ACTION",
    year: "2018",
    outcome: "SETTLED",
    description:
      "Environmental and corporate negligence case against a major energy conglomerate with ties to organized crime. $40M settlement for Hell's Kitchen residents.",
    tags: ["Environmental", "Corporate", "Class Action"],
    status: "closed",
  },
  {
    id: "005",
    title: "The Fogwell Gym Inheritance",
    type: "PROBATE LAW",
    year: "2022",
    outcome: "WON",
    description:
      "Pro bono case to preserve a piece of Hell's Kitchen history. Successfully contested fraudulent property liens and restored rightful ownership.",
    tags: ["Pro Bono", "Property", "Heritage"],
    status: "closed",
  },
  {
    id: "006",
    title: "[REDACTED] v. The Hand",
    type: "CLASSIFIED",
    year: "2023",
    outcome: "ONGOING",
    description:
      "Details classified at client request. Involves international criminal syndicate, ancient artifacts, and significant property damage across lower Manhattan.",
    tags: ["Classified", "International", "Active"],
    status: "active",
  },
];

export default function Cases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cases"
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden bg-black"
    >
      {/* BACKGROUND IMAGE FIRST */}
      <motion.div
        initial={{
          scale: 1.2,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/dd3.avif')",
            backgroundPosition: "center",
          }}
        />

        {/* cinematic dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* red cinematic glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(204,0,0,0.12) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* SIDE LINE */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute right-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-transparent via-devil-red/20 to-transparent"
      />

      {/* CONTENT APPEARS AFTER IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          delay: 0.7,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-devil-red" />

          <span className="font-mono text-devil-red text-xs tracking-[0.4em]">
            03. CASE FILES
          </span>
        </motion.div>

        {/* TITLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="font-display text-[clamp(3rem,7vw,6rem)] text-white tracking-wider"
          >
            NOTABLE{" "}
            <span className="text-devil-red glow-red">
              CASES
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="font-body text-devil-fog italic max-w-xs text-right"
          >
            Selected from 847 cases. Some details omitted to protect clients.
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: i * 0.12 + 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`
            relative
            overflow-hidden
            border
            backdrop-blur-md
            bg-black/35
            p-7
            group
            transition-all
            duration-500
            rounded-2xl
            ${c.status === "active"
                  ? "border-devil-red/60 shadow-[0_0_30px_rgba(204,0,0,0.2)]"
                  : "border-devil-ash hover:border-devil-red/50"
                }
          `}
            >
              {/* animated red glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-devil-red/10 blur-[100px]"
              />

              {/* HEADER */}
              <div className="relative z-10 flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] text-devil-fog tracking-wider">
                  CASE #{c.id}
                </span>

                <div className="flex items-center gap-1.5">
                  {c.status === "active" && (
                    <motion.span
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-devil-red"
                    />
                  )}

                  <span
                    className={`font-mono text-[10px] tracking-wider
                  ${c.outcome === "ONGOING"
                        ? "text-devil-red"
                        : c.outcome === "WON" ||
                          c.outcome === "ACQUITTED" ||
                          c.outcome === "SETTLED"
                          ? "text-green-500/70"
                          : "text-devil-fog"
                      }
                `}
                  >
                    {c.outcome}
                  </span>
                </div>
              </div>

              {/* TYPE */}
              <div className="relative z-10 font-mono text-[10px] text-devil-red tracking-wider mb-2">
                {c.type}
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 font-display text-2xl text-white tracking-wider mb-1 group-hover:text-devil-red transition-colors duration-300">
                {c.title}
              </h3>

              <div className="relative z-10 font-mono text-[10px] text-devil-fog mb-4">
                {c.year}
              </div>

              {/* DIVIDER */}
              <div className="relative z-10 w-full h-px bg-devil-ash mb-4 group-hover:bg-devil-red/30 transition-colors duration-300" />

              {/* DESCRIPTION */}
              <p className="relative z-10 font-body text-devil-fog text-sm leading-relaxed mb-5">
                {c.description}
              </p>

              {/* TAGS */}
              <div className="relative z-10 flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <motion.span
                    whileHover={{
                      scale: 1.08,
                      borderColor: "#CC0000",
                    }}
                    key={tag}
                    className="font-mono text-[9px] text-devil-fog tracking-wider px-2 py-0.5 border border-devil-ash/50"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* HOVER LIGHT */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(204,0,0,0.08) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

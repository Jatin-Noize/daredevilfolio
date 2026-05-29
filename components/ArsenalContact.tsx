"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Arsenal items removed; using image gallery instead.

export function Arsenal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="arsenal"
      ref={ref}
      className="relative bg-devil-dark scroll-smooth"
    >
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-devil-red/30 to-transparent" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-devil-red" />

          <span className="font-mono text-devil-red text-xs tracking-[0.4em]">
            04. THE ARSENAL
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-[clamp(3rem,7vw,6rem)] text-white tracking-wider"
        >
          TOOLS OF <span className="text-devil-red">JUSTICE</span>
        </motion.h2>
      </div>

      {/* STACKED IMAGES */}
      <div className="relative">

        {[
          "/ddf.jpg",
          "/ddf1.webp",
          "/ddf2.jpg",
          "/ddf3.webp",
          "/ddf4.webp",
          "/ddf5.jpg",
          "/ddf6.jpg",
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 180,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.45,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
          sticky
          top-0
          h-screen
          flex
          items-center
          justify-center
          overflow-hidden
        "
            style={{
              zIndex: i + 1,
            }}
          >
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"
            />

            {/* IMAGE */}
            <motion.img
              src={img}
              alt={`arsenal-${i}`}
              initial={{
                scale: 1.12,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                duration: 1.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="
            relative z-20
            w-[72vw]
            h-[72vh]
            object-cover
            rounded-2xl
            border
            border-devil-red/20
            shadow-[0_0_80px_rgba(204,0,0,0.15)]
          "
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            />

            {/* RED GLOW */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[400px] h-[400px] rounded-full bg-devil-red/10 blur-[120px]" />
            </div>

            {/* TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="absolute bottom-20 left-16 z-30"
            >
              <div className="font-display text-[clamp(2rem,4vw,4rem)] text-white tracking-[0.2em]">
                {[
                  "BATONS",
                  "MASK",
                  "ARMOR",
                  "THE DEVIL",
                  "VIGILANTE",
                  "SHADOWS",
                  "HELL'S KITCHEN",
                ][i]}
              </div>

              <div className="font-mono text-devil-red tracking-[0.3em] text-xs mt-2">
                HELL'S KITCHEN ARSENAL
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background Image First */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/dd1.jpg')",
          willChange: "transform",
        }}
      />

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute inset-0 bg-black"
      />

      {/* Red Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-devil-red/10 blur-[120px]" />
      </motion.div>

      {/* CONTENT COMES AFTER IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: 1,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Heading Top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-devil-red" />
          <span className="font-mono text-devil-red text-xs tracking-[0.4em]">
            05. CONTACT
          </span>
          <div className="w-12 h-px bg-devil-red" />
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display text-[clamp(3rem,8vw,6rem)] text-white tracking-wider leading-none mb-6"
        >
          NEED A
          <br />
          <span className="text-devil-red glow-red">
            DEFENDER?
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 1 }}
          className="font-body text-xl text-devil-fog leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Whether you need legal representation or something that operates
          outside normal office hours — I answer calls from Hell's Kitchen.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              label: "OFFICE",
              value: "370 West 43rd Street",
              sub: "Hell's Kitchen, NY 10036",
            },
            {
              label: "PHONE",
              value: "(212) 555-0147",
              sub: "Mon–Fri 9AM–6PM",
            },
            {
              label: "EMERGENCY",
              value: "Rooftop Signal",
              sub: "Red, horn-shaped",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.8 + i * 0.2,
                duration: 0.8,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="border-glow p-6 text-center backdrop-blur-sm bg-black/20"
            >
              <div className="font-mono text-[10px] text-devil-red tracking-[0.3em] mb-3">
                {item.label}
              </div>

              <div className="font-body text-white text-base mb-1">
                {item.value}
              </div>

              <div className="font-body text-devil-fog text-sm italic">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(204,0,0,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:matt@murdocklaw.com"
            className="font-mono text-sm tracking-[0.2em] px-10 py-4 bg-devil-red text-white relative overflow-hidden"
          >
            SCHEDULE CONSULTATION
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
              borderColor: "#CC0000",
            }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="font-mono text-sm tracking-[0.2em] px-10 py-4 border border-devil-red/50 text-devil-fog hover:text-white transition-all duration-300"
          >
            DOWNLOAD RESUME
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 1 }}
        className="relative z-10 mt-32 border-t border-devil-ash/50 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="font-mono text-[10px] text-devil-fog tracking-wider">
          © 2024 MURDOCK & ASSOCIATES — ALL RIGHTS RESERVED
        </div>

        <div className="font-mono text-[10px] text-devil-fog tracking-wider">
          HELL'S KITCHEN'S FINEST · NYBA · MARVEL NYC
        </div>

        <div className="font-body text-xs text-devil-fog italic">
          "Justice is blind. I am not."
        </div>
      </motion.div>
    </section>
  );
}

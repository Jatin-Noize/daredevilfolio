"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Cases from "@/components/Cases";
import { Arsenal, Contact } from "@/components/ArsenalContact";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden scan-line bg-cover bg-no-repeat"
    >
      {/* Splash logo overlay */}
      {showLogo && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
          onAnimationComplete={() => setShowLogo(false)}
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
          <img src="/ddlogo.jpg" alt="Logo" className="w-48 h-48 rounded-full border border-white  object-contain" />
        </motion.div>
      )}

      {/* Directional gradient overlays for full-page readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
      {/* Content wrapper to keep components above overlays */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Cases />
        <Arsenal />
        <Contact />
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Rain particles
    const drops: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 3 + Math.random() * 5,
        length: 15 + Math.random() * 30,
        opacity: 0.05 + Math.random() * 0.15,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach((drop) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(180, 0, 0, ${drop.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 2, drop.y + drop.length);
        ctx.stroke();
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <motion.section
      className="relative min-h-screen flex items-center overflow-hidden"
    >

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/ddhome.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90% 1%",
          willChange: "transform",
        }}
      />
      {/* Cinematic fade overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0 bg-black z-50 pointer-events-none"
      />

      {/* Animated background zoom */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/ddhome.jpg')",
          backgroundPosition: "90% 1%",
        }}
      />

      {/* Directional gradient overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"
      />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
      >
        <div
          className="font-display text-[20vw] text-white/[0.02] tracking-[0.3em] whitespace-nowrap"
          style={{ WebkitTextStroke: "1px rgba(204,0,0,0.08)" }}
        >
          DAREDEVIL
        </div>
      </motion.div>

      {/* Red Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-devil-crimson/20 to-transparent pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="font-mono text-devil-red text-xs tracking-[0.4em] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-devil-red" />
              HELL'S KITCHEN, NEW YORK
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 rounded-full bg-devil-red"
              />
            </motion.div>

            {/* MATT */}
            <motion.h1
              initial={{ opacity: 0, y: 120, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 1.7,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(4rem,10vw,8rem)] leading-none tracking-wider text-white mb-2"
            >
              MATT
            </motion.h1>

            {/* MURDOCK */}
            <motion.h1
              initial={{ opacity: 0, y: 120, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 1.9,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(4rem,10vw,8rem)] leading-none tracking-wider glow-red text-devil-red mb-8"
            >
              MURDOCK
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.1, duration: 1 }}
              style={{ originX: 0 }}
              className="w-full h-px bg-gradient-to-r from-devil-red via-devil-crimson to-transparent mb-8"
            />

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 1 }}
              className="font-body text-xl text-devil-fog leading-relaxed max-w-lg mb-10"
            >
              Blind attorney by day. Protector of Hell's Kitchen by night.
              I fight for justice with every sense I possess —
              and a few that defy explanation.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#cases"
                className="font-mono text-sm tracking-[0.2em] px-8 py-4 bg-devil-red text-white hover:bg-devil-crimson transition-all duration-300 relative group overflow-hidden"
              >
                VIEW CASES
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "#CC0000",
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="font-mono text-sm tracking-[0.2em] px-8 py-4 border border-devil-red/50 text-devil-fog hover:text-white transition-all duration-300"
              >
                CONTACT
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT SIDE LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 1.8,
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative w-80 h-80"
            >
              {/* rotating rings etc */}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-devil-fog tracking-[0.3em]">
            SCROLL
          </span>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-px h-8 bg-gradient-to-b from-devil-red to-transparent"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

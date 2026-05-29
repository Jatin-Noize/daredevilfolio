import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        devil: {
          red: "#CC0000",
          crimson: "#8B0000",
          blood: "#5C0000",
          dark: "#0A0A0A",
          noir: "#111111",
          smoke: "#1A1A1A",
          ash: "#2A2A2A",
          fog: "#888888",
          silver: "#CCCCCC",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body: ["'Crimson Text'", "serif"],
        mono: ["'Courier Prime'", "monospace"],
      },
      animation: {
        "pulse-red": "pulse-red 2s ease-in-out infinite",
        "flicker": "flicker 3s linear infinite",
        "scan": "scan 4s linear infinite",
      },
      keyframes: {
        "pulse-red": {
          "0%, 100%": { boxShadow: "0 0 20px #CC0000, 0 0 40px #8B000066" },
          "50%": { boxShadow: "0 0 40px #CC0000, 0 0 80px #CC000066" },
        },
        "flicker": {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.8" },
          "97%": { opacity: "1" },
          "98%": { opacity: "0.6" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

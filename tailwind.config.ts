import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        apricot: {
          50:  "#fff9f6",
          100: "#fde8dc",
          200: "#f9b89a",
          300: "#f4845f",
          400: "#f06040",
          500: "#d4614a",
        },
      },
      animation: {
        blob: "blob 8s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        marquee: "marquee 18s linear infinite",
        "fade-up": "fadeUp .6s ease both",
      },
      keyframes: {
        blob: {
          "0%,100%": { borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" },
          "33%": { borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%" },
          "66%": { borderRadius: "70% 30% 50% 50% / 40% 70% 30% 60%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

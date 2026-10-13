import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        philosopher: ["var(--font-philosopher)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        amberaccent: "#e59b34",
        amberwarm: "#d97706",
        champagne: "#f3e6d3",
        goldtone: "#b58a57",
        earth: {
          800: "#4a3522",
          900: "#2c1e14",
        },
      },
      keyframes: {
        subtleJump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "badge-jump": "subtleJump 1.8s infinite ease-in-out",
      },
    },
  },
  plugins: [forms],
};
export default config;

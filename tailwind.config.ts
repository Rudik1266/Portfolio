import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#EC612C",
          green: "#90EE90",
          blue: "#89CFF0",
          dark: "#000000",
          surface: "#0c0c0e",
          card: "#121216",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        bamboly: ['"Bamboly Demo"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      keyframes: {
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "marquee-scroll": "marquee-scroll 18s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

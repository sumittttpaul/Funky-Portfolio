import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/interface/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-color": "#000814",
        "loading-yellow": "#ffa500",
        "loading-red": "#ff4500",
        "dot-black": "#111111",
        "dot-white": "#ebecf3",
        "sales-badge": "#91020090",
        "tech-badge": "#b48a0090",
        "coding-badge": "#b48a0090",
        "marketing-badge": "#0063b490",
        "about-pink": "#8b0048",
        "about-purple": "#30005c",
        "dark-red": "#4B0000", // rgba(75, 0, 0, 1)
        "dark-pink": "#45004B", // rgba(69, 0, 75, 1)
        "dark-blue": "#003C4B", // rgba(0, 60, 75, 1)
        "dark-yellow": "#464B00", // rgba(70, 75, 0, 1)
        "dark-green": "#004B0C", // rgba(0, 75, 12, 1)
        "dark-purple": "#320161", // rgba(50, 1, 97, 1)
        "dark-orange": "#613B01", // rgba(97, 59, 1, 1)
        "super-dark-red": "#300000", // rgba(48, 0, 0, 1)
        "super-dark-pink": "#26002B", // rgba(38, 0, 43, 1)
        "super-dark-blue": "#002933", // rgba(0, 41, 51, 1)
        "super-dark-yellow": "#252900", // rgba(37, 41, 0, 1)
        "super-dark-green": "#003008", // rgba(0, 48, 8, 1)
        "super-dark-purple": "#1F003B", // rgba(31, 0, 59, 1)
        "super-dark-orange": "#362100", // rgba(54, 33, 0, 1)
      },
      screens: {
        "dot-xl": "1350px",
        "max-xl": "1500px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

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
        primary: "#1E40AF", // Un bleu par ex.
        secondary: "#F59E0B", // Un orange par ex.
        dark: "#111827",
        light: "#F9FAFB",
        global: "#0a1b3b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        Poppin: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

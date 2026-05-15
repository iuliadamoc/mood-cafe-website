import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#2b1711",
        crema: "#f4ead8",
        oat: "#d7c0a0",
        cocoa: "#6d4735",
        roast: "#140d0a",
        caramel: "#bd875b",
        smoke: "#0b0908"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(189, 135, 91, 0.2)",
        glass: "0 20px 70px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;

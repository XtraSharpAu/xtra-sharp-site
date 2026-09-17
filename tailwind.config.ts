import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        surface: "#161616",
        text: "#F5F5F5",
        metallic: "#C0C0C0",
        accent: "#E5E5E5",
        ctaRed: "#C4141C",
      },
    },
  },
};

export default config;

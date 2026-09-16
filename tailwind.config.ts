import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F7F7",
        text: "#1A1A1A",
        metallic: "#C0C0C0",
        ausBlue: "#0033A0",
        ctaRed: "#B00000",
      },
    },
  },
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F7F7F7",
        text: "#1A1A1A",
        metallic: "#C0C0C0",
        accent: "#C00000",
        ctaRed: "#C00000",
      },
    },
  },
};

export default config;

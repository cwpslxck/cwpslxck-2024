import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      animation: {
        scroll: 'scroll 40s ease-in-out infinite', // اسکرول به چپ
        scrollrev: 'scrollrev 40s ease-in-out infinite', // اسکرول به راست
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(-80%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-80%)' },
        },
        scrollrev: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-80%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        darkBase: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#252525",
        },
        darkTwo: "#323539",
        goldPoppy: {
          50: "#fffee7",
          100: "#fffdc1",
          200: "#fff786",
          300: "#ffeb41",
          400: "#ffda0d",
          500: "#f2c000",
          600: "#d19400",
          700: "#a66902",
          800: "#89520a",
          900: "#74430f",
          950: "#442204",
        },
      },
    },
  },
  plugins: [],
};
export default config;

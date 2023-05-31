const theme = require("./src/config/tailwind.theme.js");
const variants = require("./src/config/tailwind.variants.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: theme,
  variants: variants,
  plugins: [],
};

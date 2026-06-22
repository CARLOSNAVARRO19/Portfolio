/** @type {import('tailwindcss').Config} */

import lineClamp from "@tailwindcss/line-clamp";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        border: "var(--border)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [lineClamp],
};
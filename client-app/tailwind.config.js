/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-base": "#181818",
        "dark-secondary": "#252525",
        "dark-tertiary": "#1f1f1f",
        "light-secondary" : "#E5E7EB",
        "light-tertiary" : "#F9F9F9",
        "off-white": "#dddddd",
      },
    },
  },
  plugins: [],
};

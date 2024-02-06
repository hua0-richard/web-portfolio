/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-base": "#181818",
        "dark-secondary": "#252525",
        "dark-tertiary" : "#1f1f1f",
        "dark-accent" : "#dd9933",
        "off-white": "#dddddd",
      },
    },
  },
  plugins: [],
};

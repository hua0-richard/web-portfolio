/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-base": "#181818",
        "dark-secondary": "#252525",
        "off-white": "#dddddd",
      },
    },
  },
  plugins: [],
};

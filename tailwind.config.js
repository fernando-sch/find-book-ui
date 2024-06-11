/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        evergreen: "#2b4341",
        "evergreen-light": "#2aa78d",
        whiteish: "#f4faff",
      },
    },
  },
  plugins: [],
};

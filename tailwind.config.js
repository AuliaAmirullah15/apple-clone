/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        5: "1.25rem",
      },
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
          400: "#e8e8edb3",
          500: "#1d1d1f",
        },
        fadedwhite: {
          DEFAULT: "#c4c4cc",
          100: "#f5f5f7",
          200: "#c8c2bd",
        },
        purple: "#28337D",
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};

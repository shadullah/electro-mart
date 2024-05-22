/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slowMove: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(50px)" },
        },
      },
      animation: {
        slowMove: "slowMove 7s infinite linear",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-events":
          "linear-gradient(225deg, rgba(1, 30, 135, 0.11) 0%, rgba(89, 104, 239, 0.40) 100%)",
      },
      colors: {
        primarybg: "#030214",
      },
      screens: {
        ml: "425px", //Stands for Mobile Large
      },
      animation: {
        infiniteScroll: "scroll 40s linear infinite",
        infiniteScrollReverse: "scrollReverse 40s linear infinite",
        infiniteScrollMobile: "scrollMobile 40s linear infinite",
        infiniteScrollReverseMobile: "scrollReverseMobile 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-400px * var(--leftLength)))" },
        },
        scrollMobile: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-400px * var(--leftLength)))" },
        },
        scrollReverse: {
          "100%": { transform: "translateY(0)" },
          "0%": { transform: "translateY(calc(-400px * var(--rightLength)))" },
        },
        scrollReverseMobile: {
          "100%": { transform: "translateX(0)" },
          "0%": { transform: "translateX(calc(-400px * var(--rightLength)))" },
        },
      },
    },
  },
  plugins: [],
};

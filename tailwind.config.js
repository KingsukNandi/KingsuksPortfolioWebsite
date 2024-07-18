/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "rgb(229, 255, 245)",
        background: "rgb(0, 0, 0)",
        secondary: "rgb(161, 252, 126)",
        primary: "rgb(64, 201, 142)",
        accent: "rgb(36, 249, 210)",
        subtle: "rgb(40, 40, 40)",
        cardbg: "rgb(20, 31, 29)",
      },
      aspectRatio: {
        reel: "9 / 16",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      sm: { max: "768px" },
      // for tabs and smaller

      // sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: "var(--primary)",
         secondary: "var(--secondary)"
      },
      fontFamily: {
        poppins: [
          "Poppins",
          "Wix Madefor Display",
          "DM Sans",
          "Montserrat",
          "DM Serif Display",
          "Playfair Display",
        ],
        geist: ["Geist", "Serif"],
      },
      screens: {
        sm: { max: "450px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
      },
    },
  },
  plugins: [],
}


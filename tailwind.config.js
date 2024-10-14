/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "375px",
      xs: "380px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "2xsm": "10px",
      xsm: "12px",
      sm: "13px",
      reg: "15px",
      lg: "18px",
      "2xl": "22px",
      "3xl": "25px",
      "4xl": "32px",
      "5xl": "40px",
      "6xl": "50px",
      "7xl": "70px",
      "8xl": "80px",
      "9xl": "80px",
      "10xl": "100px",
    },
    extend: {
      colors: {
        primary: "#4699eb",
        "primary-content": "#05192d",
        "primary-dark": "#1980e5",
        "primary-light": "#74b2f0",

        secondary: "#eb9846",
        "secondary-content": "#2d1905",
        "secondary-dark": "#e57e19",
        "secondary-light": "#f0b274",

        background: "#111a22",
        foreground: "#192634",
        border: "#294056",

        copy: "#fafbfd",
        "copy-light": "#cbd9e6",
        "copy-lighter": "#87a6c5",

        success: "#46eb46",
        warning: "#ebeb46",
        error: "#eb4646",

        "success-content": "#052d05",
        "warning-content": "#2d2d05",
        "error-content": "#ffffff",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "infinite-scroll2": "infinite-scroll2 25s linear infinite",
      },
      webkit: {},
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "infinite-scroll2": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "left-bottom": "5px 5px 10px rgba(0, 0, 0, 0.5)", // Customize the blur and color as needed
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

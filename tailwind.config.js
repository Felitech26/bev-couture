/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '15px',   
    },
    screens: {
      sm: '478px',
      md: '585px',
      lg: '960px',
      xl: '1440px',
      xxl:'2200px',
    },
    fontFamily: {
      lato: 'var(--font-lato)',
      cormomorantGaramond: 'var(--font-cormomorantGaramond)'
    },
    extend: {
      colors: {
        primary: {
         DEFAULT: '#222222',
         hover: '#2f2f2f',
        },
        accent: {
          DEFAULT: '#f23c82',
          hover: '#f23c82',
         }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loop-scroll": "loop-scroll 7s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
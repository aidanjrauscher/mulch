/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "theme-yellow": "#fac832",
        "theme-brown": "#4e4637",
        "theme-tan": "#b4aa99",
        "theme-aqua": "#00d2a8",
        "theme-green": "#009975"
      }
    },
  },
  plugins: [],
}
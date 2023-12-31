/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "JIT",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
    },
    variants: {
  },
  plugins: [],
}

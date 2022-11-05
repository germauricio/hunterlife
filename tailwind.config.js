/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
    },
    fontFamily: {
      FuturaMed: ['FuturaMed'],
      FuturaLight: ['FuturaLight'],
      Minerva: ['Minerva']
    }
  },
  plugins: [],
}

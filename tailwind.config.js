/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      primary:"#020617",
      secondary:"#dc2626",
      neutral:"#f5f5f5",
    },
    extend: {
    },
  },
  plugins: [],
}
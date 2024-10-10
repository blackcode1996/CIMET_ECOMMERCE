/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#020617", // Primary color
      secondary: "#dc2626", // Secondary color
      neutral: "#f5f5f5", // Neutral color
      white: "#ffffff", // White
      black: "#000000", // Black
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        500: "#6b7280",
        700: "#374151",
        900: "#111827",
      },
      red: {
        500: "#ef4444",
        600: "#dc2626",
      },
      green: {
        500: "#10b981",
      },
      yellow: {
        300: "#fcd34d",
        500: "#f59e0b",
      },
      orange: {
        500: "#f97316",
      },
      slate: {
        900: "#1e293b",
      },
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { d: 'path("M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0")' },
          '50%': { d: 'path("M 0,90 C 130,210 370,10 500,90 L 500,00 L 0,0")' },
          '100%': { d: 'path("M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0")' }
        },
       
        clipPath: {
          "ellipse-custom": "ellipse(100% 15% at -15% 100%)",
        },
      },
      animation: {
        wave: 'wave 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

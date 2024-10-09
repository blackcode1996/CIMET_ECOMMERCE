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
        waving: {
          "0%": {
            transform: "translateX(-50%) translateY(0) skew(0, -10deg)",
          },
          "50%": {
            transform: "translateX(-40%) translateY(-10px) skew(0, -8deg)",
          },
          "100%": {
            transform: "translateX(-30%) translateY(0) skew(10deg, 0)",
          },
        },
      },
      animation: {
        waving: "waving 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',
        accent: '#f97316',
        sepia: '#f3ece6'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-5px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-5px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        fadeOut: "fadeOut 1s ease-in",
      },
    },
  },
  plugins: [],
};

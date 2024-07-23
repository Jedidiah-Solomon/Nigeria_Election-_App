/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will look for class names in these files
    "./index.html", // Include index.html in the public directory
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
      colors: {
        customGreen: {
          light: "rgba(92, 183, 92, 0.3)",
          medium: "rgba(92, 183, 92, 0.6)",
          dark: "rgba(92, 183, 92, 0.9)",
        },
      },
    },
  },
  plugins: [],
};

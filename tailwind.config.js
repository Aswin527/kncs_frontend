/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#0052CC", // Deep Blue
          secondary: "#F5A623", // Warm Orange
          background: "#F8F9FA", // Light Gray
          text: "#333333", // Dark Gray
          button: "#2D9CDB" // Bright Blue
        }
      }
    },
    plugins: [],
  };
  
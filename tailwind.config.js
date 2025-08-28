/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        "gray-600": "var(--gray-600)",
        "gray-900": "var(--gray-900)",
        "product-review-black": "var(--product-review-black)",
        "product-review-color": "var(--product-review-color)",
        "success-500": "var(--success-500)",
        "success-600": "var(--success-600)",
        white: "var(--white)",
      },
      boxShadow: {
        "shadow-lg": "var(--shadow-lg)",
        "shadow-xs": "var(--shadow-xs)",
      },
    },
  },
  plugins: [],
} 
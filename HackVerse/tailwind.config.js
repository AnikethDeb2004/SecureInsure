/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white-glow': '0 0 45px 0 rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        campus: {
          blue: '#0057B7',
          gold: '#FFDD00',
          danger: '#D32F2F',
          success: '#388E3C',
        }
      },
      // Adding a nice font for the Lead-level look
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
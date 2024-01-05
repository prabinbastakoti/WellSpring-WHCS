/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      primary: '#F5385D',
    },
    backgroundImage: { 'background': "url('/src/assets/414.jpg')" }
  },
  },
  plugins: [],
}


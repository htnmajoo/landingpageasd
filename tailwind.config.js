/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EEF5FF',
          100: '#D5E5FF',
          200: '#B3D1FF',
          300: '#80AFFF',
          400: '#4D8EFF',
          500: '#2563EB', // Main primary color
          600: '#1E4FBC',
          700: '#183C8C',
          800: '#12285C',
          900: '#091429',
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          light: '#60A5FA',
          dark: '#1D4ED8'
        },
        secondary: {
          DEFAULT: '#2563EB',
          light: '#60A5FA',
          dark: '#1D4ED8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'prose-lg': '75ch',
      }
    },
  },
  plugins: [],
};
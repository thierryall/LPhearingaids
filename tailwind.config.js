/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          light: '#A5B4FC',
          dark: '#4F46E5'
        },
        secondary: {
          DEFAULT: '#EC4899',
          light: '#F9A8D4',
          dark: '#DB2777'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'prose-lg': '75ch',
      }
    },
  },
  plugins: [],
};
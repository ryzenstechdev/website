/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'netflix-orange': '#FF6A00',
        'netflix-orange-hover': '#FF8533',
        'netflix-black': '#000000',
        'netflix-dark': '#141414',
        'netflix-gray': '#808080',
      },
    },
  },
  plugins: [],
} 
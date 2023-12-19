/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'myBg': '#171717',
        'coffee': '#8C7158'
      },
      fontFamily: {
        'oswald' : ['Oswald', 'sans-serif']
      },
      strokeWidth: {
        '4' : '4px', 
      },
    },
  },
  plugins: [],
}


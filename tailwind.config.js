/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-green': '#9fccc1'
      },
      fontFamily: {
        'mono': 'Space Mono'
      }
    },
  },
  plugins: [],
}

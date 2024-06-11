/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'Darkcyan': 'hsl(158, 36%, 37%)',
        'Cream':'hsl(30, 38%, 92%)',
        'Verydarkblue':'hsl(212, 21%, 14%)',
        'DarkGrayishBlue':'hsl(228, 12%, 48%)',
        'white':'hsl(0, 0%, 100%)'
      },
      fontFamily:{
        'montreg':'MontReg',
        'montbold':'MontBold',
        'fraunces':'fraunces'
      }
    },
  },
  plugins: [],
}
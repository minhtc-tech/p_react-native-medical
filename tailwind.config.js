const colors = require('./colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      rubik_400_regular: 'Rubik_400Regular',
      rubik_500_medium: 'Rubik_500Medium',
      rubik_600_semibold: 'Rubik_600SemiBold',
    },
    colors,
    extend: {},
  },
  plugins: [],
}

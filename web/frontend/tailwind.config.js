/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', '../frontend/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      bg: {
        light: '#F0F8FF',
        dark: '#032A1A',
      },
      te: {
        dark: '#F0F8FF',
        light: '#032A1A',
      },
      noteColor: '#5b6878',
      linkColor: '#006fbb',
      linkColorHover: '#084e8a',
      linkColorDark: '#084e8a',
      successColor: '#008060',
      successColorDark: '#005e46',
      errorColor: '#d82c0d',
      errorColorDark: '#a8220a',
      warningColor: '#ffc453',
      warningColorDark: '#ffb320',
    },
  },
  plugins: [require('flowbite/plugin')],
}

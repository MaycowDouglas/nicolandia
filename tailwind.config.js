const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.-rotate-y-180': {
      transform: 'rotateY(-180deg)',
    },
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      red: {
        DEFAULT: '#DD0000',
      },
      blue: {
        100: '#203E3F',
        200: '#4392CF',
      },
      yellow: {
        DEFAULT: '#FFA301',
      },
      beige: {
        DEFAULT: '#FBF4E6',
      },
      green: {
        100: '#1A8035',
        200: '#9CC31A',
      },
      gray: {
        DEFAULT: '#717171',
        100: '#717171',
        200: '#F6F6F6',
      },
      pink: '#FF6192',
      dark: {
        DEFAULT: '#000',
        10: 'rgba(0,0,0,.1)',
        20: 'rgba(0,0,0,.2)',
        30: 'rgba(0,0,0,.3)',
        40: 'rgba(0,0,0,.4)',
        50: 'rgba(0,0,0,.5)',
        60: 'rgba(0,0,0,.6)',
        70: 'rgba(0,0,0,.7)',
        80: 'rgba(0,0,0,.8)',
        90: 'rgba(0,0,0,.9)',
      },
      light: {
        DEFAULT: '#fff',
        10: 'rgba(255,255,255,.1)',
        20: 'rgba(255,255,255,.2)',
        30: 'rgba(255,255,255,.3)',
        40: 'rgba(255,255,255,.4)',
        50: 'rgba(255,255,255,.5)',
        60: 'rgba(255,255,255,.6)',
        70: 'rgba(255,255,255,.7)',
        80: 'rgba(255,255,255,.8)',
        90: 'rgba(255,255,255,.9)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [rotateY],
}

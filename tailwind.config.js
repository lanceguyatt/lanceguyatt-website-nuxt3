/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    'content/**/*.md',
  ],
  theme: {
    fontFamily: {
      sans: ['Topaz'],
    },
    backgroundPosition: {
      'disk-left': '-4.3rem 0'
    },
    colors: {
      black: 'hsl(0deg 0% 0%)',
      white: 'hsl(0deg 0% 100%)',
      blue: 'hsl(216deg 34% 53%)', // horizon #6080B0
      grey: 'hsl(0deg 0% 63%)', // sliver chalice #A0A0A0
      purple: 'hsl(300deg 61.9% 16.5%)',
      tan: 'hsl(20deg 60.8% 69%)',
      red: 'red',
    },
    extend: {
      animation: {
        insert: 'insert 1.5s forwards infinite',
      },
      backgroundImage: {
        disk: "url('/images/disk.svg')"
      },
      fontSize: {
        base: '1.6rem',
      },
      keyframes: {
        insert: {
          '0%': { transformOrigin: '0% 0%' },
          '20%': {
            transform: 'translate3d(0, 2rem, 0)',
            transformOrigin: '0% 0%',
          },
          '100%': { transform: 'rotateX(83deg) translateY(-35rem)', transformOrigin: '0% 0%' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens :{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'rgb(239, 88, 50)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'rgb(255, 240, 235)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'rgb(155, 153, 153)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 99%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}

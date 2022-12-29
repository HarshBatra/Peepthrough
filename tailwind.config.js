/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderRadius:{
        '4xl':'1.75rem', //30px
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      colors: {
        primary:{
          'blue':'#13A89E',
          'light-blue':'rgba(19, 168, 158, 0.6)'
        },
        'light-gray':'rgba(0, 0, 0, 0.5)',
        'back-overlay':"rgba(0, 0, 0, 0.5)",
       },
      fontFamily:{
        poppins:['Poppins'],
      },
      fontSize:{
        'xxs':'10px'
      }, 
      spacing:{
        '90':'22rem', //352px
        '100': '25rem', //400px
        '128':'32rem' //512px
      },
    },
  },
  plugins: [],
};

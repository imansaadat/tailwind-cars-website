/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        subscribe: "url('../../assets/letter-bg.png')",
      },
      colors: {
        'yellow': '#f9d806',
        'light-yellow': '#ffee80',
        'black': '#130f40',
        'gray': '#666',
        'light-gray': '#eee',
      },
      animation: {
        fadeIn : 'fadeIn 0.5s linear',
      },
      keyframes:{
        fadeIn:{
          '0%':{
            opacity: '0',
            transform:' scale(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
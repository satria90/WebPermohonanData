/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        semiBold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}


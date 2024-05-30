/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primaryy: '#657A38',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
      },
      screens: {
        'xs': {'max': '640px'}, // Nueva pantalla personalizada
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


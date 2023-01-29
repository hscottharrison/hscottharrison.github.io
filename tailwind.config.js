/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../img/tetons.png')"
      },
    },
  },
  plugins: [],
}

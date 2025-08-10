/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'custom-teal': '#88BDBC',
        'navbar-font': '#4F4A41',
        'custom-gradient': 'linear-gradient(to right, #EC4186, #38124A, #EE544A, #FFFFFF)',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./node_modules/flowbite/**/*.js","./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        heroLight:
          "url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')",
        heroDark:
          "url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')",
      },
      colors: {
        'neon-violet': '#8A2BE2',
        'neon-blue': '#03A9F4',
        'neon-green': '#34C759',
        'custom-violet': '#a687fe',
        'neon-orange': '#FFC107',
        'custombg': '#e9a7ff',
         'primary': '#8A2BE2',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}



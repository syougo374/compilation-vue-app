module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // sm: "390px",
        lg: "1079px",
        zero: "390px",
      },
    },
  },
  variants: {
    extend: {},
  },
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
}
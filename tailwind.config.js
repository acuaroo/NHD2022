module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'cb': '1600px',
      },
      colors: {
        'charcoal':'#1c1c1c',
        'coal': '#1f1f1f',
        'sunny': '#FF7528',
        'pale-sunny':'#FFAB7C',
        'bright-sunny': '#ff8f17'
      },
      fontFamily: {
        lorabold: ['Lora', 'serif'],
      },
      fontSize: {
        'cbxl':'1.1687rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        texthover: '#FCFAFE',
        bgColor: '#020925'
      },
      backgroundColor: {
        bgColor: '#020925'
      },
      width: {
        '400': '400px',
        '632': '632px',
        '509': '509px',
        '408': "408px",
        '550': '560px',
        '600': '600px',
        '685': '685px',
        '1200': '1200px',
      },
      height: {
        '761': '761px',
        '571': '571px',
        '572': '572px',
        '687': '687px',
        '674': "674px",
        '99': "99px",
        "730": "730px",
        "953": "953px",
        "656": "656px"
      },
      minHeight: {
        '571': '571px'
      },
      margin: {
        480: '480px',
        651: '651px'
      },
      fontSize: {
        15: '15px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

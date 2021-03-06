const imagesPath = '../images'; // Relative to ./src/styles/app.css

module.exports = {
  content: ['./src/**/*.pug'],
  safelist: ['pb-4'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#00d17f',
          500: '#00896b',
        },
        secondary: {
          300: '#1f7480',
          500: '#003d44',
        },
        white: {
          off: '#dbfeee',
        },
        black: {
          off: '#000909',
        },
      },
      backgroundImage: {
        'logo-big': `url('${imagesPath}/logo-big.png')`,
      },
      fontFamily: {
        body: ['arial', 'sans-serif'],
      },
      maxWidth: {
        '10xl': '120rem',
      },
    },
  },
  plugins: [],
};

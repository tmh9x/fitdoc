module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#24272f;',
        secondary: '#fff',
      },
      gridTemplateRows: {
        exerciseCard: '55% 30% 15%',
      },
      backgroundColor: {
        primary: '#24272f;',
        secondary: '#fff',
        tertiary: '#707070',
        primaryButton: '#ff2e55',
        secondaryButton: '#43BA7C',
      },
      borderColor: {
        primary: '#707070',
      },
      fontFamily: {
        sans: ['Roboto'],
      },
    },
  },
  variants: {
    extend: { borderStyle: ['last'] },
    margin: ['last'],
  },
  plugins: [],
};

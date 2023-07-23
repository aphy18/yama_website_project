module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      lato: ['Lato', 'sans-serif'],
      robot: ['Roboto', 'sans-serif']
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        clubphoto: "url('/src/images/clubphoto.png')",
        york: "url('/src/images/yorklogo.png')",
        yama: "url('/src/images/yamaLogo.png')",
        yamaclubphoto: "url('/src/images/yamaclubphoto.png')"
      },
    },
  },
  plugins: [],
};

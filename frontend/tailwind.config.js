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
      lg: '1200px',
      xl: '1700px',
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
        tabling: "url('/src/images/tabling.png')",
        contact: "url('/src/images/contact.png')",
        yamabackground: "url('/src/images/yamabackground.png')",
        photo1: "url('/src/images/p1.jpeg')",
        photo2: "url('/src/images/p2.jpeg')",
        photo3: "url('/src/images/p3.jpeg')"
      },
    },
  },
  plugins: [],
};

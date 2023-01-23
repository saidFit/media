/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'
  ],
  darkMode:'class',
  
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        redOpacity:'#bde0fe',
        darkOpacity:'rgba(0, 0, 0, 0.382)',
        danger : 'rgba(255, 196, 196, 0.647)',

        gray:{
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
        },
       
        primary:{

        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519",

        }
        

      },
      boxShadow:{
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'My-box':' 1px 1px 9px rgba(0, 0, 0, 0.132)'
      },
      maxWidth: {
        '1/2': '50%',
        'my-m-w':'280px'
      },
      transitionProperty:{
        'my-transition':'all .5s ease',
        'my-transition2':'all 3s ease-in-out'
      },
      borderRadius:{
        "my-border":"30px"
      },
  
      gridTemplateColumns:{
         'auto-fill':'repeat(auto-fit,minmax(300px,1fr))',
         'auto-fill2':'repeat(auto-fit,minmax(250px,1fr))'
      },
      fontSize:{
        xs:'200px'
      }
    },
  },
  plugins: [],
  plugins: [
    require('flowbite/plugin')
]
}
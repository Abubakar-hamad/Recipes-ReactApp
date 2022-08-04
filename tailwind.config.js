module.exports = {
  mode:"jit",
  darkMode:'class' ,
  content: [],
  purge:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
        center:true ,
        padding:'1rem' ,
      },  
      colors:{
          darkbg:{
            DEFAULT:"#20222f",
            card:"#252b43",
            dark:"#1d2029"
          }
      } 
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

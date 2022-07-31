module.exports = {
  mode:"jit",
  darkMode:'class' ,
  content: [],
  purge:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
        center:true ,
        padding:"1rem",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      
    },
  },
  plugins: [],
}

import React from 'react'


function Home() {
  return (
      <div>
        <div className="  bg-[url('./assets/cover.jpg')] bg-cover bg-center h-96 justify-center bg-fixed items-center flex flex-col gap-2 relative ">
           
          <div className="container gap-9 grid items-center justify-center text-center ">
          <h2 className="text-5xl text-white  bg-gradient-to-r from-pink-400 via-blue-400 to-indigo-400  p-1 rounded-lg" >  Recipes Food</h2>
           <h2 className="text-5xl text-white bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-400  p-1 rounded-lg" > From every where in The World</h2>
          </div>
          
       </div>
      </div>
  )
}

export default Home
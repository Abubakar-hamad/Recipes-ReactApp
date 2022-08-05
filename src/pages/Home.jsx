import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDessert, GetRecipes, getVeggi, reset } from '../redux/slices/recipesSlice';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import Spinner from '../components/Spinner';
import { motion, useScroll } from "framer-motion"
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate  = useNavigate()
  const DarkMode = localStorage.getItem('DarkMode') 
  if(DarkMode ==! ''){

    console.log(DarkMode);
  }
  const dispatch  = useDispatch()
  
  const { isLoading , isSuccess  , isError  , message ,recipes , veggi , dessert} = useSelector(state => state.recip)
 




  
  useEffect(()=>{    
    if(!recipes || recipes == ''){
      dispatch(GetRecipes())
    }

    if(!veggi || veggi == ''){
      dispatch(getVeggi())
    }

    if(!dessert || dessert == ''){
      dispatch(getDessert())
    }
    if(isError){
      console.log(message);
    }
    } , [ isError ,message , dispatch , recipes , dessert ,veggi ])

    const optionSlide = {
      // type:'loop',

      gap:'.5rem' ,
      perPage: 3,
      // pagination:false ,
      arrows:false
    } 
  
  return (
    <motion.div
           animate={{opacity:1}}
           initial ={{opacity:0}}
           exit ={{opacity:0}}
           transition ={{duration:0.5}}
            
          >
        <div className=" bg-[url('./assets/cover3.jpg')] bg-cover bg-center h-96 justify-center bg-fixed items-center flex flex-col gap-2 relative ">
           
          <div className="container gap-9 grid items-center justify-center text-center ">
          <h2 className="text-5xl shadow-xl shadow-black text-gray-900 bg-orange-300 bg-opacity-75  p-1 rounded-lg" >  Recipes Food</h2>
           <h2 className="text-5xl shadow-xl shadow-black text-gray-900 bg-orange-300 bg-opacity-75  p-1 rounded-lg" > From every where in The World</h2>
          </div>
          
       </div>
    {/* ppular */}
       <div className='md:container sm:w-85 sm:px-3 my-24 '>
          <h3 className =' shadow-xl shadow-orange-200/50  text-4xl text-center py-4 my-4 bg-gradient-to-b from-orange-300 to-gray-300'>Popular Food</h3>

          <div className=" md:container  ">
          <Splide  options={optionSlide} >
            { recipes ?
              recipes.map(recip =>{
                  return(
                    <SplideSlide onClick={()=> navigate(`/cuisine/${recip.id}/info`) }   key={recip.id}  className=' relative  cursor-pointer h-56 '>
                      <img  className='rounded-md h-full w-full absolute inset-0  ' src={recip.image} alt="" />
                      <p className='absolute overflow-hidden md:text-xl sm:text-sm text-center justify-center items-center md:inset-x-10 sm:inset-x-2   h-fit bottom-8 hover:scale-105  transition-all bg-gray-300 bg-opacity-75'>{recip.title}</p>
                    </SplideSlide >
                  )
              })
              :
              <Spinner className='w-full' />
            }  
          </Splide>
          </div>
        </div>
           
       
       {/* vegg */}

        <div className=' md:container  sm:w-85 sm:px-3 my-24'>
          <h3 className ='shadow-xl shadow-orange-200/50  text-4xl text-center py-4 my-4 bg-gradient-to-b from-orange-300 to-gray-300'>Vagatarian Food</h3>

          <div className=" md:container ">
          <Splide  options={optionSlide} >
            { veggi ?
              veggi.map(veg =>{
                  return(
                    <SplideSlide onClick={()=> navigate(`/cuisine/${veg.id}/info`) }   key={veg.id}  className=' cursor-pointer  h-56'>
                     <img  className='rounded-md h-full w-full  ' src={veg.image} alt="" />
                     <p className='absolute overflow-hidden md:text-xl sm:text-sm text-center justify-center items-center md:inset-x-10 sm:inset-x-2   h-fit bottom-8 hover:scale-105  transition-all bg-gray-300 bg-opacity-75'>{veg.title}</p>
                    </SplideSlide >
                  )
              })
              :
              <Spinner/>
            }  
          </Splide>
          </div>
        </div>

       {/* candy */}

       <div className='md:container  sm:w-85 sm:px-3 my-24 '>
          <h3 className =' shadow-xl shadow-orange-200/50  text-4xl text-center py-4 my-4 bg-gradient-to-b from-orange-300 to-gray-300'>Dessert</h3>

          <div className=" md:container ">
          <Splide  options={optionSlide} >
            { dessert ?
              dessert.map(dess =>{
                  return(
                    <SplideSlide onClick={()=> navigate(`/cuisine/${dess.id}/info`) } key={dess.id}  className=' cursor-pointer  h-56'>
                     <img  className='rounded-md h-full w-full  ' src={dess.image} alt="" />
                     <p className='absolute overflow-hidden md:text-xl sm:text-sm text-center justify-center items-center md:inset-x-10 sm:inset-x-2   h-fit bottom-8 hover:scale-105  transition-all bg-gray-300 bg-opacity-75'>{dess.title}</p>
                    </SplideSlide >
                  )
              })
              :
              <Spinner/>
            }  
          </Splide>
          </div>
        </div>
      </motion.div>
  )
}

export default Home
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDessert, GetRecipes, getVeggi, reset } from '../redux/slices/recipesSlice';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import Spinner from '../components/Spinner';
import { motion, useScroll } from "framer-motion"


function Home() {
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
        <div className=" bg-[url('./assets/cover.jpg')] bg-cover bg-center h-96 justify-center bg-fixed items-center flex flex-col gap-2 relative ">
           
          <div className="container gap-9 grid items-center justify-center text-center ">
          <h2 className="text-5xl text-white  bg-gradient-to-r from-pink-400 via-blue-400 to-indigo-400  p-1 rounded-lg" >  Recipes Food</h2>
           <h2 className="text-5xl text-white bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-400  p-1 rounded-lg" > From every where in The World</h2>
          </div>
          
       </div>
    {/* ppular */}
       <div className='md:container sm:w-85 sm:px-3 my-24 '>
          <h3 className ='text-4xl text-center py-4 my-2 bg-gradient-to-b from-orange-300 to-gray-300'>Popular Food</h3>

          <div className=" md:container  ">
          <Splide  options={optionSlide} >
            { recipes ?
              recipes.map(recip =>{
                  return(
                    <SplideSlide key={recip.id} className='h-56'>
                      <img className='rounded-md h-full w-full' src={recip.image} alt="" />
                      <div className='absolute md:text-xl sm:text-sm text-center justify-center items-center bottom-5 w-full bg-gray-300 bg-opacity-50 ' >
                        <p>{recip.title}</p>
                      </div>
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
          <h3 className ='text-4xl text-center py-4 my-2 bg-gradient-to-b from-orange-300 to-gray-300'>Vagatarian Food</h3>

          <div className=" md:container ">
          <Splide  options={optionSlide} >
            { veggi ?
              veggi.map(veg =>{
                  return(
                    <SplideSlide key={veg.id} className='h-56'>
                      <img className='rounded-md h-full w-full' src={veg.image} alt="" />
                      <div className='absolute md:text-xl sm:text-sm text-center justify-center items-center bottom-5 w-full bg-gray-300 bg-opacity-50 ' >
                        <p>{veg.title}</p>
                      </div>
                    </SplideSlide>
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
          <h3 className ='text-4xl text-center py-4 my-2 bg-gradient-to-b from-orange-300 to-gray-300'>Dessert</h3>

          <div className=" md:container ">
          <Splide  options={optionSlide} >
            { dessert ?
              dessert.map(dess =>{
                  return(
                    <SplideSlide key={dess.id} className='h-56'>
                      <img className='rounded-md h-full w-full' src={dess.image} alt="" />
                      <div className='absolute md:text-xl sm:text-sm text-center justify-center items-center bottom-5 w-full bg-gray-300 bg-opacity-50 ' >
                        <p>{dess.title}</p>
                      </div>
                    </SplideSlide>
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
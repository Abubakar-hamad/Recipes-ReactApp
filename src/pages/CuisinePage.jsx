import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { getCuisine , reset } from '../redux/slices/complexSlice'


import {MdOutlineExpandMore} from 'react-icons/md'
import { motion } from "framer-motion"

const CuisinePage = ()=> {
    const dispatch = useDispatch() ;
    const {cuisine , isLoading , isSuccess  , isError , message} = useSelector(state => state.cuis)
    const param = useParams() ;
    const payload = param.type

    let dataitems = localStorage.getItem(`${payload}`)
    const cuisinex = dataitems ? JSON.parse(dataitems) : ''         

    
    
    useEffect(()=>{
        if(!cuisinex){
            dispatch(getCuisine(payload))
        }

    } ,[dispatch , payload , reset])
   
    

    const [noOfEle, setNoOfEle] = useState(8)
    const slice = cuisinex.slice(0 , noOfEle)
    const [isGre ,setIsGre] = useState(true)
    const showMore = ()=>{
        if(noOfEle <= cuisinex.length){
            setNoOfEle(noOfEle + noOfEle)
        }    else{
            setIsGre(false)
        }
    }
   


    return (
    <motion.div     
    animate={{opacity:1}}
    initial ={{opacity:0}}
    exit ={{opacity:0}}
    transition ={{duration:0.5}}
    className='md:container sm:px-5 gap-3 '>
        <h3 className='bg-gradient-to-r from-orange-500 to-gray-300  text-white p-5 my-10 text-3xl md:p-3'>{payload} Food </h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:gap-2 md:gap-10 ">
            
        { cuisinex ?
              slice.map((item , index) =>{
                  return(
               <Link to={`/cuisine/${item.id}/info`} key={item.id} className=' hover:scale-105 transition-all cursor-pointer my-4 md:grid sm:grid text-center bg-gradient-to-b from-orange-300 to-gray-300 rounded-xl p-2   dark:bg-slate-800'>
                        <img className="w-full h-48 md:h-auto rounded-xl " src={item.image} alt="" width="384" height="512" />
                         <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    
                             <p className="text-lg font-bold"> {item.title} </p>

                         </div>
               </Link>
                  
                  )
              })
              :
                  
                  Array(12).fill('').map( el => <Spinner key={el.indexOf('')+Math.random()} />)
                
                
            }  
          
        </div>
               {
                isGre ?
                <>
                 <div onClick={showMore} className='flex gap-2 justify-center  items-center bg-gradient-to-b from-gray-500 to-orange-300  my-10 w-72 mx-auto h-12 rounded-md opacity-50 hover:opacity-80 transition-opacity cursor-pointer'>
                    <span>
                    More
                    </span>
         
                <p className='animate-bounce flex '>
                <MdOutlineExpandMore/>
                </p>
                </div>
                </>

                : 
                ''
               }
                    
    </motion.div>
  )
}

export default CuisinePage



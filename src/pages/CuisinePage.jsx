import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { getCuisine , reset } from '../redux/slices/complexSlice'
import Home from './Home'



const CuisinePage = ()=> {
    const dispatch = useDispatch() ;
    const {cuisine , isLoading , isSuccess  , isError , message} = useSelector(state => state.cuis)
    const param = useParams() ;
    const payload = param.type
    const navigate = useNavigate()
    useEffect(()=>{
             
            if(!cuisine){
                dispatch(getCuisine(payload))
            }
          
           
    } ,[dispatch , payload , reset])
   
    return (
    <div className='md:container sm:px-5 gap-3'>
        <h3 className='bg-gradient-to-r from-orange-500 to-gray-300  text-white p-5 my-10 text-3xl md:p-3'>{payload} Food </h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:gap-2 md:gap-10 ">
            
        { cuisine ?
              cuisine.map(item =>{
                  return(
               <Link to={`/cuisine/${item.id}/info`} key={item.id} className=' cursor-pointer md:grid sm:grid text-center bg-gradient-to-b from-orange-300 to-gray-300 rounded-xl p-2   dark:bg-slate-800'>
                        <img className="w-full h-48 md:h-auto rounded-xl" src={item.image} alt="" width="384" height="512" />
                         <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    
                             <p className="text-lg font-bold">
                                 {item.title}
                             </p>
                             
                      
                         </div>
               </Link>
                  
                  )
              })
              :
                  
                  Array(12).fill('').map( el => <Spinner key={el.indexOf('')+Math.random()} />)
                
                
            }  
          
        </div>
    </div>
  )
}

export default CuisinePage



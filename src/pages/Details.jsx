import { motion } from 'framer-motion';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetails, reset } from '../redux/slices/complexSlice';

const Details = () => {
    const param = useParams() ;
    const id = param.id
    const {cuisineDetail , isLoading , isSuccess  , isError , message} = useSelector(state => state.cuis)
    const dispatch = useDispatch();
    useEffect(()=>{   
        dispatch(getDetails(id))
    } , [dispatch  , id ])


    return (
    <motion.div 
    animate={{opacity:1}}
    initial ={{opacity:0}}
    exit ={{opacity:0}}
    transition ={{duration:0.5}}
    className='container my-10'>
        <div className="grid md:grid-cols-2 sm:grid-col-1 gap-4">
            <div className="img">
                <img className='rounded-xl' src={cuisineDetail.image} alt="" />
            </div>
            <div className="content grid gap-0 ">
                <div className="title">
                    <h1 className='text-bold text-2xl p-1 mb-5 text-orange-900 bg-gradient-to-r from-orange-200 to-gray-200  rounded-lg '>{cuisineDetail.title}</h1>
                    <div className="md:grid grid-cols-2 gap-4">
                    <p className='my-2'><b>Health Score : </b>{cuisineDetail.healthScore}</p>
                    <p className='my-2'><b>Vegetarian : </b>{cuisineDetail.vegetarian ? 'YES' : 'NO'}</p>
                    <p className='my-2'><b>Popular : </b>{cuisineDetail.veryPopular ? 'YES' : 'NO'}</p>
                    <p className='my-2'><b>cuisines : </b>{cuisineDetail.cuisines ? cuisineDetail.cuisines.map(i=> i)+"" : '---'}</p>
                    </div>
                </div>
                <hr />
                <div className="desc p-4 bg-gradient-to-r from-orange-50 to-gray-50 ">
                <h1>{cuisineDetail.instructions}</h1>
               

                </div>
            </div>
        </div>

    </motion.div>
  )
}

export default Details
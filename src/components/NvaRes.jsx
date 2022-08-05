import React from 'react'
import{ ImSpoonKnife } from 'react-icons/im'
import {AiFillHome ,AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu , GiHamburger , GiNoodles , GiFullPizza , GiSheep } from 'react-icons/gi'
import{Link, } from 'react-router-dom'
import { reset } from '../redux/slices/complexSlice'
import { useDispatch } from 'react-redux'



const NvaRes = ({showMenu , active , setActive}) => {
  const dispatch = useDispatch()

  const resetRed =()=>{
      dispatch(reset())
      setActive(!active)
  }
  return (
    <div className=''>
         <div className="md:hidden">
                {active ?<AiOutlineClose className='text-4xl text-gray-500 cursor-pointer' onClick={showMenu}  /> : <GiHamburgerMenu onClick={showMenu}   className='text-4xl text-gray-500 cursor-pointer '/>} 
        </div>
        
        {active && 
         <ul className='bg-black-200 backdrop-blur-md w-full grid  justify-center items-center gap-10 absolute  capitalize mt-5  right-0 z-10 text-center p-4 rounded-lg'>

         <Link onClick={resetRed} className='flex items-center gap-2 text-2xl ' to='/'><AiFillHome className='  text-2xl text-green-500' />home</Link>
         <Link onClick={resetRed} className='flex items-center gap-2 text-2xl ' to='/cuisine/Middle Eastern'><GiSheep className='  text-2xl text-amber-600'/>arabian</Link>
         <Link onClick={resetRed} className='flex items-center gap-2 text-2xl ' to='/cuisine/American'><GiHamburger className='  text-2xl text-yellow-500'/>american</Link>
         <Link onClick={resetRed} className='flex items-center gap-2 text-2xl ' to='/cuisine/Chinese'><GiNoodles className=' text-2xl text-brown-500'/>asian</Link>
         <Link onClick={resetRed} className='flex items-center gap-2 text-2xl ' to='/cuisine/Italian'><GiFullPizza className='  text-2xl text-red-400'/>italyan</Link>
        </ul>
        }
       

    </div>
  )
}

export default NvaRes
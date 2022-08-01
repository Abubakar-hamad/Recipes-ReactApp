import React from 'react'

import {AiFillHome ,AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu , GiHamburger , GiNoodles , GiFullPizza , GiSheep } from 'react-icons/gi'
import{Link, } from 'react-router-dom'

const NvaRes = ({showMenu , active}) => {
  return (
    <div className=''>
         <div className="md:hidden ">
                {active ?<AiOutlineClose className='text-4xl text-gray-500 cursor-pointer' onClick={showMenu}  /> : <GiHamburgerMenu onClick={showMenu}   className='text-4xl text-gray-500 cursor-pointer '/>} 
        </div>
        {active && 
         <ul className='bg-black-200 backdrop-blur-md w-50 grid  justify-center items-center gap-10 absolute capitalize  left-10 z-10 text-center p-4 rounded-lg'>
                
         <Link className='flex items-center gap-2 text-2xl ' to='/'><AiFillHome className='  text-2xl text-green-500' />home</Link>
         <Link className='flex items-center gap-2 text-2xl ' to=''><GiHamburger className='  text-2xl text-yellow-500'/>american</Link>
         <Link className='flex items-center gap-2 text-2xl ' to=''><GiNoodles className=' text-2xl text-brown-500'/>asian</Link>
         <Link className='flex items-center gap-2 text-2xl ' to=''><GiFullPizza className='  text-2xl text-red-400'/>italyan</Link>
         <Link className='flex items-center gap-2 text-2xl ' to=''><GiSheep className='  text-2xl text-amber-600'/>arabian</Link>
        </ul>
        }
    </div>
  )
}

export default NvaRes
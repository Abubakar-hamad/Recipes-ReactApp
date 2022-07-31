import React from 'react'
import { useRef } from 'react'
import {BsFillMoonStarsFill } from 'react-icons/bs'
import { BiSun} from 'react-icons/bi'
// import {GrHomeOption} from  'react-icons/gr'
import {ImSpoonKnife} from 'react-icons/im'
import {AiFillHome} from 'react-icons/ai'
import {GiHamburger , GiNoodles , GiFullPizza , GiSheep } from 'react-icons/gi'
import{Link, useNavigate} from 'react-router-dom'

import { useState } from 'react'


function Header() {
    const checkRef = useRef()
    const navigate = useNavigate()
    const [darkMode , setDarkMode] = useState(false)
 
    const handleClick = (e)=>{
        (checkRef.current.click())
        setDarkMode((x)=> !x)
       
    }
  return (

    <div className='bg-gray-100'>
        <div className="header container flex py-5 justify-between  ">
                <div  className="flex items-center gap-1 cursor-pointer "  onClick={()=> navigate('/') }>
                    <ImSpoonKnife className=' text-5xl bg-blue-700 rounded-full p-2 text-white  hover:animate-spin ' />
                    <span>Reciepes</span>
                </div>
                <div className="capitalize gap-9 items-start text-center justify-center hidden  md:block md:flex">
                
                <Link to='/'><AiFillHome className='mx-auto my-2 text-2xl text-green-500' />home</Link>
                <Link to=''><GiHamburger className='m-auto my-2 text-2xl text-yellow-500'/>american</Link>
                <Link to=''><GiNoodles className='m-auto my-2 text-2xl text-brown-500'/>asian</Link>
                <Link to=''><GiFullPizza className='m-auto my-2 text-2xl text-red-400'/>italyan</Link>
                <Link to=''><GiSheep className='m-auto my-2 text-2xl text-amber-600'/>arabian</Link>
                </div>

                <div >
                    {darkMode ? 
                                <BiSun onClick={handleClick} className=' icon cursor-pointer text-4xl my-3 text-red-200 '/>:
                                <BsFillMoonStarsFill onClick={handleClick} className=' icon cursor-pointer text-4xl my-3 text-gray-600 ' /> 
                     }
                    <input type="checkbox" name='check' ref={checkRef} className="hidden" />
                </div>
        </div>
    </div>
  )
}

export default Header
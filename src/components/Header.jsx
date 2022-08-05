import React from 'react'
import { useRef } from 'react'
import {BsFillMoonStarsFill } from 'react-icons/bs'
import { BiSun} from 'react-icons/bi'
// import {GrHomeOption} from  'react-icons/gr'
import {ImSpoonKnife} from 'react-icons/im'
import {AiFillHome , AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu , GiHamburger , GiNoodles , GiFullPizza , GiSheep } from 'react-icons/gi'
import{Link, useNavigate, useParams} from 'react-router-dom'
import { reset } from '../redux/slices/complexSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import NvaRes from './NvaRes'
import { useEffect } from 'react'


function Header() {
    const dispatch = useDispatch()
  

    const resetRed =()=>{
        dispatch(reset())
    }

    const checkRef = useRef()
    const navigate = useNavigate()
  
    const [darkMode , setDarkMode] = useState(false)
    const [active  ,setActive] = useState(false)
    const showMenu = ()=>{
        setActive(!active)
       
    }



    const handleClick = (e)=>{
        (checkRef.current.click())
        
        setDarkMode((darkMode)=> !darkMode)
         localStorage.setItem('DarkMode' , JSON.stringify(darkMode))
       
    }
  return (

    <div className='bg-gray-100 shadow-md shadow-black/25'>
        <div className="header container flex sm:flex sm:justify-between sm:items-center md:flex py-5 justify-between  items-center">
                <div  className="flex items-center gap-1 cursor-pointer"  onClick={()=> navigate('/') }>
                    <ImSpoonKnife className=' text-5xl bg-gradient-to-t from-orange-300 to-red-500 rounded-full p-2 text-white  hover:animate-spin ' />
                    <span className='sm:hidden' >Reciepes</span>
                </div>
             <div className="md:hidden">
              
        
                    <NvaRes showMenu={showMenu} active={active} setActive={setActive} className='md:hidden sm:flex ' />
                    
                </div>
                <div className="capitalize gap-9 items-start text-center justify-center hidden  md:block md:flex">
                
                <Link onClick={resetRed} to='/'><AiFillHome className='mx-auto my-2 text-2xl text-green-500' />home</Link>
                <Link onClick={resetRed} to='/cuisine/Middle Eastern'><GiSheep className='m-auto my-2 text-2xl text-amber-600'/>arabian</Link>
                <Link onClick={resetRed} to='/cuisine/American'><GiHamburger className='m-auto my-2 text-2xl text-yellow-500'/>american</Link>
                <Link onClick={resetRed} to='/cuisine/Chinese'><GiNoodles className='m-auto my-2 text-2xl text-brown-500'/>asian</Link>
                <Link onClick={resetRed} to='/cuisine/Italian'><GiFullPizza className='m-auto my-2 text-2xl text-red-400'/>italian</Link>
                </div>
                <div className='hidden md:block' ></div>
        </div>
    </div>
  )
}

export default Header
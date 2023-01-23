import React, { useState } from 'react'
import {MdOutlineLightMode,MdOutlineNotificationsNone} from 'react-icons/md'
import {BsChatLeftText} from 'react-icons/bs'
import {BsStopFill} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUserAction, userLogoutAction } from '../redux/Actions/Actions'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Navbar = ({darkThem,setDarkThem,colorButtons}) => {
  const [IsClickhamburger,setIsClickhamburger] = useState(false)
  const [IsShawProfile,setIsShawProfile] = useState(false)
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const {user} = useSelector((state) => state.userRegister)

// TODO: logout //
  const logout = () =>{
      dispatch((userLogoutAction()))
  }

  return (
    <section className='bg-gray-0 shadow-My-box py-3 dark:bg-slate-800 dark:border border-black'>
      <nav className='container mx-auto flex w-full justify-between items-center '>
        <ul className='flex items-center space-x-2'>
          <h1 style={{color:`${colorButtons}`}} className='font-bold text-xl mr-4'><Link to='/Social'><span className='text-4xl'>MediaSocial</span></Link></h1>
        <li className='hidden md:block'>
        <input className='bg-gray-10 rounded-[30px] shadow-My-box border border-gray-200 outline-none py-2 px-4 dark:bg-slate-800 dark:border' type="text" placeholder="Search..." />
        </li> 
        </ul>
       
        <ul className='space-x-3 hidden md:flex'>
          <div className='flex items-center space-x-4'>
          <button onClick={() => setDarkThem(darkThem == 'dark'?'light':'dark')}><MdOutlineLightMode className='text-xl'/></button>
         <button style={{color:`${colorButtons}`}} onClick={() => Navigate('/Chat')}><BsChatLeftText className='text-xl'/></button>
         <button style={{color:`${colorButtons}`}}><MdOutlineNotificationsNone className='text-xl'/></button>
         <button><BsStopFill className='text-xl'/></button>
          </div>
       
         <div style={{background:`${colorButtons}`}} onClick={()=>setIsShawProfile(!IsShawProfile)} className='relative cursor-pointer bg-gray-10 p-2 rounded-md dark:bg-slate-800 dark:border border-black'>
          <div className='flex space-x-2 items-center'>
           <p>Apple Icecream</p> 
           <span><IoMdArrowDropdown className='text-xl'/></span>
          </div>
          {IsShawProfile && (
             <div className='bg-gray-10 absolute rounded-md w-full p-2 top-[50px] z-30 profile shadow-md flex flex-col dark:bg-slate-800 dark:border border-black'>
            <button className='py-1 px-3 text-lg font-[400] block text-start w-full hover:bg-gray-100' onClick={() => dispatch((getSingleUserAction(user._id)))} ><Link to={`ProfileUser/${user._id}`}>Profile</Link></button>
            <button onClick={logout} className='py-1 px-3 text-lg font-[400] block text-start w-full hover:bg-gray-100'>Log out</button>
           </div>
          )}
          
         </div>
        </ul>

        <div onClick={()=>setIsClickhamburger(!IsClickhamburger)} className={IsClickhamburger ? 'hamburger relative z-50 open flex md:hidden':'hamburger relative z-50 flex md:hidden'}>
             <span className='hamburger-top bg-primary-500'></span>
             <span className='hamburger-middle bg-primary-500'></span>
             <span className='hamburger-bottom bg-primary-500'></span>
        </div>


        <ul className={IsClickhamburger ? 'space-x-3 fixed popup bg-[#3091a23e] inset-0 z-30 top-[65px] block backdrop-blur-[3px] md:hidden openWindow':'space-x-3 fixed popup bg-[#3091a23e] inset-0 z-30 top-[65px] block backdrop-blur-[3px] md:hidden'}>
          <div className='container space-y-5 mt-12 bg-gray-0 p-8 rounded-md mx-auto'>
            <div className='flex items-center space-x-4'>
          <button><MdOutlineLightMode className='text-xl'/></button>
         <button><BsChatLeftText className='text-xl'/></button>
         <button><MdOutlineNotificationsNone className='text-xl'/></button>
         <button><BsStopFill className='text-xl'/></button>
          </div>
       
         <button className='bg-gray-10 p-2 rounded-md'>
          <div className='flex space-x-2 items-center'>
           <span>Apple Icecream</span> 
           <span><IoMdArrowDropdown className='text-xl'/></span>
          </div>
         </button>  
         <li>
        <input className='bg-gray-10 rounded-[30px] shadow-My-box border border-gray-200 outline-none py-2 px-4 w-full' type="text" placeholder="Search..." />
        </li> 
          </div>
        

        </ul>

      </nav>
    </section>
  )
}

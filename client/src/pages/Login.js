import React, { useEffect, useState } from 'react'
import { CiCamera } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteErrors, removeLocalStorageAction, UserLoginAction, UserRegisterAction } from '../redux/Actions/Actions'
import {ImSpinner8} from 'react-icons/im'
import {BiShow,BiHide} from 'react-icons/bi'
import groovyWalkAnimation  from "../lotties/102360-searching-file";
import groovyWalkAnimation1  from "../lotties/86055-wave-loading-animation.json";
import Lottie from "lottie-react";
export const Login = () => {

   const [email,setemail] = useState('')
   const [password,setpassword] = useState("")
   const [IsShowPss,setIsShowPss] = useState(false)

   const dispatch  = useDispatch()
   const userRegister = useSelector((state) => state.userRegister)
   const {error_arr,loading,error_single,user,IsValid} = userRegister;

const handleSubmit = (e) =>{
  e.preventDefault()
    const user = {email,password}
    dispatch((UserLoginAction(user,setemail,setpassword,user,IsValid)))   
}

    return (

        <section className='mt-4'>
            {loading ?  (<div>
                <Lottie className='w-[120px] mx-auto h-[170px] mr-auto' animationData={groovyWalkAnimation} loop={true} />
            </div>):(
               <div className='container mx-auto space-y-8 rounded-md p-3 shadow-My-box bg-gray-0 w-full max-w-[800px] dark:bg-slate-800 dark:border border-black'>
                <h1 className='text-xl text-primary-500 font-bold w-fit border-b border-primary-300 rounded-br-[20px]'>Login</h1>
            <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='flex items-center'>
                        <label className='w-[20%] text-xl'>email*</label>
                        <input value={email} onChange={(e) =>setemail(e.target.value)} className={error_arr.includes('email')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type='email' placeholder='Enter-email' name='email' />
                    </div>
                    <div className='relative flex items-center'>
                        <label className='w-[20%] text-xl'>password*</label>
                        <input onChange={(e)=>setpassword(e.target.value)} value={password}className={error_arr.includes('password')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type={IsShowPss?'text':'password'} name='password' placeholder='password' />
                       <span onClick={()=> setIsShowPss(!IsShowPss)} className='absolute text-xl top-[50%] translate-x-[-50%] cursor-pointer translate-y-[-50%] right-[10px]'>{IsShowPss?<BiShow/>:<BiHide/>}</span>
                    </div>
                    {error_single && <p className='bg-danger p-2 text-center text-xl py-3 rounded-[6px] border border-[red]'>{error_single}</p>}
                    <button className='bg-primary-500 w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>Log in</button>
            </form>
            <p className='border-b w-fit text-primary-600 border-primary-500' onClick={()=>dispatch((DeleteErrors()))}>don't have an account ?<Link to='/'>signup here</Link></p> 
            </div>  
            )}
           
        </section>
    )
}

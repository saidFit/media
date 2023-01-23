import React, { useState } from 'react'
import { CiCamera } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteErrors, puthinginregister, UserRegisterAction } from '../redux/Actions/Actions'
import {ImSpinner8} from 'react-icons/im'
import {BiShow,BiHide} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    
   const [firstName,setfirstName] = useState('')
   const [lastName,setlastName] = useState('')
   const [location,setlocation] = useState('')
   const [occupation,setoccupation] = useState('')
   const [image,setimage] = useState('')
   const [email,setemail] = useState('')
   const [password,setpassword] = useState('')
   const [IsShowPss,setIsShowPss] = useState(false)
   const Navigate = useNavigate()
   const dispatch  = useDispatch()
   const userRegister = useSelector((state) => state.userRegister)
   const {user,error_arr,loading,error_single} = userRegister;

const handleSubmit = (e) =>{
  e.preventDefault()

  const formData = new FormData()
        formData.append('firstName',firstName)
        formData.append('lastName',lastName)
        formData.append('location',location)
        formData.append('occupation',occupation)
        formData.append('image',image)
        formData.append('email',email)
        formData.append('password',password)
       
    dispatch((UserRegisterAction(formData)))    


}

const handleDich =() =>{
    dispatch((puthinginregister()))
    dispatch((DeleteErrors()))
    Navigate('/Login')
}

    return (

        <section className='mt-4'>
            {loading ? (<div className='container mx-auto text-5xl text-[#000000ca] h-[80vh] py-20 w-fit'>{<ImSpinner8 className='Spinner dark:text-white'/>}</div>):(
               <div className='container mx-auto space-y-8 rounded-md p-3 shadow-My-box bg-gray-0 w-full max-w-[800px] dark:bg-slate-800 dark:border border-black'>
                <h1 className='text-xl text-primary-500 font-bold w-fit border-b border-primary-300 rounded-br-[20px]'>Welcome to MediaSocial the Social Media for MediaSocial</h1>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='flex items-center space-x-3'>
                        <div  className='flex items-center w-[50%]'>
                        <label className='w-[20%] text-[13px] md:text-xl'>First name*</label>
                        <input value={firstName} onChange={(e) =>setfirstName(e.target.value)} className={error_arr.includes('firstName')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type='text' placeholder='Enter-name' name='text' />  
                        </div>
                        <div className='flex items-center w-[50%]'>
                          <label className='w-[20%] text-[13px] md:text-xl'>last name*</label>
                        <input value={lastName} onChange={(e) =>setlastName(e.target.value)} className={error_arr.includes('lastName')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type='text' placeholder='Enter-last-name' name='text' />  
                        </div>
                        
                    </div>
                    <div className='flex items-center'>
                        <label className='w-[20%] text-[13px] md:text-xl'>Location*</label>
                        <input value={location} onChange={(e) =>setlocation(e.target.value)} className={error_arr.includes('location')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type='text' placeholder='Enter-location' name='text' />
                    </div>
                    <div className='flex items-center'>
                        <label className='w-[20%] text-[13px] md:text-xl'>Occupation*</label>
                        <input value={occupation} onChange={(e) =>setoccupation(e.target.value)} className={error_arr.includes('occupation')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type='text' placeholder='Enter-Occupation' name='text' />
                    </div>
                    <div className='flex items-center w-full'>
                        <p className='w-[20%] text-[13px] md:text-xl'>image-profile*</p>
                        <label className='border border-gray-300 rounded-md py-3 px-4 shadow-My-box w-[80%] ml-auto block'>
                            <span className='cursor-pointer'><CiCamera className='mx-auto text-5xl mt-1'/></span>
                            <input onChange={(e) =>setimage(e.target.files[0])} className='border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box hidden' id="inputTag" type="file"/>
                            {image && <p className='border border-gray-300 text-center rounded-md py-2 px-4'>{image.name}</p>}
                        </label>
                    </div>
                    <div className='flex items-center'>
                        <label className='w-[20%] text-[13px] md:text-xl'>email*</label>
                        <input value={email} onChange={(e) =>setemail(e.target.value)} className={error_arr.includes('email')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type='email' placeholder='Enter-email' name='email' />
                    </div>
                    <div className='relative flex items-center'>
                        <label className='w-[20%] text-[13px] md:text-xl'>password*</label>
                        <input onChange={(e)=>setpassword(e.target.value)} value={password}className={error_arr.includes('password dark:bg-slate-800 dark:border dark:border-black')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type={IsShowPss?'text':'password'} name='password' placeholder='password' />
                       <span onClick={()=> setIsShowPss(!IsShowPss)} className='absolute text-xl top-[50%] translate-x-[-50%] cursor-pointer translate-y-[-50%] right-[10px]'>{IsShowPss?<BiShow/>:<BiHide/>}</span>
                    </div>
                    {error_single && <p className='bg-danger p-2 text-center text-xl py-3 rounded-[6px] border border-[red]'>{error_single}</p>}
                    <button className='bg-primary-500 w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>Register</button>
        
                </form>
                <p className='border-b w-fit text-primary-600 border-primary-500'>already have an account ? <button onClick={handleDich}>login here</button></p> 
                
            </div>  
            )}
           
        </section>
    )
}

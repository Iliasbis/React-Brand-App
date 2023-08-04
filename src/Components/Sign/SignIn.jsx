import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { About } from '../App/About';
export const SignIn = () => {
    const [showPass,setShowPass]=useState(false);
    const handleShowPass=()=>{
        return setShowPass(!showPass);
    }
    return (
    <div>
        <div className='pt-24 px-2 sm:px-5'>
            <div className='my-5 w-full bg-indigo-200 rounded-xl h-full md:h-[500px] border border-indigo-200 flex-col md:flex-row flex'>
                <div style={{backgroundImage:`url(${logo})`}} className='w-full rounded-t-xl md:rounded-none md:w-1/3 md:rounded-l-xl h-60 md:h-full bg-contain bg-no-repeat bg-center bg-[#f5ebfc]'></div>
                <form className='self-center' onSubmit={(e)=>e.preventDefault()} action="" method="post">
                    <div className='flex flex-col justify-center py-5 md:py-0 px-5 md:px-20 '>
                        <div className='w-full md:w-7/12 py-5 overflow-hidden'>
                            <h3 className='text-2xl mb-4'>Welcome to E-Store,Sign In to Continue.</h3>
                            <p className='text-xs text-gray-500'>Don't have an account? <NavLink to="/signup"><span className='cursor-pointer text-black font-semibold underline'>Create a account</span></NavLink> It takes less than a minute.</p>
                        </div>
                        <div className='w-full flex flex-col'>
                            <p className='text-sm'>Email</p>
                            <input type="email" placeholder='your@email.com' required className='py-2 px-4 outline-indigo-400 text-indigo-700 rounded-md' />
                            <p className='text-sm mt-3'>Password</p>
                            {
                                showPass?<div className='w-full flex bg-white rounded-md pr-4 items-center'>
                                <input type="text" placeholder='password' required className='w-full py-2 px-4 outline-indigo-400 text-indigo-700 rounded-md'/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={handleShowPass} className="ml-2 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>:<div className='w-full flex bg-white rounded-md pr-4 items-center'>
                                <input type="password" placeholder='password' required className='w-full py-2 px-4 outline-indigo-400 text-indigo-700 rounded-md'/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={handleShowPass} className="ml-2 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </div>
                            }
                            <p className='text-sm text-center underline mt-2 mb-4 cursor-pointer'>Forget Password?</p>
                        </div>
                        <button type='submit' className='py-2 bg-indigo-500'>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
        <About/>
    </div>
  )
}

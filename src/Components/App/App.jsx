import React, { useState } from 'react'
import Hero from '../Home/Hero'
import './Nav.css'
import {Route, NavLink, Routes } from 'react-router-dom'
import { Shop } from '../Shop/shop'
import { Brands } from '../Brands/Brands'
import { Contact } from '../Contact/Contact'
import { SignIn } from '../Sign/SignIn'
import { SignUp } from '../Sign/SignUp'
import Cart from '../Cart/Cart'

const App=()=>{
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };  
    const [navMenu,setNavMenu] =useState(false)
    const handleMenu=()=>{
        setNavMenu(!navMenu);
    }
    const user= "";
    return (
        <div className='bg-gray-100'>
            <div className='w-full h-[60px] fixed bg-gray-200 z-10 nav shadow-sm md:h-[80px] sm:h-[70px] '>
                <div className='px-3 flex justify-between h-full w-full items-center'>
                    <div className='flex items-center'>
                        <NavLink to="/"><h1 className='text-2xl font-bold text-slate-700 sm:text-3xl cursor-pointer logo'>E-Store</h1></NavLink>
                    </div>
                    <div className="hidden md:flex">
                        <ul>
                            <NavLink to="/"><li>Home</li></NavLink>
                            <NavLink to="/shop"><li>Shop</li></NavLink>
                            <NavLink to="/brands"><li>Brands</li></NavLink>
                            <NavLink to="/contact"><li>Contact Us</li></NavLink>
                        </ul>
                    </div>
                    <div className='hidden sm:flex'>
                        <div className='flex items-center'>
                            <div className='bg-slate-200 px-1 py-1 rounded-xl flex items-center text-gray-700'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                                <input type="text" className='border-none bg-transparent outline-none px-2 text-indigo-600'placeholder='Search'/>
                            </div>
                            <div className='px-2 flex items-center text-gray-700'>
                                <div className='flex mx-2 more'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    <NavLink to="/cart"><p className='hidden mmd:flex px-1 cursor-pointer '>Cart</p></NavLink>
                                </div>
                                {
                                    user ?<div className='flex mx-1 more'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className='hidden mmd:flex px-1 cursor-pointer '>{user}</p>
                                </div>
                                    :
                                    <NavLink to="/signIn">
                                        <div className='flex mx-1 more'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className='hidden mmd:flex px-1 cursor-pointer '>Sign In</p>
                                    </div>
                                    </NavLink>
                                }
                            </div>
                        </div>
                    </div>
                    {
                        !navMenu
                        ?
                        <div className='flex md:hidden' onClick={handleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-all duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        :
                        <div className='flex md:hidden' onClick={handleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    }
                </div>
                <div className='flex md:hidden'>
                <div className={navMenu?'bg-gray-100  h-screen mx-2 py-4 rounded-xl w-full flex flex-col px-4':"hidden"}>
                    <ul>
                        <NavLink to="/"><li onClick={()=>setNavMenu(!navMenu)} className='w-full border-b-2 border-gray-500 py-3 text-center'>Home</li></NavLink>
                        <NavLink to="/shop"><li onClick={()=>setNavMenu(!navMenu)} className='w-full border-b-2 border-gray-500 py-3 text-center'>Shop</li></NavLink>
                        <NavLink to="/brands"><li onClick={()=>setNavMenu(!navMenu)}  className='w-full border-b-2 border-gray-500 py-3 text-center'>Brands</li></NavLink>
                        <NavLink to="/contact"><li onClick={()=>setNavMenu(!navMenu)}  className='w-full border-b-2 border-gray-500 py-3 text-center'>Contact Us</li></NavLink>
                    </ul>
                    <NavLink to="/signIn"><button onClick={()=>setNavMenu(!navMenu)} className='w-full border bg-transparent text-black my-2 py-2 px-2'>Sign in</button></NavLink>
                    <NavLink to="/signup"><button onClick={()=>setNavMenu(!navMenu)} className='w-full border my-2 py-2 px-2'>Sign up</button></NavLink>
                </div>  
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Hero/>}></Route>
                <Route path='/shop' element={<Shop addToCart={addToCart}/>}></Route>
                <Route  path="/cart" element={<Cart cartItems={cartItems}/>}></Route>
                <Route path='/brands' element={<Brands/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/signIn' element={<SignIn/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
            </Routes>
        </div>
    )
}
export default App;
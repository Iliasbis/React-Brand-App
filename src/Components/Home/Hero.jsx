import React, { useEffect, useState } from 'react'
import './Hero.css'
import img1 from '../../Assets/Slides/img1.jpg'
import img3 from '../../Assets/Slides/img3.jpg'
import img4 from '../../Assets/Slides/img4.jpg'
import logo1 from '../../Assets/Brands/nike.png'
import logo2 from '../../Assets/Brands/adidas.png'
import logo3 from '../../Assets/Brands/gucci.png'
import logo4 from '../../Assets/Brands/levis.png'
import logo5 from '../../Assets/Brands/chanel.png'
import logo6 from '../../Assets/Brands/calvin.png'
import product1 from '../../Assets/Products/hoodie.png'
import product2 from '../../Assets/Products/sneakers.png'
import product3 from '../../Assets/Products/tshirt.png'
import fashion from '../../Assets/Fashion/fashion.jpg'
import { NavLink } from 'react-router-dom'
import { About } from '../App/About'
const Hero = () => {
    const slides =[
        {
            url:img1
        },
        {
            url:img3
        },
        {
            url:img4
        },
    ]
    const featured =[
        {
            url:product1,
            title:"Hoodies"
        },
        {
            url:product2,
            title:"Sneakers"
        },
        {
            url:product3,
            title:"Shirts"

        }
    ]
    const brand=[
        {
            url:logo1
        },
        {
            url:logo2
        },
        {
            url:logo3
        },
        {
            url:logo4
        },
        {
            url:logo5
        },
        {
            url:logo6
        },
    ]
    const [imageIndex,setImageIndex]=useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(imageIndex === slides.length - 1 ? 0 : imageIndex + 1);
        }, 5000);
    
        return () => clearInterval(interval);
        }, [imageIndex, slides.length]);
    // const handleNext=()=>{
    //     imageIndex===slides.length -1 ? setImageIndex(0):setImageIndex(imageIndex+1)
    // }
    // const handlePrev=()=>{
    //     imageIndex===0 ? setImageIndex(slides.length-1):setImageIndex(imageIndex-1)
    // }
    return (
    <div className='bg-gray-100'>
    <div className='md:text-black bg-gray-100 w-full py-4 px-5 sm:px-10 h-full md:py-4 md:flex flex-col items-center justify-start main'>
        <div className='flex flex-col items-center justify-evenly h-[600px] my-20 rounded-3xl md:flex-row card1  md:h-[500px] md:w-full'>
            {/* <div onClick={handlePrev} className='hidden md:flex bg-gray-500 px-2 py-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div> */}
            <div style={{backgroundImage:`url(${slides[imageIndex].url})`}} className='opacity-90 bg-cover bg-no-repeat rounded-3xl bg-top duration-500 ease-in-out w-full h-full'>
                <div className='bg-black bg-opacity-60 h-full w-full rounded-3xl py-3 px-2 flex flex-col items-center justify-evenly'>
                    <p className='cursor-pointer text-4xl sm:text-7xl text-center text-gray-300 '>Level up your style with our summer collections</p> 
                    <NavLink to="/shop"><button className='py-3 border-2 px-7 hover:text-white hover:border-2'>Shop Now</button></NavLink>
                </div>
            </div>    
            {/* <div onClick={handleNext} className='hidden md:flex bg-gray-500 px-2 py-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div> */}
            {/* <div className='flex w-full justify-evenly my-2 md:hidden'>
                <div onClick={handlePrev} className='bg-gray-500 px-2 py-2 rounded-full md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div onClick={handleNext} className='bg-gray-500 px-2 py-2 rounded-full md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div> */}
        </div> 
        <div className='flex flex-col justify-start items-start w-full mb-7'>
            <h3 className='text-4xl font-bold mb-7 text-indigo-500'>Brands</h3>
            <div className='flex w-full justify-between items-center flex-wrap'>
                {
                    brand.map((e)=>{
                        return (<div style={{backgroundImage:`url(${e.url})`}} className='w-10 h-10 mx-4 my-4 sm:w-14 sm:h-14 bg-contain bg-no-repeat bg-center'>
                        </div>)
                    })
                }
            </div>
        </div>
        <div className='my-8 w-full'>
            <div className='sm:flex justify-between flex-wrap mb-10'>
                <div className='w-full sm:w-1/3'><h2 className='text-2xl text-center sm:text-start sm:text-3xl font-bold'>We provide best customer experiences</h2></div>
                <div className='w-full sm:w-1/3 border-t-2 border-t-black my-6 pt-3 sm:border-l-2 sm:border-t-0 sm:border-l-black flex flex-col justify-center'><p className='px-5 text-gray-500'>We ensure our customers have the best shopping experiences</p></div>
            </div>
            <div className='sm:flex sm:justify-between'>
                <div className='w-full mb-4 bg-gray-200 p-2 rounded-xl sm:w-1/4 mr-4 card'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-300 rounded-xl p-2" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className='font-bold text-lg my-2'>Original Products</h4>
                    <p className='text-gray-400 text-sm '>We provide money back guarantee if the product are not original</p>
                </div>
                <div className='w-full mb-4 bg-gray-200 p-2 rounded-xl sm:w-1/4 mr-4 card'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-300 rounded-xl p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    <h4 className='font-bold text-lg my-2'>Satisfaction Guarantee</h4>
                    <p className='text-gray-400 text-sm '>Exchange the product you've purchased if it doesn't fit on you</p>
                </div>
                <div className='w-full mb-4 bg-gray-200 p-2 rounded-xl sm:w-1/4 mr-4 card'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-300 rounded-xl p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg> 
                    <h4 className='font-bold text-lg my-2'>New Arrival Everyday</h4>
                    <p className='text-gray-400 text-sm '>We updates our collections almost everyday</p>
                </div>
                <div className='w-full mb-4 bg-gray-200 p-2 rounded-xl sm:w-1/4 mr-4 card'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-300 rounded-xl p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                    <h4 className='font-bold text-lg my-2'>Fast & Free Shipping</h4>
                    <p className='text-gray-400 text-sm '>We offer fast and free shipping for our loyal customers</p>
                </div>
            </div>
        </div>
        <div className='w-full my-8'>
            <div className='sm:flex justify-between items-center flex-wrap mb-10'>
                <div className='w-full sm:w-1/2'><h2 className='text-2xl text-center text-indigo-500 sm:text-start sm:text-4xl font-bold'>Featured Products</h2></div>
                <div className='w-full sm:w-1/3 my-6 pt-3 flex justify-center sm:justify-end cursor-pointer'><NavLink to="/shop"><p className='px-5 sm:text-end text-gray-500 text-center'>See More</p></NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <div className='items-center sm:flex flex-wrap sm:justify-between'>
            {
                featured.map((e,index)=>{
                    return(
                            <div  className='m-4 product-card rounded-xl p-1'>
                                <div key={index} style={{backgroundImage:`url(${e.url})`}} className='bg-contain bg-center bg-no-repeat w-full mb-4 bg-gray-200 h-96 rounded-xl sm:w-80'></div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p key={index} className='text-xl text-gray-500'>{e.title}</p>
                                        {/* <p className='text-gray-900'></p> */}
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 text-white rounded-lg h-auto bg-gray-600 p-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </div>
        <div className='w-full h-full rounded-xl bg-transparent flex-col md:flex md:flex-row justify-between'>
            <div style={{backgroundImage:`url(${fashion})`}} className='bg-cover md:rounded-none bg-no-repeat bg-center h-80 w-full md:w-10/12 md:h-auto  rounded-t-xl md:rounded-l-xl bg-indigo-400'></div>
            <div className='w-full h-full px-10 py-10  rounded-b-xl md:rounded-none md:rounded-r-xl bg-[#1d242d] flex flex-col'>
                <p className='text-[#9299a5] uppercase text-sm'>Limited offer</p>
                <p className='text-white text-2xl md:text-4xl py-6'>35% off only this friday and get spectial gift</p>
                <NavLink to="/shop"><button className='px-2 py-2 md:py-2'>Grab it now</button> </NavLink>
            </div>
        </div>
        <div className='py-20 w-full md:w-1/2'>
            <p className='text-black text-xl sm:text-3xl text-center py-3'>Subscribe to our newsletter to get updates to our latest collections</p>
            <p className='text-[#9299a5] text-center text-xs sm:text-sm py-3'>Get 20% off on your first order just by subscribing to our newsletter</p>
            <div className='flex items-center justify-center my-3'>
                <div className='flex items-center px-3 py-1 bg-white rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#9299a5] ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <input type="text" placeholder='Enter your email' className='outline-none w-40 sm:w-full sm:mx-3 py-1' />
                </div>
                <button className='px-2 py-2 mx-1'>Subscribe</button>
            </div>
            <p className='text-[#9299a5] text-xs text-center '>You will be able to unsubscribe at any time .</p>
            <p className='text-[#9299a5] text-xs text-center'>Read our Privacy Policy <a href="#" className='text-black underline font-semibold'>here</a></p>
        </div>
    </div>
        <About/>
    </div>

)
}
export default Hero;
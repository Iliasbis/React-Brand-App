import React from 'react'
import { levisBrand,nikeBrand,brandsLogo,adidasBrands,gucciBrand,chanelBrand } from '../../Data/BrandsProduct'
import { About } from '../App/About'
export const Brands = () => {
    return (
    <div>
        <div className='pt-24 px-5'>
            <h3 className='text-2xl md:text-5xl text-center font-semibold text-[#ba90da]'>Our Trusted Brands</h3>
            <div>
                <div style={{backgroundImage:`url(${brandsLogo[0].url})`}} className=' w-28 h-20 bg-contain mx-4 mt-4 sm:w-32 sm:h-24 md:bg-cover bg-no-repeat bg-centermt-10 text-3xl'></div>
                <div className='w-full h-full flex overflow-x-scroll py-10 scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {
                        nikeBrand.map(p=>{
                            return(
                            <div className='mr-4 w-full h-full flex flex-col'>
                                <div className='bg-gray-300 w-[250px] md:w-full h-56 rounded-2xl flex flex-col'>
                                    <div className='self-end p-2 rounded-full bg-white mx-2 mt-2 text-[#777d86]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div style={{backgroundImage:`url(${p.imageUrl})`}} className='w-full md:w-80 h-full bg-contain bg-no-repeat bg-center'></div>
                                    
                                </div>
                                <div className='flex justify-between w-full my-1'>
                                    <p className='text-lg font-medium mr-6'>{p.title}</p>
                                    <p className='text-lg font-medium '>{p.price}</p>
                                </div>
                                <p className='text-sm text-[#9299a5] my-1'>{p.description}</p>
                                <button className='self-end rounded-full border-2 border-gray-500 bg-transparent hover:border-indigo-500 text-[#9299a5] text-sm px-4 py-2 add '>Add to Cart</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div style={{backgroundImage:`url(${brandsLogo[1].url})`}} className='w-28 h-20 bg-contain mx-4 mt-4 sm:w-32 sm:h-24 bg-no-repeat bg-centermt-10 text-3xl'></div>
                <div className='w-full h-full flex overflow-x-scroll py-10 scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {
                        adidasBrands.map(p=>{
                            return(
                            <div className='mr-4 w-full h-full flex flex-col'>
                                <div className='bg-gray-300 w-[250px] md:w-full h-56 rounded-2xl flex flex-col'>
                                    <div className='self-end p-2 rounded-full bg-white mx-2 mt-2 text-[#777d86]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div style={{backgroundImage:`url(${p.imageUrl})`}} className='w-full md:w-80 h-full bg-contain bg-no-repeat bg-center'></div>
                                    
                                </div>
                                <div className='flex justify-between w-full my-1'>
                                    <p className='text-lg font-medium mr-6'>{p.title}</p>
                                    <p className='text-lg font-medium'>{p.price}</p>
                                </div>
                                <p className='text-sm text-[#9299a5] my-1'>{p.description}</p>
                                <button className='self-end rounded-full border-2 border-gray-500 bg-transparent hover:border-indigo-500 text-[#9299a5] text-sm px-4 py-2 add '>Add to Cart</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div style={{backgroundImage:`url(${brandsLogo[2].url})`}} className='w-28 h-20 bg-contain mx-4 mt-4 sm:w-32 sm:h-24  bg-no-repeat bg-centermt-10 text-3xl'></div>
                <div className='w-full h-full flex overflow-x-scroll py-10 scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {
                        gucciBrand.map(p=>{
                            return(
                            <div className='mr-4 w-full h-full flex flex-col'>
                                <div className='bg-gray-300 w-[250px] md:w-full h-56 rounded-2xl flex flex-col'>
                                    <div className='self-end p-2 rounded-full bg-white mx-2 mt-2 text-[#777d86]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div style={{backgroundImage:`url(${p.imageUrl})`}} className='w-full md:w-80 h-full bg-contain bg-no-repeat bg-center'></div>
                                    
                                </div>
                                <div className='flex justify-between w-full my-1'>
                                    <p className='text-lg font-medium mr-6'>{p.title}</p>
                                    <p className='text-lg font-medium'>{p.price}</p>
                                </div>
                                <p className='text-sm text-[#9299a5] my-1'>{p.description}</p>
                                <button className='self-end rounded-full border-2 border-gray-500 bg-transparent hover:border-indigo-500 text-[#9299a5] text-sm px-4 py-2 add '>Add to Cart</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div style={{backgroundImage:`url(${brandsLogo[3].url})`}} className='w-28 h-20 bg-contain mx-4 mt-4 sm:w-32 sm:h-24 bg-no-repeat bg-centermt-10 text-3xl'></div>
                <div className='w-full h-full flex overflow-x-scroll py-10 scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {
                        levisBrand.map(p=>{
                            return(
                            <div className='mr-4 w-full h-full flex flex-col'>
                                <div className='bg-gray-300 w-[250px] md:w-full h-56 rounded-2xl flex flex-col'>
                                    <div className='self-end p-2 rounded-full bg-white mx-2 mt-2 text-[#777d86]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div style={{backgroundImage:`url(${p.imageUrl})`}} className='w-full md:w-80 h-full bg-contain bg-no-repeat bg-center'></div>
                                    
                                </div>
                                <div className='flex justify-between w-full my-1'>
                                    <p className='text-lg font-medium mr-6'>{p.title}</p>
                                    <p className='text-lg font-medium'>{p.price}</p>
                                </div>
                                <p className='text-sm text-[#9299a5] my-1'>{p.description}</p>
                                <button className='self-end rounded-full border-2 border-gray-500 bg-transparent hover:border-indigo-500 text-[#9299a5] text-sm px-4 py-2 add '>Add to Cart</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div style={{backgroundImage:`url(${brandsLogo[4].url})`}} className='w-28 h-20 bg-contain mx-4 mt-4 sm:w-32 sm:h-24 bg-no-repeat bg-centermt-10 text-3xl'></div>
                <div className='w-full h-full flex overflow-x-scroll py-10 scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {
                        chanelBrand.map(p=>{
                            return(
                            <div className='mr-4 w-full h-full flex flex-col'>
                                <div className='bg-gray-300 w-[250px] md:w-full h-56 rounded-2xl flex flex-col'>
                                    <div className='self-end p-2 rounded-full bg-white mx-2 mt-2 text-[#777d86]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div style={{backgroundImage:`url(${p.imageUrl})`}} className='w-full md:w-80 h-full bg-contain bg-no-repeat bg-center'></div>
                                    
                                </div>
                                <div className='flex justify-between w-full my-1'>
                                    <p className='text-lg font-medium mr-6'>{p.title}</p>
                                    <p className='text-lg font-medium'>{p.price}</p>
                                </div>
                                <p className='text-sm text-[#9299a5] my-1'>{p.description}</p>
                                <button className='self-end rounded-full border-2 border-gray-500 bg-transparent hover:border-indigo-500 text-[#9299a5] text-sm px-4 py-2 add '>Add to Cart</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <About/>
    </div>
  )
}

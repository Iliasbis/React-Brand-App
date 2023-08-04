import React from 'react'

export const About = () => {
  return (
    <div className='border-t-2 border-t-gray-300 mt-1 bg-slate-200 w-full py-2 flex flex-col items-center justify-evenly'>
                <div className='flex flex-col items-center'>
                    <h3 className='text-xl text-slate-700 sm:text-3xl'>E-Store</h3>
                    <p className='text-sm sm:text-md text-[#52565c] text-center'>Specializes in providing high-quality, stylish products for your wardrobe</p>
                </div>
                <p className='text-[#9299a5] text-xs text-center sm:text-sm'>
                    Copyright ©2023 E-Store.All right reserved
                </p>
        </div>
  )
}

import React from 'react';

function Cart({ cartItems }) {
    return (
    <div>
        <div className='pt-24 px-5 '>
        <h2>Cart Items</h2>
        <div className='flex w-full xsm:justify-between flex-wrap justify-center px-10'>
        {cartItems.map((p) => (
                <div className='w-full h-full mt-12 flex flex-col'>
                <div className='bg-gray-300 h-56 rounded-2xl flex flex-col'>
                    <div className='self-end p-2 rounded-full bg-white mx-2 mt-2 text-[#777d86]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <div style={{backgroundImage:`url(${p.imageUrl})`}} className='w-full h-full bg-contain bg-no-repeat bg-center'></div>
                    
                </div>
                <div className='flex justify-between w-full my-1'>
                    <p className='text-lg font-medium'>{p.title}</p>
                    <p className='text-lg font-medium'>{p.price}</p>
                </div>
                <p className='text-sm text-[#9299a5] my-1'>{p.description}</p>
                <button className='self-end rounded-full border-2 border-gray-500 bg-transparent hover:border-indigo-500 text-[#9299a5] text-sm px-4 py-2 add'>Add to Cart</button>
            </div>
        ))}
        </div>
        </div>
    </div>
);
}

export default Cart;

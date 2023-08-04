import React from 'react'
import fashion2 from '../../Assets/Fashion/fashion2.avif'
import './shop.css'
import pr1 from '../../Assets/Products/pr1.png'
import pr2 from '../../Assets/Products/pr2.png'
import pr3 from '../../Assets/Products/pr3.png'
import pr4 from '../../Assets/Products/pr4.png'
import pr5 from '../../Assets/Products/pr5.png'
import pr6 from '../../Assets/Products/pr6.png'
import pr7 from '../../Assets/Products/pr7.png'
import pr8 from '../../Assets/Products/pr8.png'
import pr9 from '../../Assets/Products/pr9.png'
import pr10 from '../../Assets/Products/pr10.png'
import pr11 from '../../Assets/Products/pr11.png'
import pr12 from '../../Assets/Products/pr12.png'
import pr13 from '../../Assets/Products/pr13.png'
import pr14 from '../../Assets/Products/pr14.png'
import pr15 from '../../Assets/Products/pr15.png'
import pr16 from '../../Assets/Products/pr16.png'
import pr17 from '../../Assets/Products/pr17.png'
import pr18 from '../../Assets/Products/pr18.png'
import pr19 from '../../Assets/Products/pr19.png'
import sn1 from '../../Assets/Products/sneakers1.png'
import sn2 from '../../Assets/Products/sneakers2.png'
import sn3 from '../../Assets/Products/sneakers3.png'
import sn4 from '../../Assets/Products/sneakers4.png'
import sn5 from '../../Assets/Products/sneakers5.png'
import sn6 from '../../Assets/Products/sneakers6.png'
import t from '../../Assets/Products/tenu.png'
import { About } from '../App/About'
export function Shop({ addToCart }){
        function handleAddToCart(imgUrl,title,price,description){
            addToCart({
                imageUrl:imgUrl,
                title:title,
                price:price,
                description:description
            });
        };
    const products=[
        {
            imageUrl:pr1,
            title:'Raja Tenue',
            price:'$80',
            description:'Tenue raja original'
        },
        {
            imageUrl:pr2,
            title:'White T-shirt',
            price:'$50',
            description:'Polo original'
        },
        {
            imageUrl:pr3,
            title:'Red T-shirt',
            price:'$10',
            description:'original Red t-shirt'
        },
        {
            imageUrl:pr4,
            title:'Gray T-shirt',
            price:'$10',
            description:'original Gray t-shirt'
        },
        {
            imageUrl:pr5,
            title:'Black Hoodie',
            price:'$40',
            description:'Original zara black hoodie'
        },
        {
            imageUrl:pr6,
            title:'White Hoodie',
            price:'$50',
            description:'Original zara white hoodie'
        },
        {
            imageUrl:pr7,
            title:'Gray Hoodie',
            price:'$48',
            description:'Original zara gray hoodie'
        },
        {
            imageUrl:pr8,
            title:'Red Hoodie',
            price:'$30',
            description:'Original zara red hoodie'
        },
        {
            imageUrl:pr9,
            title:'Green Hoodie',
            price:'$60',
            description:'Original zara green hoodie'
        },
        {
            imageUrl:pr10,
            title:'Nike T-jacket',
            price:'$80',
            description:'Original Nike t-jacket'
        },
        {
            imageUrl:pr11,
            title:'Nike hoodie',
            price:'$90',
            description:'Original Nike hoodie'
        },
        {
            imageUrl:pr12,
            title:'American Strong hoodie',
            price:'$30',
            description:'American strong'
        },
        {
            imageUrl:pr13,
            title:'Blue hoodie',
            price:'$20',
            description:'Blue Zara hoodie'
        },
        {
            imageUrl:pr14,
            title:'Black T-shirt',
            price:'$10',
            description:'Black t-shirt'
        },
        {
            imageUrl:pr15,
            title:'Levis T-jacket',
            price:'$90',
            description:'Blue Levis Jean T-jacket'
        },
        {
            imageUrl:sn5,
            title:'Nike Air Force',
            price:'$200',
            description:'Original white air force '
        },
        {
            imageUrl:pr17,
            title:'Zara T-jacket',
            price:'$200',
            description:'Blue Zara T-jacket'
        },
        {
            imageUrl:sn2,
            title:'Sport Sneakers',
            price:'$170',
            description:'Original nike sneakers'
        },
        {
            imageUrl:pr19,
            title:'Lacoste T-shirt',
            price:'$190',
            description:'Original lacoste t-shirt'
        },
        {
            imageUrl:sn1,
            title:'Sport Sneakers',
            price:'$170',
            description:'Original nike sneakers'
        },
        {
            imageUrl:sn6,
            title:'Nike Air Force',
            price:'$240',
            description:'Original blue air force '
        },
        {
            imageUrl:sn3,
            title:'Nike Sneakers',
            price:'$190',
            description:'Original nike sneakers'
        },
        {
            imageUrl:pr16,
            title:'Levis Jeans',
            price:'$120',
            description:'Blue Levis jeans'
        },
        {
            imageUrl:sn4,
            title:'Nike Air Max',
            price:'$230',
            description:'Original red nike air max '
        },
        {
            imageUrl:t,
            title:'White Raja Tenu',
            price:'$50',
            description:'Original Raja tenue '
        },
        {
        imageUrl:pr18,
            title:'Under T-shirt',
            price:'$20',
            description:'under t-shirt for men'
        },
    ]
    return (
        <div>
            <div className='pt-24 px-5 '>
                <div className='w-full h-full rounded-xl bg-transparent flex flex-col-reverse md:flex md:flex-row justify-between'>
                    <div className='w-full h-full px-10 py-10  rounded-b-xl md:rounded-none md:rounded-l-xl bg-[#1d242d] flex flex-col'>
                        <p className='text-[#9299a5] uppercase text-xs sm:text-sm'>Limited offer</p>
                        <p className='text-white text-xl sm:text-4xl py-6'>15% off for your first shop</p>
                        <button className='px-2 py-2 md:py-2'>Buy now</button> 
                    </div>
                    <div style={{backgroundImage:`url(${fashion2})`}} className='bg-cover md:rounded-none bg-no-repeat bg-start h-80 w-full md:w-10/12 md:h-auto  rounded-t-xl md:rounded-r-xl bg-indigo-400'></div>
                </div>
                <div className='my-10 py-2'>
                    <h3 className='text-2xl md:text-start text-center md:text-3xl font-bold text-indigo-500'>Clothes For You !</h3>
                    <div className='flex w-full xsm:justify-between flex-wrap justify-center'>
                        {
                            products.map(p=>{
                                return(
                                <div className='w-60 h-full mt-12 flex flex-col'>
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
                                    <button className='self-end rounded-full border-2 border-gray-500 bg-transparent hover:border-indigo-500 text-[#9299a5] text-sm px-4 py-2 add'onClick={()=>handleAddToCart(p.imageUrl,p.title,p.price,p.description)}>Add to Cart</button>
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

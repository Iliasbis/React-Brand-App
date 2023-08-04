import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { About } from '../App/About'

export const Contact = () => {
  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  const [checkbox,setCheckBox]=useState()
  const navigate = useNavigate();
  const submitUser=async ()=>{
      try{
          await axios.post("http://localhost:3001/contact",{fName:firstName,lName:lastName,phone:phone,e:email}).then(navigate('/'))
      }
      catch(e){
          console.error(e)
      }
  }
  return (
      <div>
        <div className='pt-24 px-5 '>
          <div className='w-full flex flex-col justify-between items-center mb-7'>
            <h2 className='text-2xl md:text-4xl font-semibold text-center my-2'>Contact Us</h2>
            <p className='text-gray-500 text-sm md:text-base md:w-1/2 text-center'>Fill out the form and a member from our sales team will get back to you within 24 hours, or scroll down for more ways to get in touch.</p>
          </div>
          <div className='w-full flex flex-col md:flex-row h-full my-8 rounded-2xl'>
              <div className='w-full md:w-1/4 bg-slate-700 py-10 px-4 sm:px-8 md:rounded-none rounded-t-xl md:rounded-l-2xl'>
                  <p className='text-white sm:text-xl font-semibold'>Contact Business Solution Sales</p>
                  <p className='text-xs sm:text-sm my-4 text-white'>Already a customer or need help with a billing issue? <span className='text-indigo-400'>Contact Support</span></p>
                  <p className='text-gray-400 text-xs sm:text-sm py-2'>Europe / Assia / australia / pacific sales</p>
                  <p className='text-white text-xs sm:text-sm py-2'>Fill out your details to be contaced.</p>
              </div>
              <div className='w-full bg-indigo-100 py-10 px-6 flex rounded-b-xl md:rounded-none md:rounded-r-2xl'>
                <div className='w-full'>
                  <p className='pb-2 text-gray-600'>First Name</p>
                  <input type="text" className='outline-none w-full py-2 rounded-lg mb-4 px-2' onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' />
                  <p className='pb-2 text-gray-600'>Last Name</p>
                  <input type="text" className='outline-none w-full py-2 rounded-lg mb-4 px-2'  onChange={(e)=>setLastName(e.target.value)} placeholder='last Name' />
                  <p className='pb-2 text-gray-600'>Email</p>
                  <input  type="email" className='outline-none w-full py-2 rounded-lg mb-4 px-2'  onChange={(e)=>setEmail(e.target.value)} placeholder='you@gmail.com' />
                  <p className='pb-2 text-gray-600'>Phone</p>
                  <input type="tel" className='outline-none w-full py-2 rounded-lg mb-4 px-2'  onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' />
                  <div className='my-4'>
                    <div className='flex items-center'>
                      <input type="checkbox" onChange={(e)=>console.log(setCheckBox(e.target.value))}/>
                      <p className='inline-block px-2 text-gray-500 text-xs sm:text-sm' >Yes, I would like to receive news and offers from E-Store via email</p>
                    </div>
                    <br />
                    <div className='flex items-center'>
                      <input type="checkbox"/>
                      <p className='inline-block px-2 text-gray-500 text-xs sm:text-sm'>Yes, I agree to receive phone calls from E-Store</p>
                    </div>
                  </div>
                  <button className='px-6 py-2 bg-indigo-600' type='submit' onClick={submitUser}>Submit</button>
                </div>
              </div>
          </div>
        </div>
        <About/>
      </div>
  )
}

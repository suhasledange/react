import React from 'react'
import { cart, logo, profile } from '../assets'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='bg-white shadow-lg p-4 sticky top-0'>
    <div className=' max-w-screen-xl mx-auto flex items-center justify-between gap-4 space-x-3'>
        <div className='w-72 text-gray-300'>
            <img className='w-full h-full' src={logo}/>
        </div>
        <div className='bg-gray-100 rounded-md flex items-center justify-start p-2 w-full gap-2'>
                <FaSearch className='font-medium text-gray-400'/>
                <input type='search' className='w-full focus:outline-none bg-transparent ' placeholder='Search for Products, Brands and More'/>
        </div>
        <div className='flex items-center justify-center w-full gap-3 space-x-10'>

        <div className='flex items-center justify-center '>
            <img src={profile} className=''/>
            <h1 className='text-lg font-medium text-gray-600'>Login</h1>
        </div>
        <div className='flex items-center justify-center gap-1'>
            <img src={cart} className=''/>
            <h1 className='text-lg font-medium text-gray-600'>Cart</h1>
        </div>
        <div className='flex items-center justify-center gap-1'>
            <h1 className='text-lg font-medium text-gray-600'>Become a Seller</h1>
        </div>
        </div>

    </div>
    </nav>
  )
}

export default Navbar

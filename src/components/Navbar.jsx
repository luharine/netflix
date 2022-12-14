import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
       <Link to='/'> <h1 className='text-red-600 text-5xl font-bold cursor-pointer'>NETFLIX</h1>
       </Link>
        <div>
          
           <Link to='/login'> <button className='text-white  px-6 py-3.5 rounded cursor-pointer' >Sign In</button></Link>
           <Link to='/signup'>  <button className='bg-red-600 text-white px-6 py-3.5 rounded cursor-pointer'>Sign Up</button></Link>
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='p-4 bg-red-700 text-white flex justify-between'>
        <h1 className='font-bold text-4xl'>React routing</h1>
        <div className='flex gap-5 text-3xl font-semibold'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
        </div>
    </div>
  )
}

export default Navbar
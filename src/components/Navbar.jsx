import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../context/userContext'

const Navbar = () => {
  const nameData= useContext(userContext);
  return (
    <div className='p-4 bg-red-700 text-white flex justify-between'>
        <h1 className='font-bold text-4xl'>React routing</h1>
        <div className='flex gap-5 text-3xl font-semibold'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
            <h1>{nameData.user}</h1>
        </div>
    </div>
  )
}

export default Navbar
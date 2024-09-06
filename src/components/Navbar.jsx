import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../context/userContext'

const Navbar = () => {
  const {user, isAuth, setIsAuth}= useContext(userContext);
  
  return (
    <div className='p-4 bg-red-700 text-white flex justify-between'>
        <h1 className='font-bold text-4xl'>React routing</h1>
        <div className='flex gap-5 text-3xl font-semibold'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
            <h1>{user}</h1>
            <button onClick={()=>{setIsAuth(isAuth?false:true)}}> {isAuth?"LogOut":"Signin"}</button>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Signup from './components/Signup'
import Admin from './components/Admin'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/admin' element={<Admin/>}>
             <Route path="/admin/login" element={<Login />} />
             <Route path="/admin/about" element={<About/>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
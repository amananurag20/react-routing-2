import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import userContext from "./context/userContext";
import colorContext from "./context/colorContext";

const App = () => {
  const [user, setUser] = useState("aman");

  return (
    <div>
      <BrowserRouter>
      <colorContext.Provider value={{color:"red"}}>
      <userContext.Provider value={{ user, setUser }}>
        <Navbar />        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Admin />}>
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </userContext.Provider>
        </colorContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

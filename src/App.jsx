import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import userContext from "./context/userContext";
import colorContext from "./context/colorContext";
import Product from "./components/Product";
import Protected from "./components/Protected";

const App = () => {
  const [user, setUser] = useState("aman");
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <colorContext.Provider value={{ color: "red" }}>
          <userContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
            <Navbar />
            <Routes>
              
              <Route path="/login" element={<Login />} />
              <Route element={<Protected />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<Product />} />
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

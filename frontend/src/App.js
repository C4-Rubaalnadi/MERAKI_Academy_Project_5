import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import UserProfile from "./components/userInfo/UserProfile";
import Cart  from "./components/cart/Cart";


function App() {
  const [userInfo,setUserInfo] = useState({});

  return (
    <div className="App">
      <Navigation userInfo={userInfo} />
      <Routes>
        <Route path="/login" element={<Login setUserInFo={setUserInfo} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile userInfo={userInfo}  />} />
        <Route path="/home" element={<Home userInfo={userInfo}/>} />
        <Route path="/cart" element={<Cart userInfo={userInfo}/>}/>
      </Routes>
    </div>
  );
}

export default App;
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard";
import Login from "./components/login/login";
import Register from "./components/register/register";
import UserProfile from "./components/userInfo/UserProfile";
import Cart  from "./components/cart/Cart";
function App() {
  const [userInfo,setUserInfo] = useState({});
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login setUserInFo={setUserInfo} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile userInfo={userInfo}  />} />
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo}/>} />
        <Route path="/cart" element={<Cart userInfo={userInfo}/>}/>
      </Routes>
    </div>
  );
}

export default App;
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard";
import Login from "./components/login/login";
import Rigister from "./components/Rigister";
import UserProfile from "./components/userInfo/UserProfile";
function App() {
  const [userInfo,setUserInfo] = useState({});
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login setUserInFo={setUserInfo} />} />
        <Route path="/register" element={<Rigister />} />
        <Route path="/profile" element={<UserProfile userInfo={userInfo}  />} />
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo}/>} />
      </Routes>
    </div>
  );
}

export default App;
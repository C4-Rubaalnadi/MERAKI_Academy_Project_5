import "./login.css"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../reducer/login/index";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
/////////////
//==============================================================================

const Login = ({setUserInFo}) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  //========================================
  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login/", {
        email,
        password,
      });
      if (res.data.success) {
        setMessage("");
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data.token));
        setUserInFo(res.data.payload);
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };

  //========================================

  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/dashboard");
    }
  });

  //========================================

  return (
    <>
    <div className="">
      <div className="divLogin">
        <p className="TitleLogin">Login</p>
        <p className="paragLogin">Please login below account detail</p>
        <form className="formLogin" onSubmit={loginUser}>
          <br />

          <input className="inputLogin"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input className="inputLogin"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="btnLogin">Sign in</button>
        </form>

        {status
          ? message && <div className="SuccessMessage">{message}</div>
          : message && <div className="ErrorMessage">{message}</div>}
      </div>
      <div>

      </div>
      </div>
    </>
  );
};

export default Login;
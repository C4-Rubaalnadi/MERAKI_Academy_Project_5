import "./navigation.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../reducer/login/index";
import { useDispatch, useSelector } from "react-redux";

//===============================================================

const Navigation = ({ userInfo }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const navigate = useNavigate();

  //===============================================================

  return (
    <>
      <div className="divNavigation">
        {/* <div className="divJebnalak">
          <h1 className="jebnalak">Jebna</h1><h1 className="jebnalak2">lak</h1>
        </div> */}
        {state.isLoggedIn ? (
          <>
            <div className="divJebnalak">
              <h1 className="jebnalak">Jebna</h1>
              <h1 className="jebnalak2">lak</h1>
            </div>
            <div className="divLink">
              <div
                className="divProfile"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <i id="imgProfile" class="fas fa-user-circle"></i>
                <p className="name">{userInfo.firstName}</p>
              </div>
              <Link
                className="Link"
                to={userInfo.role === 1 ? "/home" : "/admin"}
              >
               {userInfo.role === 1 ? "Home":"Dashboard"}
              </Link>
              <div className="divLogout">
              <i id="logoutIcon" class="fas fa-sign-out-alt"></i>
              <p
                className="logout"
                onClick={() => {
                  dispatch(logout());
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout
              </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="divJebnalak">
              <h1 className="jebna">Jebna</h1>
              <h1 className="jebnalak2">lak</h1>
            </div>
            <div className="divLink2">
              <Link className="Link" to="/register">
                Register
              </Link>
              <Link className="Link" to="/login">
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navigation;

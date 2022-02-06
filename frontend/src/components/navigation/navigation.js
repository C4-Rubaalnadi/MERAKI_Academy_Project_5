import "./navigation.css";
import React from "react";
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
        <div className="divJebnalak">
          <h1 className="jebnalak">Jebna</h1><h1 className="jebnalak2">lak</h1>
        </div>
        {state.isLoggedIn ? (
          <>
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
              <Link className="Link" to="/home">
                Home
              </Link>
              <div className="divLogout">
              <i id="logoutIcon" class="fas fa-sign-out-alt"></i>
              <p
                className="logout"
                onClick={() => {
                  dispatch(logout());
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Logout
              </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link className="Link" to="/register">
              Register
            </Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navigation;

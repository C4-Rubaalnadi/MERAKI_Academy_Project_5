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
        <div>
          <h1 className="jebnalak">Jebnalak</h1>
        </div>
        {state.isLoggedIn ? (
          <>
            <div className="divLink">
              <Link className="Link" to="/home">
                Home
              </Link>
              <div
                className="divProfile"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <i id="imgProfile" class="fas fa-user-circle"></i>
                <p className="name">{userInfo.firstName}</p>
              </div>
              <button
                className="logout"
                onClick={() => {
                  dispatch(logout());
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Logout
              </button>
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

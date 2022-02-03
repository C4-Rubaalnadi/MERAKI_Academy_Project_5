import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../reducer/login/index";
import { useDispatch, useSelector } from "react-redux";

//===============================================================

const Navigation = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  //===============================================================

  return (
    <>
      <div className="NavBar">
        {state.isLoggedIn ? (
          <>
            <Link className="Link" to="/dashboard">
              Dashboard
            </Link>
            <button
              className="logout"
              onClick={() => {
                dispatch(logout());
                localStorage.clear();
              }}
            >
              Logout
            </button>
            <Link to="/profile"> Profile </Link>
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

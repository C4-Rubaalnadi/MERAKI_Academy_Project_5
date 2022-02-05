import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../reducer/login/index";
import { useDispatch, useSelector } from "react-redux";

//===============================================================

const Navigation = () => {
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
      <div className="NavBar">
        {state.isLoggedIn ? (
          <>
            <Link className="Link" to="/home">
              Home
            </Link>
            <Link to="/profile"> Profile </Link>
            <button
              className="logout"
              onClick={() => {
                dispatch(logout());
                localStorage.clear();
                navigate("/login")
              }}
            >
              Logout
            </button>
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

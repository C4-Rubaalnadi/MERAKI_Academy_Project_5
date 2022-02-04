import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import "../App.css";
import "./userStyle.css"
import axios from "axios";
////////////////////////////////////////////
//role_id??
const UserProfile = ({ userInfo }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      LoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });
  const imag = userInfo.image; 
  return (
    <>
      <div className="profile">
        {userInfo ? 
        (
            <>
               <img
                src={imag}
                alt="userImg"
                className="userImg"
                // style={{ width: "10%", marginLeft: "-21%" }}
              />
             <span></span>
              <div className="userInfo">
            <p> {userInfo.firstName} {userInfo.lastName} </p>
            <p> {userInfo.email} </p>
            <p> {userInfo.country} </p>
              </div>
            </>
            

        ):(<></>)
        }

      </div>
    </>
  );
};
export default UserProfile;

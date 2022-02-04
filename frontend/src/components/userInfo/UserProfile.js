import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import "../App.css";
import "./userStyle.css";
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
      <div className="user-content">
        {userInfo ? (
          <>
      <div className="profile">
            <div className="profile-img">
              <div className="title">
                <p>Account Details:</p>
              </div>
              <img
                src={imag}
                alt="userImg"
                className="userImg"
                // style={{ width: "10%", marginLeft: "-21%" }}
              />
              <span></span>
            </div>
            <div className="userInfo">
              <p>
                {" "}
                {userInfo.firstName} {userInfo.lastName}{" "}
              </p>
              <div className="email-prof">
              <p> {userInfo.email} </p>
              </div>
              <p> {userInfo.country} </p>
            </div>
          </div>
          <div className="welcom">
          <p className="message"> Welcome {userInfo.firstName} </p>
          <p className="my-account"> My Account: </p>
          </div>
          </>
        ) : (
          <></>
          )}
        </div>
    </>
  );
};
export default UserProfile;
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
  const imag = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg";
  return (
    <>
      <div className="user-content">
        {userInfo ? (
          <>
            <div className="welcom">
              <p className="message"> Welcome {userInfo.firstName} </p>
            </div>
            <div className="line"></div>
            <div className="profile">
              <p className="details">Account Details:</p>
              <div className="userInfo">
                <div className="profile-img">
                  <img
                    src={imag}
                    alt="userImg"
                    className="userImg"
                    // style={{ width: "10%", marginLeft: "-21%" }}
                  />
                </div>
                <div className="info-prof">

                <p>
                  {" "}
                  {userInfo.firstName} {userInfo.lastName}{" "}
                </p>
                  <p> {userInfo.email} </p>
                </div>
              </div>
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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./userProfile.css";


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
      <div className="divContainer">
        {userInfo ? (
          <>
            <div>
              <p className="welcome"> Welcome {userInfo.firstName} </p>
            </div>
            <div className="line"></div>
            <div className="profile">
              <p className="details">Account Details:</p>
              <div className="userInfo">
                <div className="profileImg">
                  <img
                    src={imag}
                    alt="userImg"
                    className="userImg"/>
                </div>
                <div className="infoProfile">

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

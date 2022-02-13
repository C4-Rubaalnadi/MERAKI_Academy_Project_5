import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./userProfile.css";
import { useNavigate } from "react-router-dom";
import FsvList from "../fav-list/FsvList";
//======================================================

const UserProfile = ({ userInfo }) => {
  const state = useSelector((state) => {
    return {
      LoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });
  const [favStatus, setFavStatus] = useState(false);
  const imag =
    "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg";
  const navigate = useNavigate();
  return (
    <>
      <div className="divContainer">
        <div className="user-cont">
          <div className="profile">
            <img src={imag} alt="userImg" className="userImg" />
            <p>
              {userInfo.firstName} {userInfo.lastName}
            </p>
          </div>
          <div className="user-info">
            <div
              className="favorate"
              onClick={() => {
                setFavStatus(true);
              }}
            >
              <p className="fl">My favorate list</p>
            </div>
            <div
              className="history"
              onClick={() => {
                setFavStatus(false);
              }}
            >
              <p className="history">My history</p>
            </div>
          </div>
        </div>
        {favStatus ? (
          <>
            <div className="favorate">
              <FsvList />
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
{
  /*{userInfo ? (
          <>
            <div>
              <p className="welcome"> Welcome {userInfo.firstName} </p>
            </div>
            <div className="line"></div>
            <div className="profile">
              <p className="details">Account Details:</p>
              <div className="userInfo">
                <div className="prof-cont">
                <div className="profileImg">
                  <img src={imag} alt="userImg" className="userImg" />
                </div>
                <div className="infoProfile">
                  <p>
                    {" "}
                    {userInfo.firstName} {userInfo.lastName}{" "}
                  </p>
                  <p> {userInfo.email} </p>
                </div>
                </div>
            <div className="user-fav">
              <p onClick={() => {
                navigate("/fav")
              }}> Your favorate list </p>
            </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}*/
}

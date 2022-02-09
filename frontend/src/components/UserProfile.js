import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";

const Profile = ({ userInfo }) => {
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
        {userInfo ? (
          <>
            <img
              src={imag}
              alt="userImg"
              style={{ width: "10%", marginLeft: "-21%" }}
            />
            <p> {userInfo.firstName} </p>
            <p> {userInfo.lastName} </p>
            <p> {userInfo.email} </p>
            <p> {userInfo.country} </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Profile;

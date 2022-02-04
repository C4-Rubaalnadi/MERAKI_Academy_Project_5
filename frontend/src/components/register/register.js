import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//-------------------------------------------------------------------------------------

//role_id??
const Register = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      LoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false); //to massege if true show true message if false show false message
  const role_id = 1; //as user

  //-----------------------------------------------------

  const addUserInfo = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/users", {
        firstName,
        lastName,
        country,
        email,
        password,
        role_id,
      });
      if (result.data.success) {
        setStatus(true);
        setMessage("The user has been created successfully");
      } else throw Error;
    } catch (error) {
      setStatus(false);
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while register, please try again");
    }
  };

  //----------------------------------------------------------

  return (
    <>
      <div className="containerRegister">
        <div className="divRegister">
          {!state.LoggedIn ? (
            <>
              <p className="TitleRegister">Register</p>
              <p className="paragLogin">Please login below account detail</p>
              <form onSubmit={addUserInfo}>
                <br />
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Country"
                  onChange={(e) => setCountry(e.target.value)}
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button>Register</button>
                <br />
              </form>
              {status
                ? message && <div className="SuccessMessage">{message}</div>
                : message && <div className="ErrorMessage">{message}</div>}
            </>
          ) : (
            <p>Logout First</p>
          )}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Register;

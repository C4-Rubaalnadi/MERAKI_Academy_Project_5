import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./cartStyle.css";
const Cart = ({userInfo}) => {
    const [order , setOrder] = useState();
    const state = useSelector((state) => {
        return {
          LoggedIn: state.loginReducer.isLoggedIn,
          token: state.loginReducer.token,
        };
      });
    const getCart = () => {
        axios
            .get("http://localhost:5000/orders/",{
            id : userInfo.userId
            })
            .then((res) => {
                console.log(userInfo);
                console.log(res.data);
                setOrder(res.data.result);
              })
              .catch((err) => {
                console.log(err);
              });
    }
    return (
        <>
        <button onClick={() => {getCart()}}> check</button>
        </>
    )
}
export default Cart;
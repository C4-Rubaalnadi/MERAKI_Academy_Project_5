import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cartStyle.css";
const Cart = ({ userInfo }) => {
  const [order, setOrder] = useState();
  const [item , setItem] = useState(1);
  const state = useSelector((state) => {
    return {
      LoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });
  // const getCart = () => {
  //   console.log(userInfo.userId);
  //   axios
  //     .get(`http://localhost:5000/orders/${userInfo.userId}`)
  //     .then((res) => {
  //       console.log(userInfo);
  //       console.log(res.data);
  //       setOrder(res.data.result);
  //       console.log(order);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${userInfo.userId}`)
      .then((res) => {
        setOrder(res.data.result);
        // setItem(res.data.result.quantity);
        // console.log(setItem);
        // console.log(userInfo);
        // console.log(res.data);
        // item += res.data.result.quantity;
        // console.log(order);
        // console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [order]);
  return (
    <>
      <div className="cart-detalis">
        <p> My Cart </p>
        <p> 1 Item</p>
      </div>
      {/* <button onClick={getCart}> check</button> */}
      {order &&
        order.map((ord, i) => {
          // if (ord[i].nameProduct){}
            return (
              <>
                <div className="cartt">
                  <div className="cart-cont">
                    <img className="cart-img" src={ord.image && ord.image} />
                    <div className="cart-desc">
                      <div className="cart-info">
                        <p>{ord.nameProduct && ord.nameProduct}</p>
                        <p className="cart-price">
                          {" "}
                          {ord.price && ord.price}JOD
                        </p>
                      </div>
                      <div className="cart-add">
                        <p className="cart-dec"> - </p>
                        <p className="cart-item"> {ord.quantity} </p>
                        <p className="cart-inc"> + </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </>
            );
        })}
    </>
  );
};
export default Cart;

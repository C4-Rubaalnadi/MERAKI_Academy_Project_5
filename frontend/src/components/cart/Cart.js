import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./cartStyle.css";

const Cart = ({ userInfo, finalPrice, setFinalPrice }) => {
  const [order, setOrder] = useState();

  const state = useSelector((state) => {
    return {
      LoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  const final_price = (result) => {
    result.map((element) => {
      // finalPrice += element.price;
      setFinalPrice(finalPrice + element.price);
      // console.log(finalPrice);
      // console.log(finalPrice);
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${userInfo.userId}`)
      .then((res) => {
        setOrder(res.data.result);
        final_price(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [order]);

  return (
    <>
      <div className="cartt-title">
        <p> My Cart </p>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {order &&
              order.map((ord, index) => {
                return (
                  <tr key={index} className="tr">
                    <td>
                      <img className="cart-img" src={ord.image && ord.image} />
                    </td>
                    <td>{ord.nameProduct && ord.nameProduct}</td>
                    <td>{ord.price && ord.price} JD</td>
                    <td>{ord.quantity && ord.quantity}</td>
                    <td>{ord.price && ord.price * ord.quantity} JD</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;


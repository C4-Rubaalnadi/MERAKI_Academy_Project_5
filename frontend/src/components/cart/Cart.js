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

{
  /* <div className="cartt">
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
</div> */
}
{
  /* <div className="cartt">
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
      <p className="cart-item"> {ord.quantity} </p>
    </div>
  </div>
</div>
<hr />
</div> */
}

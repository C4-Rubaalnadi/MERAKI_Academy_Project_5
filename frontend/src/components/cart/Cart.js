import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
      <div className="cart-contaner">
        <div className="cart-detalis">
          <p> Product </p>
          <p>Name </p>
          <p>Price </p>
          <p> Quantity </p>
          <p>Total Price </p>
        </div>
      </div>
      {order &&
        order.map((ord, i) => {
          // setFinalPrice(finalPrice + ord.price);
          return (
            <>
              <div className="cartt">
                <div className="cartt-contt">
                  <div className="car-img">
                    <img className="cart-img" src={ord.image && ord.image} />
                  </div>
                  <div className="cart-desc">
                    <div className="cart-info">
                      <p>{ord.nameProduct && ord.nameProduct}</p>
                    </div>
                    <div className="cart-pri">
                      <p className="cart-price">
                        {" "}
                        {ord.price && ord.price} JOD
                      </p>
                    </div>
                    <div className="cart-add">
                      <p className="cart-item">
                        {" "}
                        {ord.quantity && ord.quantity}{" "}
                      </p>
                    </div>
                    <div className="total-price">
                      <p> {ord.price && ord.price * ord.quantity} JOD</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p>{finalPrice} </p> */}
              {/* <div className="cart-cont">
              </div> */}
              {/* <hr /> */}
            </>
          );
        })}
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

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./cartStyle.css";
import { IoIosAddCircle, IoMdRemoveCircleOutline } from "react-icons/io";
import { TiDelete } from "react-icons/ti";

const Cart = ({ userInfo, finalPrice, setFinalPrice }) => {
  const [order, setOrder] = useState();

  const state = useSelector((state) => {
    return {
      LoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  // const final_price = (result) => {
  //   result.map((element) => {
  //     setFinalPrice(finalPrice + element.price);
  //   });
  // };

  const getALlUserOrder = () => {
    axios
      .get(`http://localhost:5000/orders/${userInfo.userId}`)
      .then((res) => {
        setOrder(res.data.result);
        console.log(res.data.result);
        console.log(userInfo.userId);
        // final_price(res.data.result);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getALlUserOrder();
  }, []);
  return (
    <>
      <div>
        <div className="myCartTitle">
          <p> My Cart </p>
        </div>
        <br />
        <div className="divTable">
          <table className="table">
            <thead>
              <tr className="thCart">
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
                    <tr key={index} className="trCart">
                      <td>
                        <img className="cartImg" src={ord.image && ord.image} />
                      </td>
                      <td>{ord.nameProduct && ord.nameProduct}</td>
                      <td>{ord.price && ord.price} JD</td>
                      <td>
                        <IoMdRemoveCircleOutline
                          onClick={() => {
                            axios
                              .put(
                                `http://localhost:5000/orders/edit/${ord.id}`,
                                {
                                  quantity: ord.quantity - 1,
                                  user_id: userInfo.userId,
                                }
                              )
                              .then((res) => {
                                console.log(res.data);
                                console.log(ord.id);
                                getALlUserOrder();
                                // ord.quantity +=1
                              })
                              .catch((err) => {
                                throw err;
                              });
                          }}
                        />

                        {ord.quantity && ord.quantity}
                        <IoIosAddCircle
                          onClick={() => {
                            axios
                              .put(
                                `http://localhost:5000/orders/edit/${ord.id}`,
                                {
                                  quantity: ord.quantity + 1,
                                  user_id: userInfo.userId,
                                }
                              )
                              .then((res) => {
                                console.log(res.data);
                                console.log(ord.id);
                                // ord.quantity +=1
                                getALlUserOrder();
                              })
                              .catch((err) => {
                                throw err;
                              });
                          }}
                        />
                      </td>
                      <td>{ord.price && ord.price * ord.quantity} JD</td>
                      <td>
                        <TiDelete
                          className="deleteIcons"
                          onClick={() => {
                            axios
                              .delete(
                                `http://localhost:5000/orders/delete/${userInfo.userId}/${ord.product_id}`
                              )
                              .then((res) => {
                                console.log(res.data);
                                getALlUserOrder();
                              })
                              .catch((err) => {
                                throw err;
                              });
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;

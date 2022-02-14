import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillCartCheckFill } from "react-icons/bs";
import "../orders/orders.css";
//
const Orders = () => {
  const [orders, setOrdes] = useState();
  const getAllOrder = () => {
    axios
      .get("http://localhost:5000/orders/search/cart")
      .then((res) => {
        setOrdes(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllOrder();
  }, [orders]);
  return (
    <>
      <div className="divContainerOrder">
        <div className="divOrderPage">
          <div className="OrderPage">
            <BsFillCartCheckFill className="orderIcon" />
            <h1>Orders List</h1>
          </div>
        </div>
        <div className="underLineO"></div>
        <div className="order-table">
          <table>
            <tr>
              <th>Cart id</th>
              <th>Product Name</th>
              <th>quantity</th>
              <th>Category</th>
              <th> Client </th>
            </tr>
            {orders &&
              orders.map((order) => {
                return (
                  <>
                    <tr>
                      <td> {order.id && order.id} </td>
                      <td>{order.nameProduct && order.nameProduct}</td>
                      <td>{order.quantity && order.quantity}</td>
                      <td>{order.type && order.type}</td>
                      <td>
                        {order.firstName && order.firstName}
                        {order.lastName && order.lastName}
                      </td>
                    </tr>
                  </>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;

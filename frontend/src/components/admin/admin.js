import React, { useState } from "react";
import Chart from "./chart";
import "../admin/admin.css";
import { GrDashboard } from "react-icons/gr";
import AdminNavigation from "./adminNavigation";
import { CgProductHunt } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
import Users from "./users/users";
import Orders from "./orders/orders";
import Products from "./products/products";
import { MdDashboard } from "react-icons/md";
const Admin = () => {
  const [users, setUsers] = useState(false);
  const [orders, setOrders] = useState(false);
  const [products, setProducts] = useState(false);
  const [chart, setChart] = useState(false);
  return (
    <div>
      <div className="adminPageContainer">
        <div className="adminPageWrapper">
          <div className="pageContainer">
            <div className="sideBar">
              <div className="adminDashboard"></div>
              <div className="adminDashboard">
                {" "}
                <MdDashboard className="dash" />
                <button
                  className="dashboardButton"
                  onClick={() => {
                    setUsers(false);
                    setOrders(false);
                    setProducts(false);
                    setChart(true);
                  }}
                >
                  {" "}
                  Dashboard
                </button>
              </div>
              <div className="adminDashboard">
                {" "}
                <CgProductHunt />
                <button
                  className="dashboardButton"
                  onClick={() => {
                    setUsers(false);
                    setOrders(false);
                    setProducts(true);
                    setChart(false);
                  }}
                >
                  Products
                </button>
              </div>
              <div className="adminDashboard">
                {" "}
                <FiUsers />
                <button
                  className="dashboardButton"
                  onClick={() => {
                    setUsers(true);
                    setOrders(false);
                    setProducts(false);
                    setChart(false);
                  }}
                >
                  Users
                </button>
              </div>
              <div className="adminDashboard">
                {" "}
                <IoCartSharp />
                <button
                  className="dashboardButton"
                  onClick={() => {
                    setUsers(false);
                    setOrders(true);
                    setProducts(false);
                    setChart(false);
                  }}
                >
                  {" "}
                  Orders
                </button>
              </div>
            </div>
            <div className="midPage">
              {users ? (
                <Users />
              ) : orders ? (
                <Orders />
              ) : products ? (
                <Products />
              ) : products ? (
                <Chart />
              ) : (
                <Chart />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

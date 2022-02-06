import React from "react";
import Chart from "./chart";
import { GrDashboard } from "react-icons/gr";
import { CgProductHunt } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
const Admin = () => {
  return (
    <div>
      <div className="adminPageContainer">
        <div className="adminPageWrapper">
          <div className="pageContainer">
            <div className="sideBar">
              <div className="adminDashboard">
                <GrDashboard />
                <button className="dashboardButton">Dasboard</button>
              </div>
              <div className="adminDashboard">
                <CgProductHunt />
                <button className="dashboardButton">Products</button>
              </div>
              <div className="adminDashboard">
                <FiUsers />
                <button className="dashboardButton">Users</button>
              </div>
              <div className="adminDashboard">
                <IoCartSharp />
                <button className="dashboardButton">Orders</button>
              </div>
            </div>
            <div className="midPage">
              <Chart />
            </div>
            <div className="leftPage"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

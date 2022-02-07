import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { CgProductHunt } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
import "../admin/admin.css"
const AdminNavigation = () => {
    return (
        <>
             
              <div className="adminDashboard">
                <CgProductHunt />
                <Link className="dashboardLink" to={"/products"}>Products</Link>
              </div>
              <div className="adminDashboard">
                <FiUsers />
                <Link className="dashboardLink" to={"/users"}>Users</Link>
              </div>
              <div className="adminDashboard">
                <IoCartSharp />
                <Link className="dashboardLink" to={"/orders"}>Orders</Link>
              </div></>
       
    );
}

export default AdminNavigation;

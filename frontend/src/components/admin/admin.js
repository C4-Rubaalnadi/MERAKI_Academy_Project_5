import React from "react";
import Chart from "./chart";
import "../admin/admin.css"
import { GrDashboard } from "react-icons/gr";
import AdminNavigation from "./adminNavigation";

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
                <AdminNavigation/>
            </div>
            <div className="midPage">
              <Chart />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

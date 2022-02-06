import React from "react";
import Chart from "./chart";
import {GrDashboard} from "react-icons/gr"
const Admin = () => {
  return (
    <div>
      <div className="adminPageContainer">
        <div className="adminPageWrapper">
          
          <div className="pageContainer">
            <div className="sideBar">
                <div className="adminDashboard"><GrDashboard/><button className="dashboardButton">Dasboard</button></div>
            </div>
            <div className="midPage"><Chart /></div>
            <div className="leftPage"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Admin;

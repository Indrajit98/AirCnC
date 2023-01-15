import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <div>
        <Sidebar/>
      </div>
      <div className="flex-1 p-5 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

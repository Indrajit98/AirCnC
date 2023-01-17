import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getRole } from "../api/user";
import Sidebar from "../Components/Dashboard/Sidebar";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRole(user?.email).then((data) => {
      // console.log(data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className="md:flex relative min-h-screen">
      {loading ? <Spinner /> : <>
      <div>
        <Sidebar role={role} />
      </div>
      <div className="flex-1 p-5 md:ml-64">
        <Outlet />
      </div>
      </>}
    </div>
  );
};

export default Dashboard;

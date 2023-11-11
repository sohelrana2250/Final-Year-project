import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../main/Navbar";

const Dashboard = () => {
  return (
    <>
      {/* <div className='grid grid-cols-12'>
      <Sidebar />
      <div className=' col-span-10'>
        <div className=' h-full max-w-7xl mx-auto'>
          <Outlet />
        </div>
      </div>
    </div> */}
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input id="alluser-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="alluser-dashboard" className="drawer-overlay"></label>
          <Sidebar />

        </div>
      </div>


    </>
  );
};

export default Dashboard;

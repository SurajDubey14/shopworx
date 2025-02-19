import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../components/sidebar";
import { RiMenu2Fill } from "react-icons/ri";

const Layout = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="flex">
        {/* Sidebar Toggle Button for Mobile */}
        <button
          className="md:hidden p-2 absolute top-4 left-4 bg-gray-800 text-white rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <RiMenu2Fill size={24} />
        </button>

        {/* Sidebar */}
        <div
          className={`bg-[#1d1d1d] text-white fixed md:relative z-50 md:flex transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 h-full md:h-auto`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main w-full min-h-screen bg-[#f5f7fa] p-4">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;

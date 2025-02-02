import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../components/sidebar";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="bg-[#1d1d1d] text-white">
        <Sidebar/>
        </div>
        <div className="main w-full min-h-screen bg-[#f5f7fa] p-4">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;

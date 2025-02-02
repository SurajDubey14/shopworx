import React from "react";
import { Link } from "react-router";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { TbReport } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col space-y-6 ">
        <Link className="hover:bg-blue-900 hover:text-white px-4 py-3" to={"/"}>
          <div className="text-center flex flex-col space-y-2 items-center">
            <span>
              <AiOutlineDashboard size={25} />
            </span>
            <p className="">DASHBOARD</p>
          </div>
        </Link>
        <Link
          className="hover:bg-blue-900 hover:text-white px-4 py-3"
          to={"/application"}
        >
          <div className="text-center flex flex-col space-y-2 items-center">
            <span><GrAppsRounded size={25}/></span>
            <p>APPLICATION</p>
          </div>
        </Link>
        <Link className="hover:bg-blue-900 hover:text-white px-4 py-3" to={"/users"}>
          <div className="text-center flex flex-col space-y-2 items-center">
            <span><HiUserGroup size={25}/></span>
            <p>USERS</p>
          </div>
        </Link>
        <Link
          className="hover:bg-blue-900 hover:text-white px-4 py-3"
          to={"/provision"}
        >
          <div className="text-center flex flex-col space-y-2 items-center">
            <span><IoIosSettings size={25}/></span>
            <p>PROVISION</p>
          </div>
        </Link>
        <Link
          className="hover:bg-blue-900 hover:text-white px-4 py-3"
          to={"/reports"}
        >
          <div className="text-center flex flex-col space-y-2 items-center">
            <span><TbReport size={25}/></span>
            <p>REPORTS</p>
          </div>
        </Link>
        <Link className="hover:bg-blue-900 hover:text-white px-4 py-3" to={"/graphs"}>
          <div className="text-center flex flex-col space-y-2 items-center">
            <span><VscGraph size={25}/></span>
            <p>GRAPHS</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;

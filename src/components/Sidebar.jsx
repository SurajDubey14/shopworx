import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { TbReport } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";

const Sidebar = () => {
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  const toggleReports = () => {
    setIsReportsOpen(!isReportsOpen);
  };

  return (
    <div className="flex flex-col space-y-6">
      <Link className="hover:bg-blue-900 hover:text-white px-4 py-3" to={"/"}>
        <div className="text-center flex flex-col space-y-2 items-center">
          <AiOutlineDashboard size={25} />
          <p>DASHBOARD</p>
        </div>
      </Link>

      <Link className="hover:bg-blue-900 hover:text-white px-4 py-3" to={"/application"}>
        <div className="text-center flex flex-col space-y-2 items-center">
          <GrAppsRounded size={25} />
          <p>APPLICATION</p>
        </div>
      </Link>

      <Link className="hover:bg-blue-900 hover:text-white px-4 py-3" to={"/users"}>
        <div className="text-center flex flex-col space-y-2 items-center">
          <HiUserGroup size={25} />
          <p>USERS</p>
        </div>
      </Link>

      <Link className="hover:bg-blue-900 hover:text-white px-4 py-3" to={"/provision"}>
        <div className="text-center flex flex-col space-y-2 items-center">
          <IoIosSettings size={25} />
          <p>PROVISION</p>
        </div>
      </Link>

      {/* REPORTS WITH DROPDOWN */}
      <div>
        <button
          className="w-full hover:bg-blue-900 hover:text-white px-4 py-3 text-center flex flex-col space-y-2 items-center"
          onClick={toggleReports}
        >
          <TbReport size={25} />
          <p>REPORTS</p>
        </button>
        
        {isReportsOpen && (
          <div className="bg-blue-800 text-white space-y-2 px-4 py-2">
            <Link className="block hover:bg-blue-700 px-2 py-1" to={"/viewplan"}>
              VIEW PLANS
            </Link>
            <Link className="block hover:bg-blue-700 px-2 py-1" to={"/production"}>
              PRODUCTION
            </Link>
            <Link className="block hover:bg-blue-700 px-2 py-1" to={"/downtime"}>
              DOWNTIME
            </Link>
            <Link className="block hover:bg-blue-700 px-2 py-1" to={"/rejection"}>
              REJECTION
            </Link>
            <Link className="block hover:bg-blue-700 px-2 py-1" to={"/oee"}>
              OEE
            </Link>
          </div>
        )}
      </div>

      <Link className="hover:bg-blue-900 hover:text-white px-4 py-3" to={"/graphs"}>
        <div className="text-center flex flex-col space-y-2 items-center">
          <VscGraph size={25} />
          <p>GRAPHS</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

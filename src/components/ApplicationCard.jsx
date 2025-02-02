import React from "react";
import { AiOutlineFile, AiOutlineCalendar, AiOutlineCheckSquare, AiOutlineDashboard, AiOutlineOrderedList, AiOutlineSync, AiOutlineProfile, AiOutlineBarChart } from "react-icons/ai";

const iconsMap = {
    AiOutlineFile: <AiOutlineFile size={40} />,
    AiOutlineCalendar: <AiOutlineCalendar size={40} />,
    AiOutlineCheckSquare: <AiOutlineCheckSquare size={40} />,
    AiOutlineDashboard: <AiOutlineDashboard size={40} />,
    AiOutlineOrderedList: <AiOutlineOrderedList size={40} />,
    AiOutlineSync: <AiOutlineSync size={40} />,
    AiOutlineProfile: <AiOutlineProfile size={40} />,
    AiOutlineBarChart: <AiOutlineBarChart size={40} />
  };

const ApplicationCard = ({ icon, text }) => {
  return (
    <div  className="flex flex-col items-center mt-5">
      <div className="icon border border-black bg-white max-w-fit p-10">{iconsMap[icon]}</div>
      <p className="text-xl pt-2">{text}</p>
    </div>
  );
};

export default ApplicationCard;

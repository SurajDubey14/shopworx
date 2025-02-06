import React from "react";


const ApplicationCard = ({ text, image }) => {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="icon border-2 shadow border-gray-400 bg-white max-w-fit p-4">
        <img src={image} alt="" className="w-40" />
      </div>
      <p className="text-xl pt-2 font-semibold">{text}</p>
    </div>
  );
};

export default ApplicationCard;

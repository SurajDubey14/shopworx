import React from "react";
import ApplicationCard from "../../components/ApplicationCard";

const applications = [
  {
    icon: "AiOutlineFile",
    text: "File Manager"
  },
  {
    icon: "AiOutlineCalendar",
    text: "Machine Planning App"
  },
  {
    icon: "AiOutlineCheckSquare",
    text: "Production Log App"
  },
  {
    icon: "AiOutlineDashboard",
    text: "Model Change Dashboard"
  },
  {
    icon: "AiOutlineOrderedList",
    text: "Mould Checklist App"
  },
  {
    icon: "AiOutlineSync",
    text: "Model Change Plan App"
  },
  {
    icon: "AiOutlineProfile",
    text: "SOP App"
  },
  {
    icon: "AiOutlineBarChart",
    text: "Machine Status Dashboard"
  }
];

const Application = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {applications.map((app, index) => (
        <ApplicationCard key={index} icon={app.icon} text={app.text} />
      ))}
    </div>
  )
}

export default Application
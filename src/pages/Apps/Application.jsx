import React from "react";
import ApplicationCard from "../../components/ApplicationCard";

const applications = [
  {
    img: "/images/filemanager.png",
    text: "File Manager"
  },
  {
    img: "/images/planningapp.png",
    text: "Machine Planning App"
  },
  {
    img: "/images/productionlog.png",
    text: "Production Log App"
  },
  {
    img: "/images/modelgraph.png",
    text: "Model Change Dashboard"
  },
  {
    img: "/images/checklist.png",
    text: "Mould Checklist App"
  },
  {
    img: "/images/modelchangeplan.png",
    text: "Model Change Plan App"
  },
  {
    img: "/images/SOP.png",
    text: "SOP App"
  },
  {
    img: "/images/machinestatus.png",
    text: "Machine Status Dashboard"
  }
];

const Application = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {applications.map((app, index) => (
        <ApplicationCard key={index} text={app.text} image={app.img} />
      ))}
    </div>
  )
}

export default Application
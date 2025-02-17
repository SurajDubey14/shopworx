import React from "react";

const machineData = [
  {
    id: 1,
    category: "Category A",
    title: "20-300T",
    part: "Semi Prog 1 OF 2",
    planned: "149689/200000",
    target: 10923,
    actual: 4279,
    efficiency: 39.17,
    color: "bg-green-600",
  },
  {
    id: 2,
    category: "Category A",
    title: "21-300T",
    part: "-",
    planned: "0/0",
    target: 0,
    actual: 0,
    efficiency: 0,
    color: "bg-red-600",
  },
  {
    id: 3,
    category: "Category B",
    title: "22-250T",
    part: "Plate DC 1 OF 3",
    planned: "2361/6000",
    target: 1747,
    actual: 2368,
    efficiency: 135.55,
    color: "bg-green-600",
  },
  {
    id: 4,
    category: "Category B",
    title: "25-300T",
    part: "Plate Upper V",
    planned: "120410/200000",
    target: 3415,
    actual: 4537,
    efficiency: 132.86,
    color: "bg-red-600",
  },
];

const MachineDashboard = () => {
  return (
    <div className="p-6 w-full max-w-6xl mx-auto grid grid-cols-2 gap-6">
      {machineData.map(machine => (
        <div key={machine.id} className={`p-6 text-white ${machine.color} rounded-lg shadow-lg border-2 border-gray-300`}>
          <h3 className="text-2xl font-bold mb-2 text-center">{machine.title}</h3>
          <div className="text-lg grid grid-cols-2 gap-2">
            <p className="font-semibold">Part:</p> <p>{machine.part}</p>
            <p className="font-semibold">Planned:</p> <p>{machine.planned}</p>
            <p className="font-semibold">Current Target:</p> <p>{machine.target}</p>
            <p className="font-semibold">Actual:</p> <p>{machine.actual}</p>
            <p className="font-semibold">% Eff.:</p> 
            <p className={`font-bold ${machine.efficiency > 100 ? "text-blue-400" : "text-red-400"}`}>{machine.efficiency}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MachineDashboard;

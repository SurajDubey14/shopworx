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
      {machineData.map((machine) => (
        <div
          key={machine.id}
          className={`p-6 text-white ${machine.color} rounded-lg shadow-lg border-2 border-gray-300`}
        >
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr>
                <th className="text-center px-4 py-2">{machine.title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Category
                </td>
                <td className="border border-gray-300 text-right px-4 py-2">
                  {machine.category}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Part
                </td>
                <td className="border border-gray-300 text-right px-4 py-2">
                  {machine.part}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Planned
                </td>
                <td className="border border-gray-300 text-right px-4 py-2">
                  {machine.planned}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Target
                </td>
                <td className="border border-gray-300 text-right px-4 py-2">
                  {machine.target}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Actual
                </td>
                <td className="border border-gray-300 text-right px-4 py-2">
                  {machine.actual}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Efficiency
                </td>
                <td className="border border-gray-300 text-right px-4 py-2">
                  {machine.efficiency}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MachineDashboard;

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ProductionDashboard = () => {
  const last7DaysData = [
    { name: "45-160T", value: 69.15 },
    { name: "48-80T", value: 70.9 },
    { name: "50-80T", value: 61.76 },
    { name: "54-80T", value: 33.18 },
    { name: "Back Plate", value: 62.65 },
    { name: "Bottom Plate", value: 68.84 },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="grid grid-cols-4 gap-6">
        {/* Production Status */}
        <div className="col-span-1 p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Production Status Live</h2>
          <p className="text-4xl font-bold">105.24%</p>
          <p className="text-sm">CELL OEE</p>
          <div className="flex justify-between mt-4">
            <span>Running: 6</span>
            <span>Down: 0</span>
            <span>No Plan: 1</span>
          </div>
        </div>

        {/* OEE Live */}
        <div className="col-span-2 p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">OEE Live (%)</h2>
          <BarChart width={400} height={250} data={last7DaysData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.2)' }} />
            <Bar dataKey="value" fill="#10B981" />
          </BarChart>
        </div>

        {/* Last 7 Days */}
        <div className="col-span-1 p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Last 7 Days (%)</h2>
          <BarChart width={300} height={250} data={last7DaysData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.2)' }} />
            <Bar dataKey="value" fill="#EF4444" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ProductionDashboard;

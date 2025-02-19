import React from "react";

const Production1 = () => {
  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Production Status */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Production Status Live</h2>
          <p className="text-sm">07 Sep 2024 | 15:01</p>
          <div className="flex justify-between text-lg mt-2">
            {[
              { label: "RUNNING", value: 6, color: "text-green-400" },
              { label: "DOWN", value: 0, color: "text-red-500" },
              { label: "NO PLAN", value: 1, color: "text-yellow-400" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className={item.color}>{item.value}</p>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p>
              Target Qty: <span className="font-bold">13,273</span>
            </p>
            <p>
              Actual Qty: <span className="font-bold">13,969</span>
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-2xl font-bold text-green-400">105.24%</p>
            <p className="text-sm">CELL OEE</p>
            <div className="flex justify-between text-sm mt-2">
              {[
                { label: "A%", value: 100 },
                { label: "P%", value: 105 },
                { label: "Q%", value: 99 },
              ].map((item, index) => (
                <p key={index}>
                  {item.label} <span className="font-bold">{item.value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Shift Percentage */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Shift (%)</h2>
          <p className="text-sm">05/09/2024</p>
          <div className="mt-4 flex justify-around items-end h-40">
            {[32, 28, 30, 20].map((height, index) => (
              <div
                key={index}
                className={`w-10 bg-${index % 2 === 0 ? "green" : "yellow"}-400`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>

        {/* OEE Live */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">OEE: Live (%)</h2>
          <div className="mt-4 flex justify-around items-end h-40">
            {[32, 28, 30, 25].map((height, index) => (
              <div
                key={index}
                className="w-10 bg-green-400"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Performance Sections */}
      {[
        { title: "Last 7 Days (%)", data: [24, 28, 20, 16] },
        { title: "Last 15 Days (%)", data: [20, 22, 18, 12] },
      ].map((section, index) => (
        <div key={index} className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">{section.title}</h2>
          <div className="mt-4 flex justify-around items-end h-40">
            {section.data.map((height, i) => (
              <div
                key={i}
                className="w-10 bg-red-500"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Production1;

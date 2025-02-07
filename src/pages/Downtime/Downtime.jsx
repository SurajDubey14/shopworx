import { useState } from "react";

const downtimeData = [
  { shift: "14:46 To Now", from: "14:46", to: "-", duration: "00:00:41", reason: "", date: "2024-09-07" },
  { shift: "14:44 To 14:46", from: "14:44", to: "14:46", duration: "00:02:05", reason: "Operator Delay", date: "2024-09-07" },
  { shift: "14:35 To 14:41", from: "14:35", to: "14:41", duration: "00:05:58", reason: "", date: "2024-09-07" },
];

const Downtime = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedReason, setSelectedReason] = useState("");

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-900">01-200T | Cell-1</h2>
      
      {downtimeData.map((entry, index) => (
        <div key={index} className="mt-4 border rounded-lg">
          {/* Shift Header */}
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <h3 className="font-semibold">Shift1 : {entry.shift}</h3>
            <span className="text-sm flex items-center">
              📅 <span className="ml-2">{entry.date}</span>
            </span>
          </div>

          {/* Table Content */}
          <div className="p-4 bg-gray-100 rounded-b-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-700">
                  <th className="p-2 text-red-600">Downtime</th>
                  <th className="p-2">From</th>
                  <th className="p-2">To</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">Reason</th>
                  <th className="p-2">Remark</th>
                  <th className="p-2">Action</th>
                  <th className="p-2">Clear</th>
                  {entry.to !== "-" && <th className="p-2">Split</th>}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-2 text-red-600 font-semibold">{entry.duration}</td>
                  <td className="p-2">{entry.from}</td>
                  <td className="p-2">{entry.to}</td>
                  <td className="p-2">
                    <select className="border border-gray-300 p-1 text-sm w-32" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                      <option value="">Select Department</option>
                      <option value="Production">Production</option>
                      <option value="Quality">Quality</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </td>
                  <td className="p-2">
                    {entry.reason ? (
                      <span className="text-gray-900">{entry.reason}</span>
                    ) : (
                      <select className="border border-gray-300 p-1 text-sm w-32" value={selectedReason} onChange={(e) => setSelectedReason(e.target.value)}>
                        <option value="">Select Downtime Reason</option>
                        <option value="Operator Delay">Operator Delay</option>
                        <option value="Machine Breakdown">Machine Breakdown</option>
                        <option value="Material Shortage">Material Shortage</option>
                      </select>
                    )}
                  </td>
                  <td className="p-2 text-center">🗨️</td>
                  <td className="p-2 text-center">✏️</td>
                  <td className="p-2 text-center">❌</td>
                  {entry.to !== "-" && (
                    <td className="p-2 text-center">➕</td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Downtime;

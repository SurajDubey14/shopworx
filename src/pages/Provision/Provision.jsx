import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const breakTimeData = [
  {
    uploadedOn: "28-10-2023 10:19:42",
    duration: 30,
    startTime: "01:00:00",
    endTime: "01:29:59",
    description: "Dinner",
    shift: "Shift2",
    spillover: "true",
    site: "noida",
  },
  {
    uploadedOn: "28-10-2023 10:18:28",
    duration: 30,
    startTime: "08:30:00",
    endTime: "08:59:59",
    description: "Shift Change",
    shift: "Shift2",
    spillover: "true",
    site: "noida",
  },
  {
    uploadedOn: "28-10-2023 10:16:44",
    duration: 30,
    startTime: "21:30:00",
    endTime: "21:59:59",
    description: "Shift Change",
    shift: "Shift1",
    spillover: "false",
    site: "noida",
  },
  {
    uploadedOn: "27-10-2023 12:43:16",
    duration: 30,
    startTime: "13:00:00",
    endTime: "13:29:59",
    description: "Lunch",
    shift: "Shift1",
    spillover: "false",
    site: "noida",
  },
];

const Provision = () => {
  const [search, setSearch] = useState("");

  const filteredData = breakTimeData.filter(
    (row) =>
      row.description.toLowerCase().includes(search.toLowerCase()) ||
      row.shift.toLowerCase().includes(search.toLowerCase()) || 
      row.spillover.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Break Time</h2>
          <div className="flex items-center  border border-gray-200 p-2 rounded-lg">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-4 focus:outline-none"
            />
          </div>
        </div>
        <table className="w-full border border-gray-200">
          <thead >
            <tr className="bg-gray-100 text-center">
              <th className="border px-2">Data Uploaded On</th>
              <th className="border px-2">Duration (Minutes)</th>
              <th className="border px-2">Start Time</th>
              <th className="border px-2">End Time</th>
              <th className="border px-2">Description</th>
              <th className="border px-2">Shift</th>
              <th className="border px-2">Next Day Spillover</th>
              <th className="border px-2">Site Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="text-center border"> 
                <td className="border px-2">{row.uploadedOn}</td>
                <td className="border px-2">{row.duration}</td>
                <td className="border px-2">{row.startTime}</td>
                <td className="border px-2">{row.endTime}</td>
                <td className="border px-2">{row.description}</td>
                <td className="border px-2">{row.shift}</td>
                <td className="border px-2">{row.spillover}</td>
                <td className="border px-2">{row.site}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Provision;

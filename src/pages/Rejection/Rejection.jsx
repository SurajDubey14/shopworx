import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const rejectionData = [
  { date: "07-09-2024", srNo: 1, machine: "01-200T", defect: "PART OUT", rejected: 5 },
  { date: "07-09-2024", srNo: 2, machine: "02-200T", defect: "Burr", rejected: 10 },
  { date: "07-09-2024", srNo: 3, machine: "06-180T", defect: "PART OUT", rejected: 2 },
  { date: "07-09-2024", srNo: 4, machine: "12-160T", defect: "Dent on RM", rejected: 2 },
  { date: "07-09-2024", srNo: 5, machine: "18-200T", defect: "Hole Out", rejected: 3 },
  { date: "07-09-2024", srNo: 6, machine: "18-200T", defect: "Heavy Dent", rejected: 2 },
  { date: "07-09-2024", srNo: 7, machine: "20-300T", defect: "CRACK", rejected: 2 },
  { date: "07-09-2024", srNo: 8, machine: "20-300T", defect: "Dent on RM", rejected: 3 },
  { date: "07-09-2024", srNo: 9, machine: "22-250T", defect: "Dent on RM", rejected: 2 },
];

const Rejection = () => {
  const [search, setSearch] = useState("");
  const [selectedMachine, setSelectedMachine] = useState("all");
  const [selectedDate, setSelectedDate] = useState(new Date("2024-09-07"));

  // Extract unique machine names for dropdown
  const machineOptions = ["All Machines", ...new Set(rejectionData.map((item) => item.machine))];

  // Filtered data based on search, selected machine, and date
  const filteredData = rejectionData.filter((item) => {
    const matchesSearch = search
      ? item.machine.toLowerCase().includes(search.toLowerCase()) ||
        item.defect.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesMachine = selectedMachine === "all" || item.machine === selectedMachine;
    const matchesDate = item.date === selectedDate.toLocaleDateString("en-GB"); // Formatting to match "dd-mm-yyyy"
    
    return matchesSearch && matchesMachine && matchesDate;
  });

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-md">
        <h2 className="text-lg font-semibold">Rejection By Machine</h2>
        <div className="flex items-center gap-3">
          {/* Calendar Picker */}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            className="px-3 py-1 bg-blue-800 text-white text-sm rounded cursor-pointer"
          />
          {/* Machine Filter */}
          <select
            className="border border-gray-300 p-1 text-sm w-40"
            onChange={(e) => setSelectedMachine(e.target.value)}
          >
            {machineOptions.map((machine, index) => (
              <option key={index} value={machine}>
                {machine}
              </option>
            ))}
          </select>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-1 text-sm w-40"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse mt-3">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Posting Date</th>
              <th className="p-2 border">Sr. No</th>
              <th className="p-2 border">Machine Name</th>
              <th className="p-2 border">Defect</th>
              <th className="p-2 border">Rejected Quantity</th>
              <th className="p-2 border">Remark</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr key={row.srNo} className="border">
                  <td className="p-2 border">{row.date}</td>
                  <td className="p-2 border">{row.srNo}</td>
                  <td className="p-2 border">{row.machine}</td>
                  <td className="p-2 border">{row.defect}</td>
                  <td className="p-2 border">{row.rejected}</td>
                  <td className="p-2 border">-</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-3">
                  No matching data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (Static for Now) */}
      <div className="flex justify-between items-center mt-3">
        <button className="px-3 py-1 bg-gray-300 text-black rounded">Previous</button>
        <span>Showing {filteredData.length} entries</span>
        <button className="px-3 py-1 bg-gray-300 text-black rounded">Next</button>
      </div>
    </div>
  );
};

export default Rejection;

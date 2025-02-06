import { useState } from "react";

const reports = [
  "Production Hourly",
  "Production Daily",
  "Production Cycle Comparison",
  "Production No Plan",
  "Production",
  "Operator Report",
  "Raw material Consumption",
  "Daily Analysis Report",
  "Production By Shift V2",
  "Production Detail Report",
  "Production By Day V2",
  "Model Change",
  "Operator Report V2",
];

const sampleData = [
  { sr: 1, time: "09:00-10:00", Wt: "03-250t", machine: "Hanger 540 CD 7kg Prog", cavitiesAvl: 1, cavitiesUsed: 1, hourlyTarget: 1440, producedQty: 273, rejectedQty: 0, rejectionPct: 0, reworkQty: 0, reworkPct: 0, acceptedQty: 273, noPlanShots: 0 },
  { sr: 2, time: "09:00-10:00", Wt: "03-180t", machine: "Bottom Plate DC", cavitiesAvl: 1, cavitiesUsed: 1, hourlyTarget: 1440, producedQty: 3, rejectedQty: 0, rejectionPct: 0, reworkQty: 0, reworkPct: 0, acceptedQty: 3, noPlanShots: 0 },
  { sr: 3, time: "09:00-10:00", Wt: "03-160t", machine: "No Plain", cavitiesAvl: 1, cavitiesUsed: 1, hourlyTarget: 1200, producedQty: 384, rejectedQty: 0, rejectionPct: 0, reworkQty: 0, reworkPct: 0, acceptedQty: 384, noPlanShots: 14 },
  { sr: 4, time: "09:00-10:00", Wt: "03-140t", machine: "Outcase 32 Ltr", cavitiesAvl: 1, cavitiesUsed: 1, hourlyTarget: 1440, producedQty: 273, rejectedQty: 0, rejectionPct: 0, reworkQty: 0, reworkPct: 0, acceptedQty: 273, noPlanShots: 0 },
  { sr: 5, time: "09:00-10:00", Wt: "03-180t", machine: "Hanger 540 CD 7kg Prog", cavitiesAvl: 1, cavitiesUsed: 1, hourlyTarget: 1440, producedQty: 3, rejectedQty: 0, rejectionPct: 0, reworkQty: 0, reworkPct: 0, acceptedQty: 3, noPlanShots: 0 },
  { sr: 6, time: "09:00-10:00", Wt: "03-250t", machine: "Hanger 540 CD 7kg Prog", cavitiesAvl: 1, cavitiesUsed: 1, hourlyTarget: 1200, producedQty: 384, rejectedQty: 0, rejectionPct: 0, reworkQty: 0, reworkPct: 0, acceptedQty: 384, noPlanShots: 14 },
];

export default function Production() {
  const [selectedReport, setSelectedReport] = useState(reports[0]);

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 justify-between items-center p-4 mb-4 bg-blue-700">
        <select className="border rounded p-2 w-full sm:w-auto" value={selectedReport} onChange={(e) => setSelectedReport(e.target.value)}>
          {reports.map((report) => (
            <option key={report} value={report}>{report}</option>
          ))}
        </select>
        <input type="date" className="border rounded p-2 w-full sm:w-auto" />
        <select className="border rounded p-2 w-full sm:w-auto">
          <option>All Machines</option>
        </select>
        <input type="text" placeholder="Search" className="border rounded p-2 w-full sm:w-auto" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-sm md:text-base">
          <thead>
            <tr className="">
              <th className="border p-2">Sr.</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">W-T</th>
              <th className="border p-2">Machine</th>
              <th className="border p-2">Cavities Avl</th>
              <th className="border p-2">Cavities Used</th>
              <th className="border p-2">Hourly Target</th>
              <th className="border p-2">Produced Qty</th>
              <th className="border p-2">Rejected Qty</th>
              <th className="border p-2">Rejection %</th>
              <th className="border p-2">Rework Qty</th>
              <th className="border p-2">Rework %</th>
              <th className="border p-2">Accepted Qty</th>
              <th className="border p-2">No Plan Shots</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{row.sr}</td>
                <td className="border p-2">{row.time}</td>
                <td className="border p-2">{row.Wt}</td>
                <td className="border p-2">{row.machine}</td>
                <td className="border p-2">{row.cavitiesAvl}</td>
                <td className="border p-2">{row.cavitiesUsed}</td>
                <td className="border p-2">{row.hourlyTarget}</td>
                <td className="border p-2">{row.producedQty}</td>
                <td className="border p-2">{row.rejectedQty}</td>
                <td className="border p-2">{row.rejectionPct}%</td>
                <td className="border p-2">{row.reworkQty}</td>
                <td className="border p-2">{row.reworkPct}%</td>
                <td className="border p-2">{row.acceptedQty}</td>
                <td className="border p-2">{row.noPlanShots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

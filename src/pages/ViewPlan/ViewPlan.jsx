import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const dummyData=[
    {
      "srNo": 1,
      "machine": "01-200T",
      "planInProgress": "Side Plate LR Prog/20000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 2,
      "machine": "02-200T",
      "planInProgress": "Door Stopper Ruby Prog/10000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 3,
      "machine": "03-250T",
      "planInProgress": "Hinge Upper Orion Prog/15000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 4,
      "machine": "06-160T",
      "planInProgress": "Bottom Plate VD4/5000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 5,
      "machine": "09-200T",
      "planInProgress": "CHANNEL TUBE UL2 5MM/10000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 6,
      "machine": "12-160T",
      "planInProgress": "Out Case 28 Ltr/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 7,
      "machine": "18-200T",
      "planInProgress": "Tub Base 7kg/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 8,
      "machine": "19-300T",
      "planInProgress": "Inner Frame V/200000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 9,
      "machine": "20-300T",
      "planInProgress": "Cover PCB Ruby/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 10,
      "machine": "21-300T",
      "planInProgress": "Back Plate DC 1 OF 3/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 11,
      "machine": "22-250T",
      "planInProgress": "Plate Upper V/200000",
      "queuePlans": ["Plate Upper V/10000", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 12,
      "machine": "25-300T",
      "planInProgress": "Cover PCB Ruby/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 13,
      "machine": "30-110T",
      "planInProgress": "Plate Center VT 8 9/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 14,
      "machine": "35-160T",
      "planInProgress": "Base Stand Raja/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 15,
      "machine": "40-160T",
      "planInProgress": "Comp Base VT 8 9/10000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 16,
      "machine": "45-160T",
      "planInProgress": "Locker Prog/20000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 17,
      "machine": "48-80T",
      "planInProgress": "Megmeet Cover 1 OF 3/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 18,
      "machine": "50-80T",
      "planInProgress": "Case PCB/8000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 19,
      "machine": "54-80T",
      "planInProgress": "- / -",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    },
    {
      "srNo": 20,
      "machine": "BACK PLATE",
      "planInProgress": "Bottom Plate Assembly/100000",
      "queuePlans": ["- / -", "- / -", "- / -", "- / -", "- / -"]
    }
  ]
  

export default function ReportTable() {
  const [date] = useState(new Date().toLocaleDateString());

  return (
    <div className="p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Report view</h2>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt />
            <span>{date}</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Sr.No.</th>
                <th className="border px-3 py-2">Machine</th>
                <th className="border px-3 py-2">Plan In Progress (Part Name / Qty)</th>
                <th className="border px-3 py-2" colSpan={5}>Plans In Queue (Part Name / Qty)</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.srNo} className="text-center">
                  <td className="border px-3 py-2">{item.srNo}</td>
                  <td className="border px-3 py-2">{item.machine}</td>
                  <td className="border px-3 py-2">{item.planInProgress}</td>
                  {item.queuePlans.map((plan, index) => (
                    <td key={index} className="border px-3 py-2">{plan}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

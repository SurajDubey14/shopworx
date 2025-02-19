import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
const pieData = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const data = [
  { month: "Jan", sales: 4000, revenue: 2400, orders: 240, users: 300 },
  { month: "Feb", sales: 3000, revenue: 2210, orders: 200, users: 400 },
  { month: "Mar", sales: 5000, revenue: 3200, orders: 350, users: 450 },
  { month: "Apr", sales: 4780, revenue: 2780, orders: 290, users: 500 },
  { month: "May", sales: 5890, revenue: 3900, orders: 400, users: 700 },
];

const machines = [
  { name: "01-200T", quantity: 1452, actionPercentage: 1.2, a: 500, b: 952 },
  { name: "02-200T", quantity: 2491, actionPercentage: 1.8, a: 1200, b: 1291 },
  { name: "03-250T", quantity: 19, actionPercentage: 0.2, a: 10, b: 9 },
  { name: "06-160T", quantity: 1064, actionPercentage: 1.4, a: 500, b: 564 },
  { name: "09-200T", quantity: 1115, actionPercentage: 1.3, a: 600, b: 515 },
  { name: "12-160T", quantity: 1132, actionPercentage: 1.6, a: 700, b: 432 },
  { name: "18-200T", quantity: 3656, actionPercentage: 2.0, a: 1800, b: 1856 },
  { name: "19-300T", quantity: 5342, actionPercentage: 2.5, a: 2500, b: 2842 },
  { name: "20-300T", quantity: 1354, actionPercentage: 1.2, a: 700, b: 654 },
  { name: "22-250T", quantity: 760, actionPercentage: 0.8, a: 300, b: 460 },
  { name: "30-100T", quantity: 2865, actionPercentage: 2.1, a: 1300, b: 1565 },
  { name: "35-160T", quantity: 2063, actionPercentage: 1.5, a: 1000, b: 1063 },
  { name: "48-80T", quantity: 6465, actionPercentage: 3.2, a: 3000, b: 3465 },
  { name: "50-80T", quantity: 1265, actionPercentage: 1.0, a: 600, b: 665 },
  { name: "BOTTOM", quantity: 1245, actionPercentage: 0.9, a: 500, b: 745 },
  { name: "BRAKE", quantity: 2769, actionPercentage: 1.8, a: 1400, b: 1369 },
];

const Dashboard = () => {
  return (
    <>
    <div className="flex justify-center items-center h-64">
      <PieChart width={400} height={200}>
        <Pie
          data={pieData}
          cx={200}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Chart 1: Sales Overview (Bar + Line) */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-2">
            Sales Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#4F46E5" />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22C55E"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2: Revenue & Orders (Area + Line) */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-2">
            Revenue & Orders
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                fill="#F97316"
                stroke="#F97316"
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#0EA5E9"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 3: User Growth & Engagement (Bar + Area) */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-2">
            User Growth & Engagement
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#E11D48" />
              <Area
                type="monotone"
                dataKey="orders"
                fill="#9333EA"
                stroke="#9333EA"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4">
          Machine Performance Overview
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={machines}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
            <YAxis
              yAxisId="left"
              label={{ value: "Quantity", angle: -90, position: "insideLeft" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: "Action Percentage",
                angle: -90,
                position: "insideRight",
              }}
            />
            <Tooltip />
            <Legend />

            {/* Bars */}
            <Bar yAxisId="left" dataKey="a" stackId="stack" fill="#1E3A8A" />
            <Bar yAxisId="left" dataKey="b" stackId="stack" fill="#22C55E" />

            {/* Line Chart */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="actionPercentage"
              stroke="#F43F5E"
              strokeWidth={2}
              dot={{ fill: "#F43F5E", r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Dashboard;

"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
const dailyData = [
  {
    name: "12 AM", // Hour 0
    "Top Sales": { today: 1100, previousDay: 1200 },
    "Average Sales": { today: 1400, previousDay: 900 },
    "Number of Transactions": { today: 190, previousDay: 110 },
  },
  {
    name: "1 AM", // Hour 1
    "Top Sales": { today: 1300, previousDay: 2150 },
    "Average Sales": { today: 900, previousDay: 450 },
    "Number of Transactions": { today: 110, previousDay: 205 },
  },
  {
    name: "2 AM", // Hour 2
    "Top Sales": { today: 1100, previousDay: 750 },
    "Average Sales": { today: 850, previousDay: 1200 },
    "Number of Transactions": { today: 150, previousDay: 95 },
  },
  {
    name: "3 AM", // Hour 3
    "Top Sales": { today: 1400, previousDay: 1100 },
    "Average Sales": { today: 760, previousDay: 900 },
    "Number of Transactions": { today: 120, previousDay: 105 },
  },
  {
    name: "4 AM", // Hour 4
    "Top Sales": { today: 1200, previousDay: 1700 },
    "Average Sales": { today: 1100, previousDay: 850 },
    "Number of Transactions": { today: 230, previousDay: 120 },
  },
  {
    name: "5 AM", // Hour 5
    "Top Sales": { today: 1650, previousDay: 1350 },
    "Average Sales": { today: 1050, previousDay: 1200 },
    "Number of Transactions": { today: 140, previousDay: 100 },
  },
  {
    name: "6 AM", // Hour 6
    "Top Sales": { today: 1600, previousDay: 1400 },
    "Average Sales": { today: 1200, previousDay: 950 },
    "Number of Transactions": { today: 100, previousDay: 140 },
  },
  {
    name: "7 AM", // Hour 7
    "Top Sales": { today: 1400, previousDay: 1750 },
    "Average Sales": { today: 1250, previousDay: 1000 },
    "Number of Transactions": { today: 160, previousDay: 100 },
  },
  {
    name: "8 AM", // Hour 8
    "Top Sales": { today: 1400, previousDay: 1700 },
    "Average Sales": { today: 1000, previousDay: 1250 },
    "Number of Transactions": { today: 170, previousDay: 260 },
  },
  {
    name: "9 AM", // Hour 9
    "Top Sales": { today: 1900, previousDay: 1500 },
    "Average Sales": { today: 1350, previousDay: 1100 },
    "Number of Transactions": { today: 180, previousDay: 370 },
  },
  {
    name: "10 AM", // Hour 10
    "Top Sales": { today: 2000, previousDay: 1600 },
    "Average Sales": { today: 1800, previousDay: 1350 },
    "Number of Transactions": { today: 100, previousDay: 180 },
  },
  {
    name: "11 AM", // Hour 11
    "Top Sales": { today: 2000, previousDay: 2300 },
    "Average Sales": { today: 1250, previousDay: 1400 },
    "Number of Transactions": { today: 200, previousDay: 120 },
  },
  {
    name: "12 PM", // Hour 12
    "Top Sales": { today: 2200, previousDay: 3100 },
    "Average Sales": { today: 800, previousDay: 1450 },
    "Number of Transactions": { today: 170, previousDay: 200 },
  },
  {
    name: "1 PM", // Hour 13
    "Top Sales": { today: 2300, previousDay: 1800 },
    "Average Sales": { today: 1550, previousDay: 1000 },
    "Number of Transactions": { today: 220, previousDay: 120 },
  },
  {
    name: "2 PM", // Hour 14
    "Top Sales": { today: 2400, previousDay: 2100 },
    "Average Sales": { today: 1400, previousDay: 1550 },
    "Number of Transactions": { today: 200, previousDay: 220 },
  },
  {
    name: "3 PM", // Hour 15
    "Top Sales": { today: 2400, previousDay: 2100 },
    "Average Sales": { today: 1650, previousDay: 1000 },
    "Number of Transactions": { today: 240, previousDay: 200 },
  },
  {
    name: "4 PM", // Hour 16
    "Top Sales": { today: 2600, previousDay: 2100 },
    "Average Sales": { today: 1700, previousDay: 1250 },
    "Number of Transactions": { today: 200, previousDay: 240 },
  },
  {
    name: "5 PM", // Hour 17
    "Top Sales": { today: 2100, previousDay: 2600 },
    "Average Sales": { today: 1750, previousDay: 1800 },
    "Number of Transactions": { today: 260, previousDay: 220 },
  },
  {
    name: "6 PM", // Hour 18
    "Top Sales": { today: 2800, previousDay: 1100 },
    "Average Sales": { today: 1300, previousDay: 1750 },
    "Number of Transactions": { today: 300, previousDay: 260 },
  },
  {
    name: "7 PM", // Hour 19
    "Top Sales": { today: 2900, previousDay: 3000 },
    "Average Sales": { today: 1850, previousDay: 1200 },
    "Number of Transactions": { today: 280, previousDay: 570 },
  },
  {
    name: "8 PM", // Hour 20
    "Top Sales": { today: 3000, previousDay: 2500 },
    "Average Sales": { today: 1900, previousDay: 1650 },
    "Number of Transactions": { today: 220, previousDay: 280 },
  },
  {
    name: "9 PM", // Hour 21
    "Top Sales": { today: 3200, previousDay: 3000 },
    "Average Sales": { today: 1850, previousDay: 1900 },
    "Number of Transactions": { today: 300, previousDay: 220 },
  },
  {
    name: "10 PM", // Hour 22
    "Top Sales": { today: 2500, previousDay: 3100 },
    "Average Sales": { today: 2000, previousDay: 1450 },
    "Number of Transactions": { today: 310, previousDay: 240 },
  },
  {
    name: "11 PM", // Hour 23
    "Top Sales": { today: 3300, previousDay: 3000 },
    "Average Sales": { today: 1900, previousDay: 2000 },
    "Number of Transactions": { today: 300, previousDay: 310 },
  },
];
const yearlyData = [
  {
    name: "January",
    "Top Sales": { today: 58000, previousDay: 60000 },
    "Average Sales": { today: 51000, previousDay: 48500 },
    "Number of Transactions": { today: 10250, previousDay: 9800 },
  },
  {
    name: "February",
    "Top Sales": { today: 57000, previousDay: 58000 },
    "Average Sales": { today: 49500, previousDay: 47000 },
    "Number of Transactions": { today: 9800, previousDay: 9300 },
  },
  {
    name: "March",
    "Top Sales": { today: 62000, previousDay: 63000 },
    "Average Sales": { today: 55000, previousDay: 52000 },
    "Number of Transactions": { today: 10750, previousDay: 10300 },
  },
  {
    name: "April",
    "Top Sales": { today: 64000, previousDay: 62000 },
    "Average Sales": { today: 56000, previousDay: 54000 },
    "Number of Transactions": { today: 11000, previousDay: 10500 },
  },
  {
    name: "May",
    "Top Sales": { today: 65000, previousDay: 64000 },
    "Average Sales": { today: 57000, previousDay: 54500 },
    "Number of Transactions": { today: 11500, previousDay: 10800 },
  },
  {
    name: "June",
    "Top Sales": { today: 67000, previousDay: 66000 },
    "Average Sales": { today: 59000, previousDay: 57000 },
    "Number of Transactions": { today: 12000, previousDay: 11200 },
  },
  {
    name: "July",
    "Top Sales": { today: 68000, previousDay: 67000 },
    "Average Sales": { today: 60000, previousDay: 58000 },
    "Number of Transactions": { today: 12500, previousDay: 11500 },
  },
  {
    name: "August",
    "Top Sales": { today: 69000, previousDay: 68000 },
    "Average Sales": { today: 61000, previousDay: 59000 },
    "Number of Transactions": { today: 13000, previousDay: 11800 },
  },
  {
    name: "September",
    "Top Sales": { today: 71000, previousDay: 70000 },
    "Average Sales": { today: 63000, previousDay: 61000 },
    "Number of Transactions": { today: 13500, previousDay: 12000 },
  },
  {
    name: "October",
    "Top Sales": { today: 72000, previousDay: 71000 },
    "Average Sales": { today: 64000, previousDay: 62000 },
    "Number of Transactions": { today: 14000, previousDay: 12500 },
  },
  {
    name: "November",
    "Top Sales": { today: 73000, previousDay: 72000 },
    "Average Sales": { today: 65000, previousDay: 63000 },
    "Number of Transactions": { today: 14500, previousDay: 13000 },
  },
  {
    name: "December",
    "Top Sales": { today: 75000, previousDay: 74000 },
    "Average Sales": { today: 67000, previousDay: 65000 },
    "Number of Transactions": { today: 15000, previousDay: 13500 },
  },
];

const monthlyData = [
  {
    name: "Week 1",
    "Top Sales": { today: 74000, previousDay: 69000 },
    "Average Sales": { today: 67000, previousDay: 64000 },
    "Number of Transactions": { today: 12000, previousDay: 11500 },
  },

  {
    name: "Week 2",
    "Top Sales": { today: 71000, previousDay: 68000 },
    "Average Sales": { today: 65000, previousDay: 63000 },
    "Number of Transactions": { today: 11800, previousDay: 11600 },
  },

  {
    name: "Week 3",
    "Top Sales": { today: 76000, previousDay: 73000 },
    "Average Sales": { today: 69000, previousDay: 67000 },
    "Number of Transactions": { today: 12500, previousDay: 12000 },
  },

  {
    name: "Week 4",
    "Top Sales": { today: 72000, previousDay: 70000 },
    "Average Sales": { today: 64000, previousDay: 63000 },
    "Number of Transactions": { today: 11900, previousDay: 11800 },
  },
];

const weeklyData = [
  {
    name: "Saturday",
    "Top Sales": { today: 51000, previousDay: 57000 },
    "Average Sales": { today: 46000, previousDay: 50000 },
    "Number of Transactions": { today: 9700, previousDay: 10300 },
  },
  {
    name: "Sunday",
    "Top Sales": { today: 67000, previousDay: 72000 },
    "Average Sales": { today: 53000, previousDay: 55000 },
    "Number of Transactions": { today: 10800, previousDay: 11300 },
  },
  {
    name: "Monday",
    "Top Sales": { today: 72000, previousDay: 68000 },
    "Average Sales": { today: 60000, previousDay: 56000 },
    "Number of Transactions": { today: 11200, previousDay: 10600 },
  },
  {
    name: "Tuesday",
    "Top Sales": { today: 78000, previousDay: 83000 },
    "Average Sales": { today: 65000, previousDay: 69000 },
    "Number of Transactions": { today: 11500, previousDay: 11800 },
  },
  {
    name: "Wednesday",
    "Top Sales": { today: 83000, previousDay: 78000 },
    "Average Sales": { today: 67000, previousDay: 64000 },
    "Number of Transactions": { today: 11900, previousDay: 11400 },
  },
  {
    name: "Thursday",
    "Top Sales": { today: 89000, previousDay: 85000 },
    "Average Sales": { today: 71000, previousDay: 67000 },
    "Number of Transactions": { today: 14200, previousDay: 11800 },
  },
  {
    name: "Friday",
    "Top Sales": { today: 90000, previousDay: 92000 },
    "Average Sales": { today: 70000, previousDay: 72000 },
    "Number of Transactions": { today: 12500, previousDay: 10000 },
  },
];

function Sales() {
  const [selected, setSelected] = useState("Top Sales");
  const [selectedData, setSelectedData] = useState(dailyData);
  const [open, setOpen] = useState(false);
  const getLegendPayload = () => {
    switch (selectedData) {
      case dailyData:
        return [
          { value: "Today", color: "#8979FF" },
          { value: "Previous Day", color: "#FF928A" },
        ];
      case weeklyData:
        return [
          { value: "This Week", color: "#8979FF" },
          { value: "Last Week", color: "#FF928A" },
        ];
      case monthlyData:
        return [
          { value: "This Month", color: "#8979FF" },
          { value: "Last Month", color: "#FF928A" },
        ];
      case yearlyData:
        return [
          { value: "This Year", color: "#8979FF" },
          { value: "Last Year", color: "#FF928A" },
        ];
      default:
        return [
          { value: "Today", color: "#8979FF" },
          { value: "Previous Day", color: "#FF928A" },
        ];
    }
  };
  const handleDropdownToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleSelectChange = (e:any) => {
    setSelected(e.target.textContent);
    setOpen(false); 
  };
  return (
    <div className="bg-[#EBF1F4] py-6 px-10 rounded-xl">
      <div className="flex justify-between  px-10 py-5 mb-4 bg-white rounded relative">
      <div
        className="outline-none bg-[#E4F4FF] py-2 cursor-pointer w-64 px-4 flex justify-between items-center"
        onClick={handleDropdownToggle}
      >
        {selected} 
        {
          open ?<FaChevronUp/>:<FaChevronDown/>
        }
      </div>
      {open && (
        <div className="absolute bg-[#F3F3F3] shadow-md mt-1 z-50 top-16 w-64">
          <div onClick={handleSelectChange} className="py-2 px-4 cursor-pointer hover:bg-[#CD5161]">
            Top Sales
          </div>
          <div onClick={handleSelectChange} className="py-2 px-4 cursor-pointer hover:bg-[#CD5161]">
            Average Sales
          </div>
          <div onClick={handleSelectChange} className="py-2 px-4 cursor-pointer hover:bg-[#CD5161]">
            Number of Transactions
          </div>
        </div>
      )}

        <div className="text-[#252525] font-semibold flex gap-3">
          <button
            className={`p-1 rounded ${
              selectedData === dailyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"
            } `}
            onClick={() => setSelectedData(dailyData)}
          >
            Daily
          </button>
          <button
            className={`p-1 rounded ${
              selectedData === weeklyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"
            } `}
            onClick={() => setSelectedData(weeklyData)}
          >
            Weekly
          </button>
          <button
            className={`p-1 rounded ${
              selectedData === monthlyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"
            } `}
            onClick={() => setSelectedData(monthlyData)}
          >
            Monthly
          </button>
          <button
            className={`p-1 rounded ${
              selectedData === yearlyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"
            } `}
            onClick={() => setSelectedData(yearlyData)}
          >
            Yearly
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={selectedData}
        >
          <defs>
            <linearGradient
              id="todayGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="rgba(137, 121, 255, 0.3)"
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor="rgba(137, 121, 255, 0.05)"
                stopOpacity={1}
              />
            </linearGradient>
            <linearGradient
              id="previousDayGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="rgba(255, 146, 138, 0.3)"
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor="rgba(255, 146, 138, 0.05)"
                stopOpacity={1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
          <YAxis />
          <Tooltip />
          <Legend
            payload={getLegendPayload()}
            wrapperStyle={{
              backgroundColor: "white",
              textAlign: "center",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />

          <Area
            type="monotone"
            dataKey={`${selected}.today`}
            stroke="#8979FF"
            fill="url(#todayGradient)"
          />

          <Area
            type="monotone"
            dataKey={`${selected}.previousDay`}
            stroke="#FF928A"
            fillOpacity={1}
            fill="url(#previousDayGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sales;

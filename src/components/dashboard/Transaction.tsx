"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const data = {
  Drinks: [
    {
      name: "7am-10am",
      Daily: 1000,
      Weekly: 2400,
      Monthly: 2100,
      Yearly: 2600,
    },
    {
      name: "10am-2pm",
      Daily: 2000,
      Weekly: 3400,
      Monthly: 4400,
      Yearly: 3400,
    },
    { name: "2pm-6pm", Daily: 3000, Weekly: 4400, Monthly: 6400, Yearly: 5400 },
    {
      name: "6pm-10am",
      Daily: 4000,
      Weekly: 5400,
      Monthly: 8400,
      Yearly: 8400,
    },
  ],
  Beverages: [
    {
      name: "Coffee",
      Daily: 1200,
      Weekly: 8000,
      Monthly: 25000,
      Yearly: 30000,
    },
    { name: "Tea", Daily: 900, Weekly: 6300, Monthly: 20000, Yearly: 24000 },
    {
      name: "Juices",
      Daily: 1500,
      Weekly: 10500,
      Monthly: 35000,
      Yearly: 42000,
    },
  ],
  "Fresh Produce": [
    { name: "Apples", Daily: 800, Weekly: 5600, Monthly: 24000, Yearly: 28000 },
    {
      name: "Bananas",
      Daily: 1000,
      Weekly: 7000,
      Monthly: 30000,
      Yearly: 35000,
    },
    {
      name: "Tomatoes",
      Daily: 500,
      Weekly: 3500,
      Monthly: 15000,
      Yearly: 18000,
    },
  ],
  Dairy: [
    { name: "Milk", Daily: 1500, Weekly: 10500, Monthly: 45000, Yearly: 54000 },
    { name: "Cheese", Daily: 600, Weekly: 4200, Monthly: 18000, Yearly: 21600 },
    { name: "Yogurt", Daily: 800, Weekly: 5600, Monthly: 24000, Yearly: 28800 },
  ],
  Bakery: [
    { name: "Bread", Daily: 1200, Weekly: 8400, Monthly: 36000, Yearly: 43200 },
    { name: "Cakes", Daily: 500, Weekly: 3500, Monthly: 15000, Yearly: 18000 },
    {
      name: "Pastries",
      Daily: 600,
      Weekly: 4200,
      Monthly: 18000,
      Yearly: 21600,
    },
  ],
  "Meat & Seafood": [
    {
      name: "Chicken",
      Daily: 800,
      Weekly: 5600,
      Monthly: 24000,
      Yearly: 28000,
    },
    { name: "Beef", Daily: 600, Weekly: 4200, Monthly: 18000, Yearly: 21600 },
    { name: "Fish", Daily: 400, Weekly: 2800, Monthly: 12000, Yearly: 14400 },
  ],
  "Frozen Foods": [
    {
      name: "Frozen Vegetables",
      Daily: 1000,
      Weekly: 7000,
      Monthly: 30000,
      Yearly: 36000,
    },
    {
      name: "Frozen Pizza",
      Daily: 600,
      Weekly: 4200,
      Monthly: 18000,
      Yearly: 21600,
    },
    {
      name: "Frozen Fries",
      Daily: 500,
      Weekly: 3500,
      Monthly: 15000,
      Yearly: 18000,
    },
  ],
  Snacks: [
    { name: "Chips", Daily: 1000, Weekly: 7000, Monthly: 30000, Yearly: 36000 },
    {
      name: "Cookies",
      Daily: 800,
      Weekly: 5600,
      Monthly: 24000,
      Yearly: 28800,
    },
    { name: "Nuts", Daily: 600, Weekly: 4200, Monthly: 18000, Yearly: 21600 },
  ],
  "Household Items": [
    {
      name: "Cleaning Supplies",
      Daily: 400,
      Weekly: 2800,
      Monthly: 12000,
      Yearly: 14400,
    },
    {
      name: "Paper Towels",
      Daily: 600,
      Weekly: 4200,
      Monthly: 18000,
      Yearly: 21600,
    },
    {
      name: "Toilet Paper",
      Daily: 500,
      Weekly: 3500,
      Monthly: 15000,
      Yearly: 18000,
    },
  ],
  "Personal Care": [
    {
      name: "Shampoo",
      Daily: 500,
      Weekly: 3500,
      Monthly: 15000,
      Yearly: 18000,
    },
    { name: "Soap", Daily: 600, Weekly: 4200, Monthly: 18000, Yearly: 21600 },
    {
      name: "Toothpaste",
      Daily: 400,
      Weekly: 2800,
      Monthly: 12000,
      Yearly: 14400,
    },
  ],
};

const departmentNames = [
  "Drinks",
  "Beverages",
  "Fresh Produce",
  "Dairy",
  "Bakery",
  "Meat & Seafood",
  "Frozen Foods",
  "Snacks",
  "Household Items",
  "Personal Care",
];
const timesData = ["Daily", "Weekly", "Monthly", "Yearly"];

function Transaction() {
  const [selected, setSelected] = useState("Drinks");
  const [selectedTime, setSelectedTime] = useState("Daily");
  const [selectedData, setSelectedData] = useState(data.Drinks);
  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const handleDropdownToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleDropdownTime = () => {
    setOpenTime((prev) => !prev);
  };

  const handleSelectChange = (e: React.MouseEvent) => {
    const departmentName = (e.target as HTMLElement).textContent || "";
    setSelected(departmentName);
    // setSelectedData(data[departmentName] as (typeof data)[keyof typeof data]);
    setOpen(false);
  };
  const handleSelectTime = (e: React.MouseEvent) => {
    const Times = (e.target as HTMLElement).textContent || "";
    setSelectedTime(Times);
    setOpenTime(false);
  };

  return (
    <div className="bg-[#EBF1F4] py-6 px-10 rounded-xl">
      <div className="flex justify-between bg-white rounded  mb-4">
        <div className="flex justify-between px-10 py-5  relative">
          <div
            className="outline-none bg-[#E4F4FF] py-2 cursor-pointer w-40 px-4 flex justify-between items-center"
            onClick={handleDropdownToggle}
          >
            {selected}
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {open && (
            <div className="absolute bg-[#F3F3F3] shadow-md mt-1 z-50 top-16 w-40 ">
              {departmentNames.map((item, idx) => (
                <div
                  key={idx}
                  onClick={handleSelectChange}
                  className="py-2 px-4 cursor-pointer hover:bg-[#CD5161]"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-between px-10 py-5 relative">
          <div
            className="outline-none bg-[#E4F4FF] py-2 cursor-pointer w-28  px-4 flex justify-between items-center"
            onClick={handleDropdownTime}
          >
            {selectedTime}
            {openTime ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openTime && (
            <div className="absolute bg-[#F3F3F3] shadow-md mt-1 z-50 top-16 w-28">
              {timesData.map((item, idx) => (
                <div
                  key={idx}
                  onClick={handleSelectTime}
                  className="py-2 px-4 cursor-pointer hover:bg-[#CD5161]"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={selectedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            wrapperStyle={{
              backgroundColor: "white",
              textAlign: "center",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Bar
            dataKey={selectedTime}
            fill="#8979FF"
            background={{ fill: "#8979FF", opacity: ".2" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Transaction;

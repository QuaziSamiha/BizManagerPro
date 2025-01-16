"use client";
import { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const data = {
  Drinks: [
    { name: "Water", daily: 4000, weekly: 2400, monthly: 2400, yearly: 2400 },
    {
      name: "EnergyDrinks",
      daily: 3000,
      weekly: 1398,
      monthly: 2210,
      yearly: 2210,
    },
    {
      name: "SoftDrinks",
      daily: 2000,
      weekly: 9800,
      monthly: 2290,
      yearly: 2290,
    },
  ],
  Beverages: [
    { name: "Tea", daily: 1500, weekly: 7500, monthly: 3200, yearly: 3200 },
    { name: "Coffee", daily: 1800, weekly: 8400, monthly: 3700, yearly: 3700 },
    { name: "Juices", daily: 1300, weekly: 6500, monthly: 2800, yearly: 2800 },
  ],
  "Fresh Produce": [
    { name: "Apples", daily: 1200, weekly: 6000, monthly: 2600, yearly: 2600 },
    { name: "Bananas", daily: 1400, weekly: 7000, monthly: 3000, yearly: 3000 },
    { name: "Carrots", daily: 900, weekly: 4500, monthly: 2100, yearly: 2100 },
  ],
  Dairy: [
    { name: "Milk", daily: 5000, weekly: 25000, monthly: 12000, yearly: 12000 },
    { name: "Cheese", daily: 3000, weekly: 15000, monthly: 7000, yearly: 7000 },
    { name: "Yogurt", daily: 2000, weekly: 10000, monthly: 4000, yearly: 4000 },
  ],
  Bakery: [
    {
      name: "Bread",
      daily: 4500,
      weekly: 22500,
      monthly: 10000,
      yearly: 10000,
    },
    {
      name: "Croissants",
      daily: 3000,
      weekly: 15000,
      monthly: 7000,
      yearly: 7000,
    },
    { name: "Muffins", daily: 1800, weekly: 9000, monthly: 4000, yearly: 4000 },
  ],
  "Meat & Seafood": [
    {
      name: "Chicken",
      daily: 6000,
      weekly: 30000,
      monthly: 15000,
      yearly: 15000,
    },
    { name: "Salmon", daily: 2200, weekly: 11000, monthly: 5000, yearly: 5000 },
    { name: "Beef", daily: 3500, weekly: 17500, monthly: 8000, yearly: 8000 },
  ],
  "Frozen Foods": [
    {
      name: "Frozen Vegetables",
      daily: 4000,
      weekly: 20000,
      monthly: 9000,
      yearly: 9000,
    },
    {
      name: "Frozen Pizza",
      daily: 3000,
      weekly: 15000,
      monthly: 7000,
      yearly: 7000,
    },
    {
      name: "Frozen Fries",
      daily: 2500,
      weekly: 12500,
      monthly: 6000,
      yearly: 6000,
    },
  ],
  Snacks: [
    { name: "Chips", daily: 3500, weekly: 17500, monthly: 8000, yearly: 8000 },
    {
      name: "Cookies",
      daily: 2800,
      weekly: 14000,
      monthly: 6500,
      yearly: 6500,
    },
    { name: "Candy", daily: 2300, weekly: 11500, monthly: 5200, yearly: 5200 },
  ],
  "Household Items": [
    {
      name: "Toilet Paper",
      daily: 2000,
      weekly: 10000,
      monthly: 4500,
      yearly: 4500,
    },
    {
      name: "Laundry Detergent",
      daily: 1800,
      weekly: 9000,
      monthly: 4000,
      yearly: 4000,
    },
    {
      name: "Dish Soap",
      daily: 1600,
      weekly: 8000,
      monthly: 3500,
      yearly: 3500,
    },
  ],
  "Personal Care": [
    { name: "Shampoo", daily: 1200, weekly: 6000, monthly: 2700, yearly: 2700 },
    {
      name: "Conditioner",
      daily: 1500,
      weekly: 7500,
      monthly: 3300,
      yearly: 3300,
    },
    {
      name: "Toothpaste",
      daily: 1000,
      weekly: 5000,
      monthly: 2300,
      yearly: 2300,
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

function BestSellingProducts() {
  const [selected, setSelected] = useState("Drinks");
  const [selectedData, setSelectedData] = useState(data.Dairy);
  const [open, setOpen] = useState(false);
  const handleDropdownToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleSelectChange = (e: any) => {
    setSelected(e.target.textContent);
    // setSelectedData(data[e.target.textContent]);
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
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open && (
          <div className="absolute bg-[#F3F3F3] shadow-md mt-1 z-50 top-16 w-64">
            {departmentNames.map((items, idx) => (
              <div
                key={idx}
                onClick={handleSelectChange}
                className="py-2 px-4 cursor-pointer hover:bg-[#CD5161]"
              >
                {items}
              </div>
            ))}
          </div>
        )}
        <div className=" flex items-center bg-[#E4F4FF] pl-6 rounded">
          <p className="text-xs font-semibold">2.57%</p>
          <div className="relative flex">
            <IoMdArrowDropup size={26} className="text-[#166A33]" />
            <IoMdArrowDropdown size={26} className="relative right-4" />
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={selectedData}>
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
          <Bar dataKey="daily" fill="#8979FF" name="Daily" />
          <Bar dataKey="weekly" fill="#FF928A" name="Weekly" />
          <Bar dataKey="monthly" fill="#3CC3DF" name="Monthly" />
          <Bar dataKey="yearly" fill="#FFAE4C" name="Yearly" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BestSellingProducts;

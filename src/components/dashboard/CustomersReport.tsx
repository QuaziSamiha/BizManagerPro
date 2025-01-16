"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const customerData = [
  {
    name: "Daily",
    "New Customers": 1000,
    "New Customer Acquisition Rate": 5,
    "Average First Purchase Value": 200,
    "Average Revenue": 1000,
  },
  {
    name: "Weekly",
    "New Customers": 5000,
    "New Customer Acquisition Rate": 30,
    "Average First Purchase Value": 1200,
    "Average Revenue": 7000,
  },
  {
    name: "Monthly",
    "New Customers": 15000,
    "New Customer Acquisition Rate": 100,
    "Average First Purchase Value": 4800,
    "Average Revenue": 25000,
  },
  {
    name: "Quarterly",
    "New Customers": 45000,
    "New Customer Acquisition Rate": 300,
    "Average First Purchase Value": 14400,
    "Average Revenue": 22000,
  },
  {
    name: "Yearly",
    "New Customers": 180000,
    "New Customer Acquisition Rate": 1200,
    "Average First Purchase Value": 57600,
    "Average Revenue": 120000,
  },
];

function CustomersReport() {
  return (
    <div className="bg-[#EBF1F4] py-6 px-10  rounded-xl h-full flex justify-center items-end">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={customerData}>
          <defs>
            <linearGradient id="newCustomersGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(137, 121, 255, 0.3)" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(137, 121, 255, 0.05)" stopOpacity={1} />
            </linearGradient>

            <linearGradient id="acquisitionRateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 146, 138, 0.3)" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(255, 146, 138, 0.05)" stopOpacity={1} />
            </linearGradient>

            <linearGradient id="avgFirstPurchaseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(76, 175, 80, 0.3)" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(76, 175, 80, 0.05)" stopOpacity={1} />
            </linearGradient>

            <linearGradient id="avgRevenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 235, 59, 0.3)" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(255, 235, 59, 0.05)" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
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

          <Area
            type="monotone"
            dataKey="New Customers"
            stroke="#8979FF"
            fill="url(#newCustomersGradient)"
          />

          <Area
            type="monotone"
            dataKey="New Customer Acquisition Rate"
            stroke="#FF928A"
            fill="url(#acquisitionRateGradient)"
          />

          <Area
            type="monotone"
            dataKey="Average First Purchase Value"
            stroke="#4CAF50"
            fill="url(#avgFirstPurchaseGradient)"
          />
          <Area
            type="monotone"
            dataKey="Average Revenue"
            stroke="#FFEB3B"
            fill="url(#avgRevenueGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomersReport;

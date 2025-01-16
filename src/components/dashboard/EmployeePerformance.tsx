"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Anderson', daily: 4000, weekly: 2400, monthly: 2400, yearly: 2400 },
  { name: 'Emily', daily: 3000, weekly: 1398, monthly: 2210, yearly: 2210 },
  { name: 'Michael', daily: 2000, weekly: 9800, monthly: 2290, yearly: 2290 },
  { name: 'Sarah', daily: 2780, weekly: 3908, monthly: 2000, yearly: 2000 },
  { name: 'David', daily: 1890, weekly: 4800, monthly: 2181, yearly: 2181 },
];
function EmployeePerformance() {
  return (
    <div className='bg-[#EBF1F4] py-6 px-10 rounded-xl flex justify-center items-end h-full'>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
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
          <Bar dataKey="daily" fill="#8979FF" name="Daily" />
          <Bar dataKey="weekly" fill="#FF928A" name="Weekly" />
          <Bar dataKey="monthly" fill="#3CC3DF" name="Monthly" />
          <Bar dataKey="yearly" fill="#FFAE4C" name="Yearly" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EmployeePerformance
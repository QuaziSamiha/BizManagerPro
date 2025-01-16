"use client"
import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList, Legend } from 'recharts';

const dailyData = [
  { name: '7pm-10pm', value: 400 },
  { name: '7am-10am', value: 300 },
  { name: '10am-1pm', value: 200 },
  { name: '1pm-4pm', value: 200 },
  { name: '4pm-7pm', value: 300 },
];
const weeklyData = [
  { name: 'Monday', value: 100 },
  { name: 'Tuesday', value: 150 },
  { name: 'Wednesday', value: 200 },
  { name: 'Thursday', value: 250 },
  { name: 'Friday', value: 300 },
  { name: 'Saturday', value: 350 },
  { name: 'Sunday', value: 400 },
];
const monthlyData = [
  { name: 'Week 1', value: 400 },
  { name: 'Week 2', value: 300 },
  { name: 'Week 3', value: 300 },
  { name: 'Week 4', value: 200 },
];
const yearlyData = [
  { name: 'January', value: 4000 },
  { name: 'February', value: 3500 },
  { name: 'March', value: 4200 },
  { name: 'April', value: 3900 },
  { name: 'May', value: 4500 },
  { name: 'June', value: 4300 },
  { name: 'July', value: 4400 },
  { name: 'August', value: 4600 },
  { name: 'September', value: 4700 },
  { name: 'October', value: 4800 },
  { name: 'November', value: 4900 },
  { name: 'December', value: 5000 },
];

const COLORS = {
  dailyData: ['#8979FF', '#FFAE4C', "#537FF1", '#3CC3DF', '#FF928A'],
  yearlyData: ['#8C63DA', '#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C', '#537FF1', '#6FD195', '#FF928A', '#3CC3DF', '#FFAE4C', '#537FF1', '#6FD195'],
  monthlyData: ['#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C'],
  weeklyData: ['#8C63DA', '#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C', '#537FF1', '#6FD195'],
};

function PaymentMethods() {
  const [selectedData, setSelectedData] = useState(dailyData);
  const [selectedColor, setSelectedColor] = useState(COLORS.dailyData);

  const totalValue = useMemo(() => {
    return selectedData.reduce((sum, entry) => sum + entry.value, 0);
  }, [selectedData]);

  const formatter = (value:any) => {

    const entry:any = selectedData.find(d => d.name === value);

    const percent = ((entry?.value / totalValue) * 100).toFixed(0);
    return `${entry?.value} (${percent}%)`;
  };

  return (
    <div className='bg-[#EBF1F4] py-6 px-10 rounded-xl'>
      <div className="text-[#252525] font-semibold flex gap-3">
        <button
          className={`p-1 rounded ${selectedData === dailyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"}`}
          onClick={() => { setSelectedData(dailyData); setSelectedColor(COLORS.dailyData) }}
        >
          Daily
        </button>
        <button
          className={`p-1 rounded ${selectedData === weeklyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"}`}
          onClick={() => { setSelectedData(weeklyData); setSelectedColor(COLORS.weeklyData) }}
        >
          Weekly
        </button>
        <button
          className={`p-1 rounded ${selectedData === monthlyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"}`}
          onClick={() => { setSelectedData(monthlyData); setSelectedColor(COLORS.monthlyData) }}
        >
          Monthly
        </button>
        <button
          className={`p-1 rounded ${selectedData === yearlyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"}`}
          onClick={() => { setSelectedData(yearlyData); setSelectedColor(COLORS.yearlyData) }}
        >
          Yearly
        </button>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={selectedData}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {selectedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={selectedColor[index % selectedColor.length]} />
            ))}

            <LabelList
              dataKey="name"
              position="outside"
              formatter={formatter}
              style={{
                fontSize: '14px',
                pointerEvents: 'none',
                stroke: "none",
              }}
            />
          </Pie>
          <Legend
            wrapperStyle={{
              backgroundColor: "white",
              textAlign: "center",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PaymentMethods;

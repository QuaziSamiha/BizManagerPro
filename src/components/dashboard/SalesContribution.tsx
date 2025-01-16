"use client"
import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList, Legend } from 'recharts';


const dailyData=[
  { name: 'Beverages', value: 400 },
  { name: 'Drinks', value: 350 },
  { name: 'Fresh Produce', value: 420 },
  { name: 'Dairy', value: 390 },
  { name: 'Bakery', value: 450 },
  { name: 'Meat & Seafood', value: 430 },
  { name: 'Frozen Foods', value: 440 },
  { name: 'Snacks', value: 460 },
  { name: 'Household Items', value: 470 },
  { name: 'Personal Care', value: 480 },
]
const monthlyData=[
  { name: 'Beverages', value: 4300 },
  { name: 'Drinks', value: 3510 },
  { name: 'Fresh Produce', value: 2300 },
  { name: 'Dairy', value: 1200 },
  { name: 'Bakery', value: 3500 },
  { name: 'Meat & Seafood', value: 4300 },
  { name: 'Frozen Foods', value: 4100 },
  { name: 'Snacks', value: 4800 },
  { name: 'Household Items', value: 2800 },
  { name: 'Personal Care', value: 1800 },
]
const weeklyData=[
  { name: 'Beverages', value: 9000 },
  { name: 'Drinks', value: 10500 },
  { name: 'Fresh Produce', value: 14200 },
  { name: 'Dairy', value: 13900 },
  { name: 'Bakery', value: 24500 },
  { name: 'Meat & Seafood', value: 1200 },
  { name: 'Frozen Foods', value: 1200 },
  { name: 'Snacks', value: 2300 },
  { name: 'Household Items', value: 3700 },
  { name: 'Personal Care', value: 1800 },
]
const yearlyData=[
  { name: 'Beverages', value: 4000 },
  { name: 'Drinks', value: 3500 },
  { name: 'Fresh Produce', value: 4200 },
  { name: 'Dairy', value: 3900 },
  { name: 'Bakery', value: 4500 },
  { name: 'Meat & Seafood', value: 4300 },
  { name: 'Frozen Foods', value: 4400 },
  { name: 'Snacks', value: 4600 },
  { name: 'Household Items', value: 4700 },
  { name: 'Personal Care', value: 4800 },
]
const COLORS = [
 "#8979FF","#FF928A","#3CC3DF","#FFAE4C","#537FF1","#6FD195","#8C63DA","#2BB7DC","#1F94FF","#F4CF3B"
]
function SalesContribution() {
  const [selectedData, setSelectedData] = useState(dailyData);

  const totalValue = useMemo(() => {
    return selectedData.reduce((sum, entry) => sum + entry.value, 0);
  }, [selectedData]);

  const formatter = (value:any) => {

    const entry:any = selectedData.find(d => d.name === value);

    const percent = ((entry.value / totalValue) * 100).toFixed(0);
    return `${entry?.value} (${percent}%)`;
  };

  return (
    <div className='bg-[#EBF1F4] py-6 px-10 rounded-xl h-full flex flex-col justify-between items-end'>
      <div className="text-[#252525] font-semibold flex gap-3">
        <button
          className={`p-1 rounded ${selectedData === dailyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"}`}
          onClick={() => { setSelectedData(dailyData);  }}
        >
          Daily
        </button>
        <button
          className={`p-1 rounded ${selectedData === weeklyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"}`}
          onClick={() => { setSelectedData(weeklyData); }}
        >
          Weekly
        </button>
        <button
          className={`p-1 rounded ${selectedData === monthlyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"}`}
          onClick={() => { setSelectedData(monthlyData); }}
        >
          Monthly
        </button>
        <button
          className={`p-1 rounded ${selectedData === yearlyData ? "bg-[#C7E4FF]" : "bg-[#F2F9FF]"}`}
          onClick={() => { setSelectedData(yearlyData);}}
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
  )
}

export default SalesContribution
"use client";
import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

// =========== CALCULATOR BUTTON SEQUENCE =======
const data = [
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "0" },
  { label: "00" },
  { label: "." },
];

const Calculator = () => {
  const [view, SetView] = useState("$");
  return (
    <div className="w-full bg-bgPrimary text-white text-sm font-semibold h-full flex flex-col">
      <div className="pt-10 pb-2 border-b-2 border-violetQuinary flex w-full px-10">
        <FaDeleteLeft size={20} className="rotate-180" />
        <div className="flex justify-end items-center flex-1">{view}</div>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 h-full gap-3 p-2">
        {data.map((d, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center bg-blueTernary hover:bg-blueQuaternary rounded-md"
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

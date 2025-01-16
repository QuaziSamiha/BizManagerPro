import React from "react";
import Sales from "./Sales";
import Transaction from "./Transaction";
import EmployeePerformance from "./EmployeePerformance";
import BestSellingProducts from "./BestSellingProducts";
import SalesContribution from "./SalesContribution";
import PaymentMethods from "./PaymentMethods";
import CustomersReport from "./CustomersReport";


function Dashboard() {
  return (
    <div className="">
      <h1 className="text-3xl text-[#252525]">
        Welcome Back,<span className="font-semibold">Mr. Smith</span>
      </h1>
      <p className="text-2xl font-semibold text-[#3C3B6E] py-3">Sales</p>
      <Sales />
      <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col h-full w-full">
          <p className="text-2xl font-semibold text-[#3C3B6E] py-3">
            Average Transaction Value
          </p>
          <Transaction />
        </div>
        <div className="flex flex-col h-full w-full">
          <p className="text-2xl font-semibold text-[#3C3B6E] py-3">
            Employees Performing Time
          </p>
          <EmployeePerformance />
        </div>
        <div className="flex flex-col h-full w-full">
          <p className="text-2xl font-semibold text-[#3C3B6E] py-3">
            Best-Selling Products
          </p>
          <BestSellingProducts />
        </div>
        <div className="flex flex-col h-full w-full">
          <p className="text-2xl font-semibold text-[#3C3B6E] py-3">
            Total Sales Contribution
          </p>
          <SalesContribution />
        </div>
        <div className="flex flex-col h-full w-full">
          <p className="text-2xl font-semibold text-[#3C3B6E] py-3">
            Payment Methods Used
          </p>
          <PaymentMethods />
        </div>
        <div className="flex flex-col h-full w-full">
          <p className="text-2xl font-semibold text-[#3C3B6E] py-3">
          New Customers Report
          </p>
          <CustomersReport />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

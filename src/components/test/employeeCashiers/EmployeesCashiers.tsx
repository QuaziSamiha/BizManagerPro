"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddNewEmployeeForm from "./AddNewEmployee/AddNewEmployeeForm";
import CashierList from "./CashierList";

const EmployeesCashiers = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false); // Separate state for the filter modal

  return (
    <>
      <section className="py-5 px-12">
        <main className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <p className="font-bold text-textPrimary text-xl">
              Employees & Cashier
            </p>

            <Dialog open={filterModalOpen} onOpenChange={setFilterModalOpen}>
              <DialogTrigger className="">
                <div className="flex items-center gap-2 bg-violetAltPrimary hover:bg-violetAltSecondary px-3 py-2 rounded-md font-medium text-white text-base">
                  <FaPlus />
                  New Cashier
                </div>
              </DialogTrigger>

              <DialogContent className="bg-white w-[80vw] max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="font-semibold text-2xl">
                    New Employee
                  </DialogTitle>
                </DialogHeader>
                <AddNewEmployeeForm />
              </DialogContent>
            </Dialog>
          </div>
          <CashierList />
        </main>
      </section>
    </>
  );
};

export default EmployeesCashiers;

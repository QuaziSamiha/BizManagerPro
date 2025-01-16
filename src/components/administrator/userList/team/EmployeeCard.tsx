import { AccordionContent } from "@/components/ui/accordion";
import React from "react";

interface IEmployee {
  employeeName: string;
  employeePosition: string;
}

const EmployeeCard: React.FC<IEmployee> = ({
  employeeName,
  employeePosition,
}) => {
  return (
    <AccordionContent className="grid max-md:grid-cols-2 grid-cols-4 w-full">
      <p className="font-normal text-black text-xl">{employeeName}</p>
      <p className="font-normal text-black text-xl">{employeePosition}</p>
      <div className="flex justify-end">
        <button className="w-fit bg-violetSecondary hover:bg-violetPrimary p-2 rounded-md font-medium text-textPrimary text-sm">
          Update Password
        </button>
      </div>
      <div className="flex justify-end">
        <button className="w-fit bg-blueSecondary p-2 rounded-md font-medium text-textPrimary text-sm">
          Edit
        </button>
      </div>
    </AccordionContent>
  );
};

export default EmployeeCard;

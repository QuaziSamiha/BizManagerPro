"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import EmployeeCard from "./EmployeeCard";

interface IEmployee {
  employeeName: string;
  employeePosition: string;
}

interface IProps {
  managementTeam: IEmployee[];
  salesAndCustomerServiceTeam: IEmployee[];
}

const Team: React.FC<IProps> = ({
  managementTeam,
  salesAndCustomerServiceTeam,
}) => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="px-6 py-2">
          <AccordionTrigger className="font-medium text-2xl text-black">
            Management Team
          </AccordionTrigger>
          {managementTeam.map((employee: IEmployee, index: number) => (
            <AccordionContent key={index}>
              <EmployeeCard
                employeeName={employee.employeeName}
                employeePosition={employee.employeePosition}
              />
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem value="item-2" className="px-6 py-2">
          <AccordionTrigger className="font-medium text-2xl text-black">
            Sales and Customer Service
          </AccordionTrigger>
          {salesAndCustomerServiceTeam.map(
            (employee: IEmployee, index: number) => (
              <EmployeeCard
                key={index}
                employeeName={employee.employeeName}
                employeePosition={employee.employeePosition}
              />
            )
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Team;

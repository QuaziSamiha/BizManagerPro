import React from "react";
import { GoPlus } from "react-icons/go";
import Team from "./team/Team";

interface IProps {
  handleNewUser: () => void;
}

const managementTeam = [
  {
    employeeName: "John Doe",
    employeePosition: "Chief Executive Officer",
  },
  {
    employeeName: "Jane Smith",
    employeePosition: "Chief Operating Officer",
  },
  {
    employeeName: "Michael Johnson",
    employeePosition: "Chief Technology Officer",
  },
  {
    employeeName: "Emily Davis",
    employeePosition: "Chief Financial Officer",
  },
  {
    employeeName: "William Brown",
    employeePosition: "Head of Human Resources",
  },
];

const salesAndCustomerServiceTeam = [
  {
    employeeName: "Sarah Wilson",
    employeePosition: "Sales Manager",
  },
  {
    employeeName: "James Anderson",
    employeePosition: "Customer Service Manager",
  },
  {
    employeeName: "Olivia Taylor",
    employeePosition: "Sales Representative",
  },
  {
    employeeName: "David Martinez",
    employeePosition: "Customer Support Specialist",
  },
  {
    employeeName: "Sophia Hernandez",
    employeePosition: "Account Manager",
  },
];


const UserList: React.FC<IProps> = ({ handleNewUser }) => {
  return (
    <main className="">
      <p className="font-bold text-textPrimary text-xl">Administrator</p>
      <div className="flex max-md:flex-col md:items-center gap-5 md:gap-[30px] mt-2">
        <p className="font-medium text-textPrimary text-base">
          Walmart Super Shop
        </p>
        <button className="bg-violetSecondary hover:bg-violetPrimary font-medium text-textPrimary text-sm p-[5px] rounded-[5px]">
          Change Selected Stores
        </button>
      </div>
      <div className="bg-peachSeconday p-[10px] mt-12 rounded-[10px]">
        <div className="flex justify-between items-center">
          <p className="font-bold text-textPrimary text-xl">User List</p>
          <button
            onClick={handleNewUser}
            className="bg-greenPrimary py-2 px-[10px] rounded-md font-medium text-primary text-base flex items-center gap-[10px]"
          >
            <GoPlus className="font-medium text-primary" /> New User
          </button>
        </div>
      </div>
      <div className="mt-[10px] bg-greySecondary">
        <Team managementTeam={managementTeam} salesAndCustomerServiceTeam={salesAndCustomerServiceTeam}/>
     </div>
    </main>
  );
};

export default UserList;

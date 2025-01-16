"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Schema from "./Schema";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import RadioButtons from "@/components/ui/form/RadioButtons";
import MultipleCheckboxInput from "@/components/ui/form/MultipleCheckboxInput";
import "react-toastify/dist/ReactToastify.css";

interface IFormInput {
  employeeName: string;
  employeeType: string;
  storeName: string;
  cashierPermissions?: (string | null | undefined)[];
}

interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
}

interface IStore {
  storeValue: string;
  storeName: string;
}

const stores: IStore[] = [
  {
    storeValue: "store_001",
    storeName: "Downtown Grocery",
  },
  {
    storeValue: "store_002",
    storeName: "Sunset Mart",
  },
  {
    storeValue: "store_003",
    storeName: "Evergreen Essentials",
  },
  {
    storeValue: "store_004",
    storeName: "Mountain View Supplies",
  },
  {
    storeValue: "store_005",
    storeName: "Oceanfront Market",
  },
];

interface IEmployeeType {
  valueId: string;
  valueLabel: string;
}

const employeeTypes: IEmployeeType[] = [
  {
    valueId: "cashier",
    valueLabel: "Cashier",
  },
  {
    valueId: "employee",
    valueLabel: "Employee",
  },
  {
    valueId: "admin",
    valueLabel: "Admin",
  },
];

const cashierPermissions = [
  {
    id: "isCashier",
    label: "Can Operate Register? (Is Cashier?)",
  },
  {
    id: "deleteProducts",
    label: "Delete Products",
  },
  {
    id: "discount",
    label: "Discount",
  },
  {
    id: "noSale",
    label: "No Sale",
  },
  {
    id: "priceChange",
    label: "Price Change",
  },
  {
    id: "printReport",
    label: "Print Report",
  },
  {
    id: "refund",
    label: "Refund",
  },
  {
    id: "voidTicket",
    label: "Void Ticket",
  },
  {
    id: "payrollManager",
    label: "Payroll Manager",
  },
];

const Add: React.FC<IAdd> = ({ setOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();

  const resolver = yupResolver(Schema);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch,
    control,
  } = useForm<IFormInput>({ resolver });

  const selectedEmployeeType = watch("employeeType");

  useEffect(() => {
    if (selectedEmployeeType !== "cashier") {
      resetField("cashierPermissions");
    }
  }, [selectedEmployeeType, resetField]);

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    setIsLoading(true);
    toast.success("Message sent successfully!", {
      position: "bottom-left",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    reset();
    refetch();
    setOpen(false);
    setIsLoading(true);
    // fetch(
    //     `url`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   )
    //     .then((res) => {
    //       console.log("res", res);

    //       return res.json();
    //     })
    //     .then((data) => {
    //        console.log("data", data);
    //       if (data.success === true) {
    //         toast.success("Message sent successfully!", {
    //           position: "bottom-left",
    //           autoClose: 3001,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });

    //         reset();
    //         refetch();
    //         setOpen(false);
    //       } else {
    //         toast.error("Message not sent. Please try again!", {
    //           position: "bottom-left",
    //           autoClose: 3001,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //       }
    //     })
    // .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <Input
            labelName="Employee Name"
            inputType="text"
            placeholderText="Name"
            name="employeeName"
            errors={errors}
            register={register}
          />

          <SelectField
            control={control}
            name="storeName"
            data={stores}
            label="Store"
            placeholderText="-Select Store-"
            errorMessage={errors?.storeName?.message}
            labelKey="storeName"
            valueKey="storeValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
          />

          <RadioButtons
            labelName="Employee Type"
            inputName="employeeType"
            errorMessage={errors?.employeeType?.message}
            register={register}
            data={employeeTypes}
            gridCols={3}
          />

          {selectedEmployeeType === "cashier" && (
            // AUTO SCROLL HAS TO BE ADDED
            <div className="">
              {/* <div className="overflow-y-auto"> */}
              <p className="font-medium text-bluePrimary text-2xl pb-2">
                Cashier Permissions
              </p>
              <MultipleCheckboxInput
                control={control}
                inputName="cashierPermissions"
                // title="Cashier Permissions"
                items={cashierPermissions}
                errors={errors}
                errorMessage={errors?.cashierPermissions?.message}
              />
            </div>
          )}
          <div>
            <input
              type="submit"
              value="Add New Employee"
              className="w-full bg-greenPrimary rounded-md text-white font-medium text-base py-2 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;

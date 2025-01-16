"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Schema from "./Schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/ui/form/Input";
import EditSelectField from "@/components/ui/form/EditSelectField";
import RadioButtons from "@/components/ui/form/RadioButtons";
import MultipleCheckboxInput from "@/components/ui/form/MultipleCheckboxInput";

interface IEditProps {
  setEditModalOpen: Function;
  refetch: any;
}

interface IFormInput {
  employeeName: string;
  storeName: string;
  employeeType: string;
  cashierPermissions?: (string | null | undefined)[];
}

interface IStore {
  storeValue: string;
  storeName: string;
}

interface IEmployeeType {
  valueId: string;
  valueLabel: string;
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

const Edit: FC<IEditProps> = ({ setEditModalOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();

  const resolver = yupResolver(Schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    resetField,
    watch,
  } = useForm<IFormInput>({
    resolver,
    defaultValues: {
      employeeName: "Reed Morrow",
      storeName: "store_004",
      // employeeType: "admin",
      employeeType: "cashier",
      cashierPermissions: ["isCashier", "discount"],
    },
  });

  const selectedEmployeeType = watch("employeeType");

  useEffect(() => {
    if (selectedEmployeeType !== "cashier") {
      resetField("cashierPermissions");
    }
  }, [selectedEmployeeType, resetField]);

  const onSubmit = (data: IFormInput) => {
    if (data.employeeType !== "cashier") {
      delete data.cashierPermissions;
    }
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
    setEditModalOpen(false);
    setIsLoading(true);
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

          <EditSelectField
            control={control}
            name="storeName"
            data={stores}
            label="Store"
            placeholder="-Select Store-"
            // error={errors?.storeName?.message}
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
            <div className="">
              <p className="font-medium text-bluePrimary text-2xl pb-2">
                Cashier Permissions
              </p>
              <MultipleCheckboxInput
                control={control}
                inputName="cashierPermissions"
                items={cashierPermissions}
                errors={errors}
                errorMessage={errors?.cashierPermissions?.message}
              />
            </div>
          )}
          <div>
            <input
              type="submit"
              value="Save"
              className="w-full bg-greenPrimary rounded-md text-white font-medium text-base py-2 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;

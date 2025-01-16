"use client";
import Input from "@/components/ui/form/Input";
import RadioButtons from "@/components/ui/form/RadioButtons";
import SelectField from "@/components/ui/form/SelectField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AddNewEmployeeSchema from "./AddNewEmployeeSchema";
import MultipleCheckboxInput from "@/components/ui/form/MultipleCheckboxInput";
import { useEffect } from "react";

interface IEmployeeType {
  valueId: string;
  valueLabel: string;
}

interface IStore {
  storeValue: string;
  storeName: string;
}

interface IFormInputs {
  employeeName: string;
  employeeType: string;
  storeName: string;
  cashierPermissions?: (string | null | undefined)[];
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
  // --------------------------
  // {
  //   id: "noSale1",
  //   label: "No Sale",
  // },
  // {
  //   id: "priceChange1",
  //   label: "Price Change",
  // },
  // {
  //   id: "printReport1",
  //   label: "Print Report",
  // },
  // {
  //   id: "refund1",
  //   label: "Refund",
  // },
  // {
  //   id: "voidTicket1",
  //   label: "Void Ticket",
  // },
  // {
  //   id: "payrollManager1",
  //   label: "Payroll Manager",
  // },
];

const AddNewEmployeeForm = () => {
  const resolver = yupResolver(AddNewEmployeeSchema);
  const {
    register,
    handleSubmit,
    control,
    resetField,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver });

  const selectedEmployeeType = watch("employeeType");

  useEffect(() => {
    if (selectedEmployeeType !== "cashier") {
      resetField("cashierPermissions");
    }
  }, [selectedEmployeeType, resetField]);

  const onSubmit = (employeeTypes: any) => console.log(employeeTypes);

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

export default AddNewEmployeeForm;

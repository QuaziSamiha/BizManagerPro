"use client";
import React from "react";
import Input from "@/components/ui/form/Input";
import { useForm } from "react-hook-form";
import PasswordInput from "@/components/ui/form/PasswordInput";
import MultipleCheckboxInput from "@/components/ui/form/MultipleCheckboxInput";
import { yupResolver } from "@hookform/resolvers/yup";
import AddNewUserSchema from "./AddNewUserSchema";

const reportCompanyItems = [
  { id: "kpiCompany", label: "KPI Reports" },
  { id: "departmentCompany", label: "Department Reports" },
  { id: "productCompany", label: "Product Reports" },
  { id: "taxCompany", label: "Tax Reports" },
  { id: "skuCompany", label: "SKU Reports" },
  { id: "scanDataCompany", label: "Scan Data Reports" },
];

const storeManagementCompanyItems = [
  { id: "registersCompany", label: "Registers" },
  { id: "employeesCashersCompany", label: "Employees & Cashers" },
  { id: "departmentsCompany", label: "Departments" },
  { id: "taxSetupCompany", label: "Tax Setup" },
  { id: "productsCompany", label: "Products" },
  { id: "tagsCompany", label: "Tags" },
  { id: "promotionsCompany", label: "Promotions" },
];

const inventoryFinancialCompanyItems = [
  { id: "inventoryCountCompany", label: "Inventory Count" },
  { id: "invoicesByVendorCompany", label: "Invoices By Vendor" },
  { id: "inventoryAuditCompany", label: "Inventory Audit" },
];

const lossPreventionCompanyItems = [
  { id: "lossPreventionCompany", label: "Loss Prevention" },
];

const reportStoreItems = [
  { id: "kpi", label: "KPI Reports" },
  { id: "department", label: "Department Reports" },
  { id: "product", label: "Product Reports" },
  { id: "tax", label: "Tax Reports" },
  { id: "sku", label: "SKU Reports" },
  { id: "scanData", label: "Scan Data Reports" },
];

const storeManagementStoreItems = [
  { id: "registers", label: "Registers" },
  { id: "employeesCashers", label: "Employees & Cashers" },
  { id: "departments", label: "Departments" },
  { id: "taxSetup", label: "Tax Setup" },
  { id: "products", label: "Products" },
  { id: "tags", label: "Tags" },
  { id: "promotions", label: "Promotions" },
];

const inventoryFinancialStoreItems = [
  { id: "inventoryCount", label: "Inventory Count" },
  { id: "invoicesByVendor", label: "Invoices By Vendor" },
  { id: "inventoryAudit", label: "Inventory Audit" },
];

const lossPreventionStoreItems = [
  { id: "lossPrevention", label: "Loss Prevention" },
];

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  companyReport: (string | undefined)[];
  companyStoreManagement: (string | undefined)[];
  companyInventoryFinancial: (string | undefined)[];
  companyLossPrevention: (string | undefined)[];
  storeReport: (string | undefined)[];
  storeStoreManagement: (string | undefined)[];
  storeInventoryFinancial: (string | undefined)[];
  storeLossPrevention: (string | undefined)[];
}

const AddNewUser = () => {
  const resolver = yupResolver(AddNewUserSchema);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver });
  const onSubmit = (data: IFormInputs) => {
    console.log(data);

    console.log(errors);
  };
  return (
    <main className="w-full">
      <p className="font-bold text-textPrimary text-xl mb-5 ml-1">New User</p>
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5"
        >
          <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-y-5 gap-x-[60px]">
            <Input
              inputType="text"
              labelName="First Name"
              placeholderText="First Name"
              name="firstName"
              errors={errors}
              register={register}
              isRequired={true}
            />
            <Input
              inputType="text"
              labelName="Last Name"
              placeholderText="Last Name"
              name="lastName"
              errors={errors}
              register={register}
              isRequired={true}
            />
            <Input
              inputType="email"
              labelName="Email"
              placeholderText="Email"
              name="email"
              errors={errors}
              register={register}
              isRequired={true}
            />
            <Input
              inputType="text"
              labelName="Phone Number"
              placeholderText="Phone Number"
              name="phoneNumber"
              errors={errors}
              register={register}
              isRequired={true}
            />
            <PasswordInput
              labelName="Password"
              placeholderText="Password"
              name="password"
              errors={errors}
              register={register}
              isRequired={true}
            />
            <PasswordInput
              labelName="Confirm Password"
              placeholderText="Confirm Password"
              name="confirmPassword"
              errors={errors}
              register={register}
              isRequired={true}
            />
          </div>
          <div className="mt-10 flex flex-col gap-10 w-full">
            <p className="font-bold text-textPrimary text-xl">
              User Permissions
            </p>
            <div className="bg-greyPrimary w-full rounded-lg px-2 py-4">
              <p className="font-bold text-textPrimary text-xl">
                Company-Wide Permissions
              </p>
              <div className="mt-4 grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-11 lg:gap-4 xl:gap-11 px-4">
                <MultipleCheckboxInput
                  control={control}
                  inputName="companyReport"
                  title="Reports"
                  items={reportCompanyItems}
                  errors={errors}
                  errorMessage={errors.companyReport?.message}
                  isRequired={true}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="companyStoreManagement"
                  title="Store Management"
                  items={storeManagementCompanyItems}
                  errors={errors}
                  errorMessage={errors.companyStoreManagement?.message}
                  isRequired={true}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="companyInventoryFinancial"
                  title="Inventory & Financial"
                  items={inventoryFinancialCompanyItems}
                  errors={errors}
                  errorMessage={errors.companyInventoryFinancial?.message}
                  isRequired={true}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="companyLossPrevention"
                  title="Loss Prevention"
                  items={lossPreventionCompanyItems}
                  errors={errors}
                  errorMessage={errors.companyLossPrevention?.message}
                  isRequired={true}
                />
              </div>
            </div>
            <div className="bg-greyPrimary w-full rounded-lg px-2 py-4">
              <p className="font-bold text-textPrimary text-xl">
                Store-Specific Permissions
              </p>
              <div className="mt-4 grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-11 lg:gap-4 xl:gap-11 px-4">
                <MultipleCheckboxInput
                  control={control}
                  inputName="storeReport"
                  title="Reports"
                  items={reportStoreItems}
                  errors={errors}
                  errorMessage={errors.storeReport?.message}
                  isRequired={true}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="storeStoreManagement"
                  title="Store Management"
                  items={storeManagementStoreItems}
                  errors={errors}
                  errorMessage={errors.storeStoreManagement?.message}
                  isRequired={true}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="storeInventoryFinancial"
                  title="Inventory & Financial"
                  items={inventoryFinancialStoreItems}
                  errors={errors}
                  errorMessage={errors.storeInventoryFinancial?.message}
                  isRequired={true}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="storeLossPrevention"
                  title="Loss Prevention"
                  items={lossPreventionStoreItems}
                  errors={errors}
                  errorMessage={errors.storeLossPrevention?.message}
                  isRequired={true}
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <input
                type="submit"
                value="Create User"
                className="bg-greenPrimary hover:bg-greenSecondary font-medium text-primary text-base rounded py-2 px-6 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddNewUser;

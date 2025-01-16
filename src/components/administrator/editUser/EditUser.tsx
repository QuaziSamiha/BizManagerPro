"use client";
import React from "react";
import Input from "@/components/ui/form/Input";
import { useForm } from "react-hook-form";
import PasswordInput from "@/components/ui/form/PasswordInput";
import MultipleCheckboxInput from "@/components/ui/form/MultipleCheckboxInput";

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

const inventoryFinancialsCompanyItems = [
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

const inventoryFinancialsStoreItems = [
  { id: "inventoryCount", label: "Inventory Count" },
  { id: "invoicesByVendor", label: "Invoices By Vendor" },
  { id: "inventoryAudit", label: "Inventory Audit" },
];

const lossPreventionStoreItems = [
  { id: "lossPrevention", label: "Loss Prevention" },
];

const EditUser = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <main className="w-full">
      <p className="font-bold text-textPrimary text-xl">User Details</p>
      <div className="flex items-center gap-[30px] mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5"
        >
          <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-y-5 gap-x-[60px]">
            <Input
              inputType="text"
              placeholderText="First Name"
              name="firstName"
              errors={errors}
              register={register}
            />
            <Input
              inputType="text"
              placeholderText="Last Name"
              name="lastName"
              errors={errors}
              register={register}
            />
            <Input
              inputType="text"
              placeholderText="Email"
              name="email"
              errors={errors}
              register={register}
            />
            <Input
              inputType="text"
              placeholderText="Phone Number"
              name="phoneNumber"
              errors={errors}
              register={register}
            />
            <PasswordInput
              placeholderText="Password"
              name="password"
              errors={errors}
              register={register}
            />
            <PasswordInput
              placeholderText="Confirm Password"
              name="confirmPassword"
              errors={errors}
              register={register}
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
                  inputName="storeSpecificReport"
                  title="Reports"
                  items={reportCompanyItems}
                  errors={errors}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="storeSpecificStoreManagement"
                  title="Store Management"
                  items={storeManagementCompanyItems}
                  errors={errors}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="storeSpecificInventoryFinancials"
                  title="Inventory & Financials"
                  items={inventoryFinancialsCompanyItems}
                  errors={errors}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="storeSpecificLossPrevention"
                  title="Loss Prevention"
                  items={lossPreventionCompanyItems}
                  errors={errors}
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
                  inputName="selectedReport"
                  title="Reports"
                  items={reportStoreItems}
                  errors={errors}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="selectedStoreManagement"
                  title="Store Management"
                  items={storeManagementStoreItems}
                  errors={errors}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="selectedInventoryFinancials"
                  title="Inventory & Financials"
                  items={inventoryFinancialsStoreItems}
                  errors={errors}
                />
                <MultipleCheckboxInput
                  control={control}
                  inputName="selectedLossPrevention"
                  title="Loss Prevention"
                  items={lossPreventionStoreItems}
                  errors={errors}
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <input
                type="submit"
                value="Save Change"
                className="bg-greenPrimary hover:bg-greenSecondary font-medium text-primary text-base rounded py-2 px-6 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditUser;

"use client";
import Input from "@/components/ui/form/Input";
import React from "react";
import SelectField from "@/components/ui/form/SelectField";
import { UseFormRegister } from "react-hook-form";

// ========= OPTION TYPE ========
interface IStore {
  storeValue: string;
  storeName: string;
}

// ========= PROPS TYPE DEFINITION ==========
interface IProps {
  control: any;
  register: UseFormRegister<any>;
  resetField?: any;
  errors?: any;
  isDisable?: boolean;
}

// ============== DEMO OPTIONS =============
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

const RegisterInfo: React.FC<IProps> = ({
  control,
  register,
  resetField,
  isDisable,
  errors,
}) => {
  return (
    <div className="flex justify-between gap-20">
      {/* ========= ALL FIELD WILL BE DISABLE FOR EDIT MODE =================== */}
      <SelectField
        control={control}
        name="store"
        data={stores}
        label="Select Store"
        placeholderText="-- Select Type --"
        errors={errors}
        labelKey="storeName"
        valueKey="storeValue"
        resetField={resetField}
        resetFieldName1="lists"
        resetFieldName2=""
        disabledValue="1"
        isLoading={false}
        // onChange={setSelected}
        makeDisable={isDisable}
        isRequired
      />
      <Input
        labelName="Register Name"
        inputType="text"
        placeholderText="Register Name"
        name="registerName"
        register={register}
        isRequired
        disabled={isDisable}
        errors={errors}
      />
      <Input
        labelName="POS Code"
        inputType="text"
        placeholderText="POS Code"
        name="posCode"
        register={register}
        isRequired
        disabled={isDisable}
        errors={errors}
      />
    </div>
  );
};

export default RegisterInfo;

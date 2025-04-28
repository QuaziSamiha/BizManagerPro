import InputField from "@/components/ui/form-inputs/InputField";
import SingleSelectSearch from "@/components/ui/form-inputs/SingleSelectSearch";
import React from "react";
import { useFormContext } from "react-hook-form";
import { uomOptions } from "../data/data";

const InventoryInfo = () => {
  const { control, trigger } = useFormContext();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <InputField
        labelName="Weight"
        placeholderText="Product Weight"
        name="weight"
        control={control}
        trigger={trigger}
      />
      <SingleSelectSearch
        labelName="Select a UOM"
        name="uom"
        control={control}
        options={uomOptions}
      />
      <InputField
        labelName="Low Stock Alert"
        placeholderText="Low Stock Quantity"
        inputType="number"
        name="lowStockAlertQty"
        control={control}
        trigger={trigger}
      />
    </div>
  );
};

export default InventoryInfo;

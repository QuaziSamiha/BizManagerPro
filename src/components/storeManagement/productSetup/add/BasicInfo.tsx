import InputField from "@/components/ui/form-inputs/InputField";
import SingleSelectSearch from "@/components/ui/form-inputs/SingleSelectSearch";
import { useFormContext } from "react-hook-form";
import { departmentOptions } from "../data/data";
import ToggleButton from "@/components/ui/form-inputs/ToggleButton";
import BarcodeSKU from "./BarcodeSKU";

const BasicInfo = () => {
  const { control, trigger } = useFormContext();
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InputField
          labelName="Name"
          placeholderText="Enter Product Name..."
          name="prodName"
          control={control}
          trigger={trigger}
          isRequired
        />
        <SingleSelectSearch
          labelName="Department"
          name="departmentId"
          control={control}
          options={departmentOptions}
          isLoading={false}
          isRequired
        />
      </div>

      <BarcodeSKU />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ToggleButton
          labelName="Tax"
          name="isTaxable"
          control={control}
          defaultValue={1}
          positiveText="Enable"
          negativeText="Disable"
        />
        <ToggleButton
          labelName="EBT Allowance"
          name="isEBTAllowed"
          control={control}
          defaultValue={1}
          positiveText="Enable"
          negativeText="Disable"
        />
      </div>
    </div>
  );
};

export default BasicInfo;

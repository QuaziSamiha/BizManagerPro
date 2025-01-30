/* eslint-disable @typescript-eslint/no-explicit-any */

import { Control, Controller, UseFormResetField } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

type TData = {
  id: number;
  label: string;
  value: string;
}
interface SelectFieldProps {
  control: Control<any>;
  resetField: UseFormResetField<any>;
  name: string;
  data: TData[];
  label: string;
  placeholder: string;
  error?: string;
  labelKey: string;
  valueKey: string;
  resetFieldName1: string;
  resetFieldName2: string;
  disabledValue: string;
  defaultValue: string;
  isLoading: boolean;
  makeDisable?: boolean;
}

const EditSelectField: React.FC<SelectFieldProps> = ({
  control,
  resetField,
  resetFieldName1,
  resetFieldName2,
  name,
  data,
  label,
  placeholder,
  error,
  labelKey,
  valueKey,
  defaultValue,
  isLoading,
  makeDisable,
}) => {
  return (
    <div className="lg:px-3 col-span-1">
      <label className="text-[#2D0C3E] text-basic pl-2">{label}</label>
      {isLoading ? (
        <Skeleton className="w-full h-11 bg-gray-300" />
      ) : (
        <div>
          <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({ field }) => (
              <Select
                {...field}
                // onValueChange={field.onChange}
                onValueChange={(value) => {
                  field.onChange(value);
                  resetField(resetFieldName1);
                  resetField(resetFieldName2);
                }}
                // disabled={!disabledValue}
                disabled={makeDisable}
              >
                <SelectTrigger className="outline-none placeholder:text-[#afacac] text-base py-1.5 pl-6 border-2 border-[#D4D4D4] rounded-md w-full flex">
                  <SelectValue
                    className="text-sm"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                  />
                </SelectTrigger>
                <SelectContent>
                  {data?.map((item: TData) => (
                    <SelectItem
                      key={item[valueKey as keyof TData] as string}
                      className="border-b-2 border-brandLsPrimary text-sm text-brandPrimary"
                      value={item[valueKey as keyof TData] as string}
                    >
                      {item[labelKey as keyof TData]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}{" "}
        </div>
      )}
    </div>
  );
};

export default EditSelectField;
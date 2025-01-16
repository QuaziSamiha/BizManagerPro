import { Controller } from "react-hook-form";
import { Skeleton } from "../skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

interface SelectFieldProps {
  control?: any;
  resetField?: any;
  name: string;
  data: any[];
  label?: string;
  placeholderText?: string;
  errorMessage?: string;
  errors?: any;
  labelKey: string;
  valueKey: string;
  resetFieldName1?: string;
  resetFieldName2?: string;
  disabledValue?: string;
  makeDisable?: boolean;
  isLoading?: boolean;
  onChange?: (value: any) => void;
  defaultValue?: any;
  isRequired?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  control,
  resetField,
  resetFieldName1,
  resetFieldName2,
  name,
  data,
  label,
  placeholderText,
  errorMessage,
  errors,
  labelKey,
  valueKey,
  disabledValue,
  makeDisable,
  isLoading,
  onChange,
  defaultValue,
  isRequired,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-black text-base pl-2">
        {label}
        {isRequired && !makeDisable && <span className="text-red-500 px-0.5">*</span>}
      </label>

      {isLoading ? (
        <Skeleton className="w-full h-11 bg-gray-300" />
      ) : (
        <div>
          <Controller
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                onValueChange={(value) => {
                  field.onChange(value);
                  // reset()
                  if (onChange) onChange(value);
                  resetField(resetFieldName1);
                  resetField(resetFieldName2);
                }}
                disabled={makeDisable}
                defaultValue={defaultValue}
              >
                <SelectTrigger className="outline-none text-base bg-greySecondary py-5 pl-4 rounded-md w-full flex">
                  <SelectValue
                    className="text-sm"
                    placeholder={placeholderText}
                  />
                </SelectTrigger>
                <SelectContent className="">
                  {data?.map((item: any) => (
                    <SelectItem
                      key={item[valueKey]}
                      className="bg-greySecondary hover:bg-redPrimary text-sm text-textPrimary hover:text-white"
                      value={item[valueKey]}
                    >
                      {item[labelKey]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors?.[name] && (
            <p className="text-red-500 text-sm mt-3.5 pl-3">
              {errors?.[name]?.message}
            </p>
          )}
          {/* {errorMessage && (
            <p className="text-red-500 text-sm mt-1 pl-3">{errorMessage}</p>
          )} */}
        </div>
      )}
    </div>
  );
};

export default SelectField;

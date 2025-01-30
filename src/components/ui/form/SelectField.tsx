import { Controller, FieldValues, Path } from "react-hook-form";
import { Skeleton } from "../skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { ISelectField } from "@/interfaces/form";

const SelectField = <T extends FieldValues, U>({
  control,
  resetField,
  resetFieldName1,
  resetFieldName2,
  name,
  data,
  label,
  placeholderText,
  errors,
  labelKey,
  valueKey,
  // disabledValue,
  makeDisable,
  isLoading,
  onChange,
  defaultValue,
  isRequired,
}: ISelectField<T, U>) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-black text-base pl-2">
        {label}
        {isRequired && !makeDisable && (
          <span className="text-red-500 px-0.5">*</span>
        )}
      </label>

      {isLoading ? (
        <Skeleton className="w-full h-11 bg-gray-300" />
      ) : (
        <div>
          <Controller
            control={control}
            name={name as Path<T>}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                onValueChange={(value) => {
                  field.onChange(value);
                  // reset()
                  if (onChange) onChange(value);
                  if (resetField) {
                    if (resetFieldName1) resetField(resetFieldName1 as Path<T>);
                    if (resetFieldName2) resetField(resetFieldName2 as Path<T>);
                  }
                }}
                disabled={makeDisable}
                defaultValue={defaultValue as string | undefined}
              >
                <SelectTrigger className="outline-none text-ashPrimary text-sm bg-greyPrimary py-5 pl-4 rounded-md w-full flex">
                  <SelectValue
                    className="text-sm"
                    placeholder={placeholderText}
                  />
                </SelectTrigger>
                <SelectContent className="">
                  {data?.map((item, index: number) => (
                    <SelectItem
                      key={index}
                      className="bg-whitePrimary hover:bg-blueSecondary text-sm text-blackSecondary"
                      value={item[valueKey as keyof U] as string}
                    >
                      {String(item[labelKey as keyof U])}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors?.[name] && (
            <p className="text-red-500 text-sm mt-3.5 pl-3">
              {typeof errors?.[name]?.message === "string" &&
                errors?.[name]?.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectField;

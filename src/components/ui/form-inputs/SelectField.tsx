import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ISelectField, ISelectOption } from "@/interfaces/form/form";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";

const SelectField = <T extends FieldValues>({
  label,
  placeholderText,
  name,
  control,
  trigger,
  data,
  labelKey,
  valueKey,
  isLoading = false,
  onChange,
  isRequired = false,
  defaultValue,
  makeDisable = false,
  requiredMessage = "One option must be selected",
}: ISelectField<T>) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-blackSecondary text-base font-medium pl-2">
        {label}
        {isRequired && !makeDisable && (
          <span className="text-red-500 px-0.5">*</span>
        )}
      </label>

      {isLoading ? (
        <Skeleton className="w-full h-11 bg-gray-200" />
      ) : (
        <div className="flex flex-col gap-2">
          <Controller
            control={control}
            name={name as Path<T>}
            rules={{ required: requiredMessage }}
            defaultValue={defaultValue as PathValue<T, Path<T>> | undefined}
            render={({ field, fieldState }) => (
              <>
                <Select
                  {...field}
                  onValueChange={(value) => {
                    field.onChange(value);
                    if (onChange) onChange(value);
                    trigger(name as Path<T>);
                  }}
                  disabled={makeDisable}
                >
                  <SelectTrigger className="outline-hidden text-blackSecondary text-sm bg-whiteSecondary py-5 pl-4 rounded-md w-full flex cursor-pointer">
                    <SelectValue
                      className="text-sm"
                      placeholder={placeholderText}
                      defaultValue={defaultValue}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {data?.map((item, index: number) => (
                      <SelectItem
                        key={index + 1}
                        value={item[valueKey as keyof ISelectOption] as string}
                        className="cursor-pointer"
                      >
                        {String(item[labelKey as keyof ISelectOption])}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.error && (
                  <p className="text-red-500 text-sm pl-2">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default SelectField;

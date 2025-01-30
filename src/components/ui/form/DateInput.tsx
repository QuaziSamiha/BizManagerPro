import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../calendar";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { IDateInput } from "@/interfaces/form";

const DateInput = <T extends FieldValues>({
  labelName,
  placeholderText,
  name,
  control,
  errors,
  dateFormat = "dd MMM, yy",
  setValue,
  isRequired,
  disabled,
}: IDateInput<T>) => {
  const [, setDate] = useState<Date>();
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, dateFormat);
      setDate(selectedDate);
      setValue(
        name as Path<T>,
        formattedDate as unknown as PathValue<T, Path<T>>
      );
    }
  };
  return (
    <div className="flex flex-col gap-3 w-full z-[99999]">
      <label className="text-black text-base pl-1">
        {labelName}
        {isRequired && <span className="text-red-500 px-0.5">*</span>}{" "}
      </label>

      <Controller
        name={name as Path<T>}
        control={control}
        rules={{ required: "Date is required" }}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal bg-greyPrimary",
                  !field.value && "text-muted-foreground"
                )}
                disabled={disabled}
              >
                <CalendarIcon />
                {field.value ? (
                  format(field.value, "dd MMM yy")
                ) : (
                  <span>{placeholderText}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto bg-white pointer-events-auto">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {errors[name] && !disabled && (
        <p className="text-red-500 text-sm">
          {typeof errors[name]?.message === "string"
            ? errors[name]?.message
            : ""}
        </p>
      )}
    </div>
  );
};

export default DateInput;

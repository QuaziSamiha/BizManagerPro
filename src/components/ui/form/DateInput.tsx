import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../calendar";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Controller } from "react-hook-form";

interface IDateInput {
  placeholderText?: string;
  name: string;
  labelName?: string;
  errors: any;
  control: any;
  setValue: any;
  isRequired?: boolean;
  dateFormat?: string;
  disabled?: boolean;
  defaultValue?: any;
}

const DateInput: React.FC<IDateInput> = ({
  labelName,
  placeholderText,
  name,
  control,
  errors,
  dateFormat = "dd MMM, yy",
  setValue,
  isRequired,
  disabled,
}) => {
  const [date, setDate] = useState<Date>();
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, dateFormat); // Format to "12 Dec, 24"
      setDate(selectedDate);
      setValue(name, formattedDate);
    }
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-black text-base pl-1">
        {labelName}
        {isRequired && <span className="text-red-500 px-0.5">*</span>}{" "}
      </label>

      <Controller
        name={name}
        control={control}
        rules={{ required: "Date is required" }}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal bg-greySecondary",
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
            <PopoverContent className="w-auto bg-white">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {errors[name] && !disabled && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default DateInput;

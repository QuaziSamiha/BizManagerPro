"use client";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoMdAddCircle } from "react-icons/io";
import { IoRemoveCircle } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import Schema from "./Schema";
import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import Toggle from "@/components/ui/form/Toggle";
import DateInput from "@/components/ui/form/DateInput";
import TimeInput from "@/components/ui/form/TimeInput";
import SubmitButton from "@/components/ui/form/SubmitButton";

interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
}

interface IPriceBreak {
  uoq: number;
  reward: string;
  price: number;
}

interface IWeeklyAvailability {
  day?: string;
  start?: string;
  end?: string;
  check?: boolean;
}

interface IFormInput {
  name: string;
  promoModeNever?: string;
  promoModeAdvance?: string;
  // startEndDateTimeComparison?:any;
  store?: string;
  priceBreak: IPriceBreak[];
  startPromoDate?: string;
  endPromoDate?: string;
  startPromoTime?: string;
  endPromoTime?: string;
  weeklyAvailability?: IWeeklyAvailability[];
}

interface IList {
  listValue: string;
  listName: string;
}

const rewardTypes: IList[] = [
  {
    listValue: "combo",
    listName: "Change the Combined Retail Price",
  },
  {
    listValue: "perOff",
    listName: "% off the Combined Retail Price",
  },
  {
    listValue: "amountCombo",
    listName: "$ Amount off the Combined Retail Price",
  },
];

const store: IList[] = [
  {
    listValue: "sodaBluster",
    listName: "Soda Bluster",
  },
  {
    listValue: "coolFizz",
    listName: "Cool Fizz",
  },
  {
    listValue: "chillSpritz",
    listName: "Chill Spritz",
  },
  {
    listValue: "freshSplash",
    listName: "Fresh Splash",
  },
  {
    listValue: "fruitFusion",
    listName: "Fruit Fusion",
  },
  {
    listValue: "energyRush",
    listName: "Energy Rush",
  },
  {
    listValue: "aquaBlast",
    listName: "Aqua Blast",
  },
  {
    listValue: "sparklingBreeze",
    listName: "Sparkling Breeze",
  },
];

const rewardLabel: any = {
  combo: "New Price",
  perOff: "Percent Off",
  amountCombo: "Amount Off",
};

const AddMix: React.FC<IAdd> = ({ setOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [selected, setSelected] = useState<string>("");
  const [neverToggleValue, setNeverToggleValue] = useState<boolean>(false);
  const [advanceToggleValue, setAdvanceToggleValue] = useState<boolean>(false);

  const resolver = yupResolver(Schema);

  const weeklyDataDemo = [
    { day: "Sunday", start: "22:00", end: "23:00", check: false },
    { day: "Monday", start: "22:00", end: "23:00", check: false },
    { day: "Tuesday", start: "22:00", end: "23:00", check: false },
    { day: "Wednesday", start: "22:00", end: "23:00", check: false },
    { day: "Thursday", start: "22:00", end: "23:00", check: false },
    { day: "Friday", start: "22:00", end: "23:00", check: false },
    { day: "Saturday", start: "22:00", end: "23:00", check: false },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch,
    control,
    setValue,
    trigger,
  } = useForm<IFormInput>({
    resolver,
    defaultValues: {
      weeklyAvailability: weeklyDataDemo,
    },
  });

  const handleToggleNever = () => {
    setNeverToggleValue((prev) => !prev);
  };

  const handleToggleAdvance = () => {
    setAdvanceToggleValue((prev) => !prev);
  };

  useEffect(() => {
    if (neverToggleValue) {
      setValue("promoModeNever", "neverEnd");
    } else {
      setValue("promoModeNever", "");
    }
  }, [neverToggleValue, setValue]);

  useEffect(() => {
    if (advanceToggleValue) {
      setValue("promoModeAdvance", "advanceMode");
    } else {
      setValue("promoModeAdvance", "");
    }
  }, [advanceToggleValue, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "priceBreak",
  });

  const { fields: weeklyFields } = useFieldArray({
    control,
    name: "weeklyAvailability",
  });

  const handleButtonClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    const newObj = {
      uoq: 1,
      reward: "",
      price: 1,
    };
    append(newObj);
    // trigger("priceBreak");
  };

  // =========  WATCH VALUE =========
  const listData = watch("priceBreak");
  // const Data = watch("priceBreak");
  // const selectedPromoMode = watch("promoModeNever");
  const startTime = watch("startPromoTime");
  const startDate = watch("startPromoDate");
  const endDate = watch("endPromoDate");
  const endTime = watch("endPromoTime");
  // console.log(listData);
  // console.log(errors);

  const [promoValid, setPromoValid] = useState<boolean>(false);

  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map((num) => parseInt(num, 10));
    return hours * 60 + minutes; // Convert time to total minutes since midnight
  };

  useEffect(() => {
    if (!startTime || !endTime || !startDate || !endDate) {
      return;
    }
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const time1InMinutes = convertToMinutes(startTime);
    const time2InMinutes = convertToMinutes(endTime);
    console.log(time1InMinutes, time2InMinutes);

    if (date1.getTime() == date2.getTime() && time1InMinutes < time2InMinutes) {
      setPromoValid(false);
    } else if (date1 < date2) {
      setPromoValid(false);
    } else {
      setPromoValid(true);
    }
  }, [startDate, endDate, startTime, endTime]);

  // ======== FORM SUBMIT FUNCTION =========
  const onSubmit = (data: IFormInput) => {
    console.log(data);

    alert(JSON.stringify(data));
    setIsLoading(true);
    toast.success("Message sent successfully!", {
      position: "bottom-left",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    reset();
    refetch();
    setOpen(false);
    setIsLoading(true);
    // fetch(
    //     `url`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   )
    //     .then((res) => {
    //       console.log("res", res);
    //       return res.json();
    //     })
    //     .then((data) => {
    //        console.log("data", data);
    //       if (data.success === true) {
    //         toast.success("Message sent successfully!", {
    //           position: "bottom-left",
    //           autoClose: 3001,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });

    //         reset();
    //         refetch();
    //         setOpen(false);
    //       } else {
    //         toast.error("Message not sent. Please try again!", {
    //           position: "bottom-left",
    //           autoClose: 3001,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //       }
    //     })
    // .finally(() => setIsLoading(false));
  };

  // ========= SELECT WEEK DAY =========
  const handleCheckChange = (index: number, checked: boolean) => {
    setValue(`weeklyAvailability.${index}.check`, checked);
    trigger();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-2">
            <SelectField
              control={control}
              name="name"
              data={store}
              label="List to Apply Promotion to"
              placeholderText="List to Apply Promotion to"
              errorMessage={errors?.name?.message}
              labelKey="listName"
              valueKey="listValue"
              resetField={resetField}
              resetFieldName1=""
              resetFieldName2=""
              disabledValue="1"
              isLoading={false}
            />
            <div className="flex flex-col items-end gap-2">
              <Toggle
                label="Never Ends ?"
                value={neverToggleValue}
                setValue={handleToggleNever}
              />
              <Toggle
                label="Advanced Mode?"
                value={advanceToggleValue}
                setValue={handleToggleAdvance}
              />
            </div>
          </div>

          {/* ======= IF PROMOTION HAS LIMITED TIME  ============ */}
          {/* ========== HAVE TO PROVIDE FROM DATE AND END DATE ========= */}
          {neverToggleValue && (
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h1>Start of Promotion</h1>
                  <div className=" grid grid-cols-2 gap-2">
                    <DateInput
                      name="startPromoDate"
                      placeholderText="From"
                      errors={errors}
                      control={control}
                      setValue={setValue}
                    />
                    <TimeInput
                      name="startPromoTime"
                      errors={errors}
                      control={control}
                      defaultTime="22:00"
                    />
                  </div>
                </div>
                <div>
                  <h1>End of Promotion</h1>
                  <div className=" grid grid-cols-2 gap-2">
                    <DateInput
                      name="endPromoDate"
                      placeholderText="To"
                      errors={errors}
                      control={control}
                      setValue={setValue}
                    />
                    <TimeInput
                      name="endPromoTime"
                      errors={errors}
                      control={control}
                      defaultTime="23:00"
                    />
                  </div>
                </div>
              </div>
              {promoValid && (
                <p className="text-red-500 text-sm mt-1">
                  Start Date and Time must be smaller then End Time and Date
                </p>
              )}
            </div>
          )}

          {/* ========= SELECT AVAILABLE STORE AND WEEK DAYS FOR PROMOTION ========== */}
          {advanceToggleValue && (
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2">
                <SelectField
                  control={control}
                  name="store"
                  data={store}
                  label="Store"
                  placeholderText="List to Apply Promotion to"
                  errors={errors}
                  labelKey="listName"
                  valueKey="listValue"
                  resetField={resetField}
                  resetFieldName1=""
                  resetFieldName2=""
                  disabledValue="1"
                  isLoading={false}
                />
              </div>
              <div>
                <p className="font-semibold">Weekday Availability</p>
                <div>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div></div>
                    <div>Day</div>
                    <div className="text-center">Start</div>
                    <div className="text-center">End</div>
                  </div>
                  {weeklyFields?.map((d, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 mb-4">
                      <div className="flex justify-center">
                        <Controller
                          name={`weeklyAvailability.${index}.check`}
                          control={control}
                          render={({ field }) => (
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={(e) => {
                                handleCheckChange(index, e.target.checked);
                              }}
                              className="cursor-pointer h-5 w-5 mt-6"
                            />
                          )}
                        />
                      </div>
                      <div className="mt-2 p-3">{d.day}</div>
                      <TimeInput
                        name={`weeklyAvailability.${index}.start`}
                        errors={errors}
                        control={control}
                        defaultTime={d.start}
                      />
                      <TimeInput
                        name={`weeklyAvailability.${index}.end`}
                        errors={errors}
                        control={control}
                        defaultTime={d.end}
                      />
                    </div>
                  ))}
                </div>
                {errors?.["weeklyAvailability"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["weeklyAvailability"].root?.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ============ PRICE BREAKS ================== */}
          <div>
            <div className="text-textPrimary font-semibold pb-4 flex gap-4 items-center">
              Price Breaks{" "}
              <div onClick={handleButtonClick}>
                <IoMdAddCircle size={22} />
              </div>
            </div>
            {listData?.length > 0 && (
              <div>
                {fields?.map((data: any, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[22%,48%,30%]  p-2 gap-4"
                  >
                    <div className="flex flex-col gap-3">
                      <div>Units to Qualify</div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setValue(
                              `priceBreak.${index}.uoq`,
                              listData[index]?.uoq + 1
                            );
                          }}
                          className="bg-[#EFF0EF] w-10 h-10 rounded-md"
                        >
                          +
                        </button>
                        <p className="bg-[#EFF0EF] w-14 h-10 rounded-md flex justify-center items-center">
                          {listData?.[index]?.uoq}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setValue(
                              `priceBreak.${index}.uoq`,
                              listData[index]?.uoq - 1
                            );
                          }}
                          className="bg-[#EFF0EF] w-10 h-10 rounded-md"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div>
                      <SelectField
                        control={control}
                        name={`priceBreak.${index}.reward`}
                        data={rewardTypes}
                        label="Type of Reward"
                        placeholderText="Type of Reward"
                        errorMessage={
                          errors?.priceBreak?.[index]?.reward?.message
                        }
                        labelKey="listName"
                        valueKey="listValue"
                        resetField={resetField}
                        resetFieldName1=""
                        resetFieldName2=""
                        disabledValue="1"
                        isLoading={false}
                      />
                    </div>
                    <div className="flex">
                      <Input
                        labelName={
                          rewardLabel[listData[index].reward] || "New Price"
                        }
                        inputType="number"
                        placeholderText="Name"
                        name={`priceBreak.${index}.price`}
                        errorsMsg={errors?.priceBreak?.[index]?.price?.message}
                        register={register}
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          remove(index);
                        }}
                        className="flex px-3 pt-10"
                      >
                        <IoRemoveCircle size={28} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {errors["priceBreak"] && (
              <p className="text-red-500 text-sm mt-1">
                {errors["priceBreak"].message}
              </p>
            )}
          </div>
          <SubmitButton submitTitle="Save Change" />
        </div>
      </form>
    </div>
  );
};

export default AddMix;

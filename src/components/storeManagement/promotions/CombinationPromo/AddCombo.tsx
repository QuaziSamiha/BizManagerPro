"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import { IoMdAddCircle } from "react-icons/io";
import { IoRemoveCircle } from "react-icons/io5";

import Toggle from "@/components/ui/form/Toggle";
import DateInput from "@/components/ui/form/DateInput";
import TimeInput from "@/components/ui/form/TimeInput";
import Schema from "./Schema";

interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
}

interface IPriceBreak {
  promo: string;
  unit: number;
  reward?: string;
  price?: number;
  weight?: number;
}

interface IWeeklyAvailability {
  day: string;
  start: string;
  end: string;
  check: boolean;
}

interface IFormInput {
  name: string;
  onePrice?: string;
  autoWeight?: string;
  store: string;
  priceBreak: IPriceBreak[];
  totalPrice?: string;
  startPromoDate: string;
  endPromoDate: string;
  startPromoTime: string;
  endPromoTime: string;
  priority: string;
  weeklyAvailability: IWeeklyAvailability[];
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

const priority: IList[] = [
  {
    listValue: "high",
    listName: "High",
  },
  {
    listValue: "highest",
    listName: "Highest",
  },
  {
    listValue: "low",
    listName: "Low",
  },
  {
    listValue: "lowest",
    listName: "Lowest",
  },
  {
    listValue: "medium",
    listName: "Medium",
  },
];
const AddCombo: React.FC<IAdd> = ({ setOpen, refetch }) => {

  const [isLoading, setIsLoading] = useState<boolean>();
  // const [selected, setSelected] = useState<string>("");
  const [onePriceToggle, setOnePriceToggle] = useState<boolean>(false);
  const [weightToggleValue, setWeightToggleValue] = useState<boolean>(false);

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

  // ====== INITIALIZED REACT HOOK FORM =========== 
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

  // ======== HANDLE ONE PRICE ======== 
  const handleToggleOnePrice = () => {
    setOnePriceToggle((prev) => !prev);
  };

  // ======= HANDLE ADVANCE OPTION =======
  const handleToggleAdvance = () => {
    setWeightToggleValue((prev) => !prev);
  };

  useEffect(() => {
    if (onePriceToggle) {
      setValue("onePrice", "onePrice");
    } else {
      setValue("onePrice", "");
    }
  }, [onePriceToggle, setValue]);

  useEffect(() => {
    if (weightToggleValue) {
      setValue("autoWeight", "autoWeight");
    } else {
      setValue("autoWeight", "");
    }
  }, [weightToggleValue, setValue]);

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
      promo: "",
      unit: 1,
      reward: "",
      price: 1,
      weight: 1,
    };
    append(newObj);
  };
  // console.log(watch("priceBreak"));

  // ======= PRICE BREAK OPTIONS =========
  const rewardLabel: any = {
    combo: "New Price",
    perOff: "Percent Off",
    amountCombo: "Amount Off",
  };

  // ======= WATCHING INPUT VALUES ========
  const listData = watch("priceBreak");
  const startTime = watch("startPromoTime");
  const startDate = watch("startPromoDate");
  const endDate = watch("endPromoDate");
  const endTime = watch("endPromoTime");
  // const autoWeight = watch("autoWeight");
  // console.log("hello", autoWeight);

  const [promoValid, setPromoValid] = useState<boolean>(false);

  // ==========  TIME CALCULATION ===========
  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map((num) => parseInt(num, 10));
    return hours * 60 + minutes;
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

  // ======== FORM SUBMIT FUNCTION ==========
  const onSubmit = (data: IFormInput) => {
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

  // console.log(errors);

  // ======== CHECK WEEK DAY =========
  const handleCheckChange = (index: number, checked: boolean) => {
    setValue(`weeklyAvailability.${index}.check`, checked);
    trigger();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-2">
            <Input
              labelName="Promotion Name"
              inputType="text"
              placeholderText="Name"
              name="name"
              errors={errors}
              register={register}
              isRequired
            />
            <SelectField
              control={control}
              name="priority"
              data={priority}
              label="Combo Priority"
              placeholderText="Select priority"
              errorMessage={errors?.priority?.message}
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
                label="One Price ?"
                value={onePriceToggle}
                setValue={handleToggleOnePrice}
              />
              <Toggle
                label="Auto Weight?"
                value={weightToggleValue}
                setValue={handleToggleAdvance}
              />
            </div>
          </div>
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
              <Input
                labelName="Total Price for Combo"
                inputType="text"
                placeholderText="$ 0.0"
                name="totalPrice"
                errors={errors}
                register={register}
                isRequired={onePriceToggle}
                disabled={!onePriceToggle}
              />
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
              <SelectField
                control={control}
                name="store"
                data={store}
                label="Store"
                placeholderText="All Stores"
                errorMessage={errors?.store?.message}
                labelKey="listName"
                valueKey="listValue"
                resetField={resetField}
                resetFieldName1=""
                resetFieldName2=""
                disabledValue="1"
                isLoading={false}
              />
            </div>
            {promoValid && (
              <p className="text-red-500 text-sm mt-1">
                Start Date and Time must be smaller then End Time and Date
              </p>
            )}
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
                    className="grid grid-cols-[30%,10%,30%,30%]  p-2 gap-2"
                  >
                    <SelectField
                      control={control}
                      name={`priceBreak.${index}.promo`}
                      data={rewardTypes}
                      label="List to Apply Promotion"
                      placeholderText="List to Apply Promotion"
                      errorMessage={errors?.priceBreak?.[index]?.promo?.message}
                      labelKey="listName"
                      valueKey="listValue"
                      resetField={resetField}
                      resetFieldName1=""
                      resetFieldName2=""
                      disabledValue="1"
                      isLoading={false}
                    />
                    <Input
                      labelName="Units"
                      inputType="number"
                      placeholderText="Name"
                      name={`priceBreak.${index}.unit`}
                      errorsMsg={errors?.priceBreak?.[index]?.unit?.message}
                      register={register}
                    />
                    {!weightToggleValue && (
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
                    )}
                    <div className="flex">
                      {!weightToggleValue && (
                        <Input
                          labelName={
                            rewardLabel[listData[index].reward ?? ""] || "Price"
                          }
                          inputType="number"
                          placeholderText="Name"
                          name={`priceBreak.${index}.price`}
                          errorsMsg={
                            errors?.priceBreak?.[index]?.price?.message
                          }
                          register={register}
                        />
                      )}

                      {weightToggleValue && (
                        <Input
                          labelName="Reporting Weight"
                          inputType="number"
                          placeholderText="Name"
                          name={`priceBreak.${index}.weight`}
                          errorsMsg={
                            errors?.priceBreak?.[index]?.weight?.message
                          }
                          register={register}
                        />
                      )}
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
            {errors?.["priceBreak"] && (
              <p className="text-red-500 text-sm mt-1">
                {errors["priceBreak"].message}
              </p>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="Save Products"
              className="w-full bg-greenPrimary rounded-md text-white font-medium text-base py-2 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCombo;

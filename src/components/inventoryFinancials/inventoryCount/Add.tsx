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

interface IFormInput {
  receivedNumber: number;
  vendorName: string;
  invoiceNumber: number;
  checkNumber: number;
  receivedDate: string;
  receivedTime: string;
  uom: number;
  quantity: number;
  price: number;
  totalPrice: number;
  department: string;
  product: string;
}

interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
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

const Add: React.FC<IAdd> = ({ setOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [selected, setSelected] = useState<string>("");
  const resolver = yupResolver(Schema);
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
    resolver
  });

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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-2">

          </div>
            <div>
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
              <div className="grid grid-cols-2">
                <SelectField
                  control={control}
                  name="store"
                  data={store}
                  label="Store"
                  placeholderText="List to Apply Promotion to"
                  // errorMessage={errors?.store?.message}
                  labelKey="listName"
                  valueKey="listValue"
                  resetField={resetField}
                  resetFieldName1=""
                  resetFieldName2=""
                  disabledValue="1"
                  isLoading={false}
                />
                <SelectField
                  control={control}
                  name="store"
                  data={store}
                  label="Store"
                  placeholderText="List to Apply Promotion to"
                  // errorMessage={errors?.store?.message}
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

export default Add;

"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Schema from "./Schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import Input from "@/components/ui/form/Input";
import DateInput from "@/components/ui/form/DateInput";
import SubmitButton from "@/components/ui/form/SubmitButton";
import ActiveButton from "@/components/ui/form/ActiveButton";

// ========= DEFINE INTERFACE FOR FORM INPUTS ========
interface IFormInput {
  name: string;
  description: string;
  amount: number;
  fromDate: Date;
  // toDate: Date;
  isTaxActive: boolean;
}

// ======= DEFINE INTERFACE FOR COMPONENT PROPS =========
interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
}

const Add: React.FC<IAdd> = ({ setOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [status, setStatus] = useState<boolean>(true);

  // ======== RESOLVER FOR YUP SCHEMA VALIDATION =========
  const resolver = yupResolver(Schema);

  // ======= INITIALIZE REACT HOOK FORM ========
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<IFormInput>({ resolver });

  // ======== FUNCTION TO HANDLE FORM SUBMISSION ========
  const onSubmit = (data: IFormInput) => {
    // console.log(data);
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
        <div className="flex flex-col gap-4 overflow-y-auto scroll-smooth scrollbar">
          <Input
            labelName="Name"
            inputType="text"
            placeholderText="Name"
            name="name"
            errors={errors}
            register={register}
            isRequired={true}
          />

          <Input
            labelName="Description"
            inputType="text"
            placeholderText="Description"
            name="description"
            errors={errors}
            register={register}
            isRequired={true}
          />
          <div className="flex items-center gap-11">
            <Input
              labelName="Amount"
              inputType="number"
              placeholderText="% Amount"
              name="amount"
              errors={errors}
              register={register}
              isRequired={true}
            />

            <DateInput
              name="fromDate"
              labelName="Activation Date"
              placeholderText="From"
              errors={errors}
              control={control}
              setValue={setValue}
              isRequired={true}
            />
            {/* <div className="mt-5 w-full">
              <DateInput
                name="toDate"
                placeholderText="To"
                errors={errors}
                control={control}
                setValue={setValue}
              />
            </div> */}
            <ActiveButton
              register={register}
              setValue={setValue}
              name="isTaxActive"
              initialStatus={status}
              onStatusChange={(newStatus) => setStatus(newStatus)}
            />
          </div>
          <SubmitButton submitTitle="Save" />
        </div>
      </form>
    </div>
  );
};

export default Add;

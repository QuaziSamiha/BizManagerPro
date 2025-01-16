"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import Input from "@/components/ui/form/Input";
// import SelectField from "@/components/ui/form/SelectField";
import Schema from "./Schema";
import ActiveButton from "@/components/ui/form/ActiveButton";

interface IFormInput {
  departmentName: string;
  departmentCode: string;
  age: number;
  isDepartmentActive?: boolean;
}

interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
}

// interface IDepartment {
//   departmentValue: string;
//   departmentName: string;
// }

// const departments: IDepartment[] = [
//   {
//     departmentValue: "dept_001",
//     departmentName: "Drinks",
//   },
//   {
//     departmentValue: "dept_002",
//     departmentName: "Beverages",
//   },
//   {
//     departmentValue: "dept_003",
//     departmentName: "Fresh Produce",
//   },
//   {
//     departmentValue: "dept_004",
//     departmentName: "Dairy",
//   },
//   {
//     departmentValue: "dept_005",
//     departmentName: "Bakery",
//   },
//   {
//     departmentValue: "dept_006",
//     departmentName: "Meat & Seafood",
//   },
//   {
//     departmentValue: "dept_007",
//     departmentName: "Frozen Foods",
//   },
//   {
//     departmentValue: "dept_008",
//     departmentName: "Snacks",
//   },
//   {
//     departmentValue: "dept_009",
//     departmentName: "Household Items",
//   },
//   {
//     departmentValue: "dept_010",
//     departmentName: "Personal Care",
//   },
// ];

const Add: React.FC<IAdd> = ({ setOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [status, setStatus] = useState<boolean>(true);

  const resolver = yupResolver(Schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IFormInput>({ resolver });

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    console.log(data);
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
          <Input
            labelName="Department Name"
            inputType="text"
            placeholderText="Department Name"
            name="departmentName"
            errors={errors}
            register={register}
          />

          {/* <SelectField
            control={control}
            name="departmentName"
            data={departments}
            label="Department Name"
            placeholderText="-Select Department-"
            errorMessage={errors?.departmentName?.message}
            labelKey="departmentName"
            valueKey="departmentValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
          /> */}

          <div className="flex justify-between gap-4">
            <Input
              labelName="Department Code"
              inputType="text"
              placeholderText="Department Code"
              name="departmentCode"
              errors={errors}
              register={register}
            />
            <Input
              labelName="Minimum Age"
              inputType="number"
              placeholderText="age"
              name="age"
              defaultValue={0}
              errors={errors}
              register={register}
            />
            <ActiveButton
              register={register}
              setValue={setValue}
              name="isDepartmentActive"
              initialStatus={status}
              onStatusChange={(newStatus) => setStatus(newStatus)}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Save"
              className="w-full bg-greenPrimary rounded-md text-white font-medium text-base py-2 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;

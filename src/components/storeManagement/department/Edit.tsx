"use client";

import { RootState } from "@/redux/Reducer/MainSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Schema from "./Schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/ui/form/Input";
import EditSelectField from "@/components/ui/form/EditSelectField";
import ActiveButton from "@/components/ui/form/ActiveButton";

interface IEditProps {
  setEditModalOpen: Function;
  refetch: any;
}

interface IFormInput {
  // name: string,
  departmentName: string;
  departmentCode: string;
  age: number;
}

// interface IDepartment {
//   departmentValue: string;
//   departmentName: string;
// }

// const departments: IDepartment[] = [
//   {
//     "departmentValue": "dept_001",
//     "departmentName": "Drinks"
//   },
//   {
//     "departmentValue": "dept_002",
//     "departmentName": "Beverages"
//   },
//   {
//     "departmentValue": "dept_003",
//     "departmentName": "Fresh Produce"
//   },
//   {
//     "departmentValue": "dept_004",
//     "departmentName": "Dairy"
//   },
//   {
//     "departmentValue": "dept_005",
//     "departmentName": "Bakery"
//   },
//   {
//     "departmentValue": "dept_006",
//     "departmentName": "Meat & Seafood"
//   },
//   {
//     "departmentValue": "dept_007",
//     "departmentName": "Frozen Foods"
//   },
//   {
//     "departmentValue": "dept_008",
//     "departmentName": "Snacks"
//   },
//   {
//     "departmentValue": "dept_009",
//     "departmentName": "Household Items"
//   },
//   {
//     "departmentValue": "dept_010",
//     "departmentName": "Personal Care"
//   }
// ]

const Edit: FC<IEditProps> = ({ setEditModalOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [status, setStatus] = useState<boolean>(true);

  const editData = useSelector((state: RootState) => state.Initial.val);

  console.log("editData", editData);

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
    setEditModalOpen(false);
    setIsLoading(true);
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
            defaultValue={editData?.name}
          />
          {/* <EditSelectField
            control={control}
            name="departmentName"
            data={departments}
            label="Department Name"
            placeholder="-Select Department-"
            // error="departmentName"
            labelKey="departmentName"
            valueKey="departmentValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
            defaultValue="dept_003"
          /> */}
          <div className="flex justify-between gap-4">
            <Input
              labelName="Department Code"
              inputType="text"
              placeholderText="Department Code"
              name="departmentCode"
              errors={errors}
              register={register}
              defaultValue={editData?.departmentCode}
            />
            <Input
              labelName="Age"
              inputType="number"
              placeholderText="age"
              name="age"
              errors={errors}
              register={register}
              defaultValue={editData?.age}
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

export default Edit;

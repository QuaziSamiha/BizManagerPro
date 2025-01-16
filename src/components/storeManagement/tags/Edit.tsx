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
import SubmitButton from "@/components/ui/form/SubmitButton";

interface IEditProps {
  setEditModalOpen: Function;
  refetch: any;
}

interface IFormInput {
  name: string;
  status: string;
}

const Edit: FC<IEditProps> = ({ setEditModalOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();

  const editData = useSelector((state: RootState) => state.Initial.val);

  console.log("editData", editData);

  const resolver = yupResolver(Schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
            labelName="Name"
            inputType="text"
            placeholderText="Name"
            name="name"
            errors={errors}
            register={register}
            defaultValue={editData.name}
          />
          <Input
            labelName="Status"
            inputType="text"
            placeholderText="Status"
            name="status"
            errors={errors}
            register={register}
            defaultValue={editData.status}
          />
          <SubmitButton submitTitle="Save Products" />
        </div>
      </form>
    </div>
  );
};

export default Edit;

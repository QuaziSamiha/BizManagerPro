"use client";
import ImageInput from "@/components/ui/form/SingleImageInput";
import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import SubmitButton from "@/components/ui/form/SubmitButton";
import TextArea from "@/components/ui/form/TextArea";
import { IAdd } from "@/interfaces/form/modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const priorities = [
  {
    priorityValue: "low",
    priorityLevelName: "Low",
  },
  {
    priorityValue: "medium",
    priorityLevelName: "Medium",
  },
  {
    priorityValue: "high",
    priorityLevelName: "High",
  },
  {
    priorityValue: "critical",
    priorityLevelName: "Critical",
  },
];

const Add: React.FC<IAdd> = ({ setOpen, refetch }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    resetField,
  } = useForm();

  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data));
    console.log(data);
    // setIsLoading(true);
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
    // setIsLoading(true);
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <Input
            labelName="Title"
            placeholderText="Title"
            name="title"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <Input
            labelName="Category"
            placeholderText="Category"
            name="category"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextArea
            labelName="Description"
            name="description"
            placeholderText="Description"
            register={register}
            errors={errors}
            isRequired
          />
          <SelectField
            label="Priority Level"
            placeholderText="Priority Level"
            name="priorityLevel"
            control={control}
            resetField={resetField}
            errors={errors}
            data={priorities}
            valueKey="priorityValue"
            labelKey="priorityLevelName"
            isRequired={true}
          />
        </div>
        <div>
          <ImageInput
            labelName="Attachment"
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>
        <SubmitButton submitTitle="Create" />
      </form>
    </div>
  );
};

export default Add;

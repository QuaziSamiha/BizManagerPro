"use client";
import DateInput from "@/components/ui/form/DateInput";
import SelectField from "@/components/ui/form/SelectField";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { IEdit } from "@/interfaces/form/modal";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const allStatus = [
  {
    statusValue: "open",
    statusLabelName: "Open",
  },
  {
    statusValue: "inProgress",
    statusLabelName: "In Progress",
  },
  {
    statusValue: "resolved",
    statusLabelName: "Resolved",
  },
];

const Edit: React.FC<IEdit> = ({ setOpen, refetch }) => {
  const {
    // register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
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
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 pt-4">
          <div className="bg-blueAltPrimary p-4 rounded-lg">
            <p className="text-2xl font-bold text-blackPrimary">
              Ticket Details
            </p>
          </div>
          <div className="flex justify-between items-start gap-3">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-3 w-full z-[1000]">
                <SelectField
                  label="Status"
                  placeholderText="Status"
                  name="status"
                  control={control}
                  resetField={resetField}
                  errors={errors}
                  data={allStatus}
                  valueKey="statusValue"
                  labelKey="statusLabelName"
                  isRequired={true}
                />
                <DateInput
                  labelName="Resolved On"
                  name="resolvedDate"
                  placeholderText="dd/mm/yyyy"
                  errors={errors}
                  control={control}
                  setValue={setValue}
                  isRequired
                />
              </div>
              <div className="text-blackPrimary flex flex-col gap-3 -z-50">
                <p>
                  Title{" "}
                  <span className="pl-4 font-semibold">
                    : Payment Gateway Error
                  </span>
                </p>
                <p>
                  Category{" "}
                  <span className="pl-4 font-semibold">
                    : Technical Support
                  </span>
                </p>
                <p>
                  Description{" "}
                  <span className="pl-4 font-semibold">
                    : Unable to process payments via card
                  </span>
                </p>
                <p>
                  Priority <span className="pl-4 font-semibold">: High</span>
                </p>
                <p>
                  Assigned to{" "}
                  <span className="pl-4 font-semibold">: Olivia Harris</span>
                </p>
                <p>
                  Created on
                  <span className="pl-4 font-semibold">: 02/01/2025</span>
                </p>
              </div>
            </div>
            <div className="bg-blueAltPrimary rounded-lg w-[40%]">
              <h1 className="bg-blueSecondary text-center rounded-t-lg py-1 font-semibold">
                Attachment
              </h1>
              <div className="w-full px-2.5 py-4">
                <Image
                  src={"/images/sidebar/ticketIssues.png"}
                  alt="hello"
                  width={250}
                  height={300}
                  className="rounded"
                />
              </div>
            </div>
          </div>
          <SubmitButton submitTitle="Save Change" />
        </div>
      </form>
    </>
  );
};

export default Edit;

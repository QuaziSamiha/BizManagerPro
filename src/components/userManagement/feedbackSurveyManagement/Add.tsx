"use client";
import DateInput from "@/components/ui/form/DateInput";
import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import SubmitButton from "@/components/ui/form/SubmitButton";
import TextArea from "@/components/ui/form/TextArea";
import { IAdd } from "@/interfaces/form/modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const clientList = [
  {
    clientValue: "shopno",
    clientName: "Shopno",
  },
  {
    clientValue: "agora",
    clientName: "Agora",
  },
  {
    clientValue: "minaBazar",
    clientName: "Mina Bazar",
  },
  {
    clientValue: "arong",
    clientName: "Arong",
  },
];

const Add: React.FC<IAdd> = ({ setOpen, refetch }) => {
  //   const [isLoading, setIsLoading] = useState<boolean>();

  const {
    register,
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
    <div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-2 gap-6">
          <SelectField
            label="Status"
            placeholderText="Status"
            name="status"
            control={control}
            resetField={resetField}
            errors={errors}
            data={clientList}
            valueKey="clientValue"
            labelKey="clientName"
            isRequired={true}
          />
          <Input
            labelName="Contact Person"
            placeholderText="Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <Input
            labelName="Survey Title"
            placeholderText="Title"
            name="surveyTitle"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <DateInput
            labelName="Survey Date"
            name="surveyDate"
            placeholderText="dd/mm/yyyy"
            errors={errors}
            control={control}
            setValue={setValue}
            isRequired
          />
        </div>
        <div className="w-full">
          <TextArea
            labelName="Feedback"
            name="feedback"
            placeholderText="Feedback"
            register={register}
            errors={errors}
            isRequired
          />
        </div>
        <SubmitButton submitTitle="Create" />
      </form>
    </div>
  );
};

export default Add;

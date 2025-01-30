"use client";
import Input from "@/components/ui/form/Input";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { IAdd } from "@/interfaces/form/modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Add: React.FC<IAdd> = ({ setOpen, refetch }) => {
  //   const [isLoading, setIsLoading] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // setValue,
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
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-2 gap-6">
          <Input
            labelName="Item Name"
            placeholderText="Item Name"
            name="itemName"
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
          <Input
            labelName="Specifications"
            placeholderText="Specifications"
            name="specifications"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <Input
            labelName="Location"
            placeholderText="Location"
            name="location"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <Input
            labelName="Current Stock"
            inputType="number"
            placeholderText="00"
            name="currentStock"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <Input
            labelName="Purchase Price"
            inputType="number"
            placeholderText="$0.00"
            name="purchasePrice"
            register={register}
            errors={errors}
            isRequired={true}
          />
        </div>
        <SubmitButton submitTitle="Add Item" />
      </form>
    </div>
  );
};

export default Add;

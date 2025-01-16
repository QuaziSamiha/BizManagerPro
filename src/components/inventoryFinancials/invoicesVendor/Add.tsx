"use client";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import Input from "@/components/ui/form/Input";
// import SelectField from "@/components/ui/form/SelectField";
// import "react-toastify/dist/ReactToastify.css";

// interface IFormInput {
//   name: string;
//   departmentName: string;
//   departmentCode: string;
//   age: number;
// }

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
  //   const [isLoading, setIsLoading] = useState<boolean>();

  //   const resolver = yupResolver(Schema);
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     reset,
  //     resetField,
  //     watch,
  //     control,
  //   } = useForm<IFormInput>({ resolver });

  //   const onSubmit = (data: IFormInput) => {
  //     alert(JSON.stringify(data));
  //     setIsLoading(true);
  //     toast.success("Message sent successfully!", {
  //       position: "bottom-left",
  //       autoClose: 3001,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     reset();
  //     refetch();
  //     setOpen(false);
  //     setIsLoading(true);
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
  //   };

  return (
    <div>
      <form >
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <div className="flex flex-col gap-6">
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

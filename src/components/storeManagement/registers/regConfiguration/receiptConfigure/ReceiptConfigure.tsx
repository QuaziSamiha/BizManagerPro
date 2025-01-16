"use client";
import Input from "@/components/ui/form/Input";
import React, { useState } from "react";
import { UseFormGetValues, UseFormRegister } from "react-hook-form";
import Contact from "./Contact";
import Footer from "./Footer";
import Wave from "@/components/ui/svg/register/Wave";
import ReceiptInfo from "./ReceiptInfo";

interface ILines {
  line: string;
}

interface IReceiptInfo {
  header: string;
  contact: ILines[];
  footer: ILines[];
}

interface IProps {
  control: any;
  register: UseFormRegister<any>;
  errors?: any;
  getValues: UseFormGetValues<any>;
}

const ReceiptConfigure: React.FC<IProps> = ({
  control,
  register,
  errors,
  getValues,
}) => {
  // =========== RECEIPT DATA ============
  const [data, setData] = useState<IReceiptInfo>({
    header: "$EchoMart",
    contact: [
      { line: "Store #1234" },
      { line: "123 Main Street" },
      { line: "City, State, ZIP" },
      { line: "Phone: (123) 456-7890" },
    ],
    footer: [
      { line: "Thank You" },
      { line: "LAAN TECH USA!" },
      { line: "Customer Service: (123) 456-7890" },
    ],
  });

  // =========== RECEIPT HEADER =============
  const addHeader = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const headerValue = getValues("headerText");
    const contactValue = getValues("contact");

    setData((prev) => ({
      ...prev,
      header: headerValue,
      contact: contactValue,
    }));
  };

  // ============= RECEIPT FOOTER ============
  const addFooter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const footerValue = getValues("footer");
    setData((prev) => ({
      ...prev,
      footer: footerValue,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col  bg-whiteAltPrimary rounded-xl p-8">
      <Input
        labelName="Header Text"
        inputType="text"
        placeholderText="Header Text"
        name="headerText"
        register={register}
        isRequired
        errors={errors}
      />
      <div className="flex gap-10">
        <div className="basis-7/12">
          <div className="px-6 py-8 h-fit">
            <Contact
              register={register}
              control={control}
              getValues={getValues}
              addHeader={addHeader}
            />
          </div>
          <div className="px-6 py-8 h-fit">
            <Footer
              register={register}
              control={control}
              getValues={getValues}
              addFooter={addFooter}
            />
          </div>
        </div>

        <div className="basis-5/12 p-10">
          <div className="h-full flex flex-col justify-between">
            <Wave />
            <div className="h-full">
              <ReceiptInfo data={data} />
            </div>

            <div className="rotate-180">
              <Wave />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptConfigure;

// "use client";
// import React, { useState } from "react";
// import { FormState, SubmitHandler, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import ReceiptInfo from "./ReceiptInfo";

// import { receiptConfigureSchema } from "./receiptConfigureSchema";
// import Wave from "@/components/ui/svg/register/Wave";

// interface Lines {
//   line: string;
// }

// interface ReceiptConfigureFormInfo {
//   header: string;
//   contact: Lines[];
//   footer: Lines[];
// }

// function ReceiptConfigure() {
//   const [data, setData] = useState<ReceiptConfigureFormInfo>({
//     header: "$EchoMart",
//     contact: [
//       { line: "Store #1234" },
//       { line: "123 Main Street" },
//       { line: "City, State, ZIP" },
//       { line: "Phone: (123) 456-7890" },
//     ],
//     footer: [
//       { line: "Thank You" },
//       { line: "LAAN TECH USA!" },
//       { line: "Customer Service: (123) 456-7890" },
//     ],
//   });
//   const {
//     register,
//     handleSubmit,
//     getValues,
//     control,
//     formState: { errors },
//   } = useForm<ReceiptConfigureFormInfo>({
//     resolver: yupResolver(receiptConfigureSchema),
//     defaultValues: {
//       header: "$EchoMart",
//       contact: [
//         { line: "Store #1234" },
//         { line: "123 Main Street" },
//         { line: "City, State, ZIP" },
//         { line: "Phone: (123) 456-7890" },
//       ],
//       footer: [
//         { line: "Thank You" },
//         { line: "LAAN TECH USA!" },
//         { line: "Customer Service: (123) 456-7890" },
//       ],
//     },
//   });

//   const onSubmit: SubmitHandler<ReceiptConfigureFormInfo> = (data) => {
//     const formData = JSON.stringify(data);
//     console.log("Form data submitted:", formData);
//     alert(formData);
//   };

//   const onError = (errors: FormState<ReceiptConfigureFormInfo>["errors"]) => {
//     console.error("Form submission errors:", errors);
//   };

//   const addHeader = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const headerValue = getValues("header");
//     const contactValue = getValues("contact");

//     setData((prev) => ({
//       ...prev,
//       header: headerValue,
//       contact: contactValue,
//     }));
//   };
//   const addFooter = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const footerValue = getValues("footer");
//     setData((prev) => ({
//       ...prev,
//       footer: footerValue,
//     }));
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit, onError)}
//       className="min-h-screen flex flex-col  bg-[#EEEEFC] rounded-xl"
//     >
//       <div className="flex flex-col gap-4 p-3">
//         <label htmlFor="header" className="font-semibold text-black">
//           Header Text
//         </label>
//         <input
//           id="header"
//           type="text"
//           placeholder="Enter Your Company Name"
//           {...register("header")}
//           className="text-sm font-normal leading-6 p-2 outline-[#0D5FB5] border  border-[#E6E6E6] rounded-lg"
//         />
//         <p className="text-red-500 text-sm mt-1">
//           {errors?.["header"]?.message}
//         </p>
//       </div>

//       <div className="flex gap-10">
//         <div className="basis-7/12">
//           <div className="px-6 py-8 h-fit">
//             <Contact
//               register={register}
//               control={control}
//               getValues={getValues}
//               addHeader={addHeader}
//             />
//           </div>
//           <div className="px-6 py-8 h-fit">
//             <Footer
//               register={register}
//               control={control}
//               getValues={getValues}
//               addFooter={addFooter}
//             />
//           </div>
//         </div>

//         <div className="basis-5/12  p-10">
//           {/* <div className="relative top-0 left-0 right-0">
//             <Wave />
//           </div> */}
//           <div className="h-full flex flex-col justify-between">
//             <Wave />
//             <div className="h-full">
//               <ReceiptInfo data={data} />
//             </div>

//             <div className="rotate-180">
//               <Wave />
//             </div>
//           </div>
//           {/* <div className=" relative top-0 left-0 right-0 rotate-180">
//             <Wave />
//           </div> */}
//         </div>
//       </div>
//     </form>
//   );
// }

// export default ReceiptConfigure;

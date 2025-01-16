import { toast } from "react-toastify";
import DateInput from "../../ui/form/DateInput";
import TimeInput from "../../ui/form/TimeInput";
import { useForm } from "react-hook-form";

interface IFormInput {
  fromDate: string;
  toDate: string;
  fromTime: string;
  toTime: string;
}

const ReportingPeriod = () => {
  // ========= USED PROPERTIES OF REACT HOOK FORM =========
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useForm<IFormInput>();

  // ============ WATCHING CURRENT DATE AND TIME =========
  const fromDate = watch("fromDate");
  const fromTime = watch("fromTime");

  // ========== SUBMIT FUNCTION ==============
  const onSubmit = (data: IFormInput) => {
    // ========== SPLITTING DATE INTO DAY, MONTH AND TIME ============
    const formatDateToParts = (dateStr: string) => {
      const date = new Date(dateStr);
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };
    };

    // ============ SPLITTING TIME INTO HOURS AND MINUTES =============
    const formatTimeToParts = (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return { hours, minutes };
    };

    const fromParts = formatDateToParts(data.fromDate);
    const toParts = formatDateToParts(data.toDate);

    // ============ IF YEAR ARE NOT SAME =================
    if (fromParts.year > toParts.year) {
      toast.error(
        "The start date cannot be later than the end date (year mismatch).",
        {
          position: "bottom-left",
        }
      );
      return;
    }

    // ============= IF YEARS ARE SAME NEED TO CHECK MONTH =============
    if (fromParts.year === toParts.year) {
      if (fromParts.month > toParts.month) {
        toast.error(
          "The start date cannot be later than the end date (month mismatch).",
          {
            position: "bottom-left",
          }
        );
        return;
      }

      // ========== IF MONTHS ARE SAME NEED TO CHECK DAY ===========
      if (fromParts.month === toParts.month) {
        if (fromParts.day > toParts.day) {
          toast.error(
            "The start date cannot be later than the end date (day mismatch).",
            {
              position: "bottom-left",
            }
          );
          return;
        }

        // If the dates are the same, check times
        const fromTimeParts = formatTimeToParts(data.fromTime);
        const toTimeParts = formatTimeToParts(data.toTime);

        // ================ IF DAYS ARE SAME NEED TO CHECK TIME ================
        if (fromParts.day === toParts.day) {
          if (fromTimeParts.hours > toTimeParts.hours) {
            toast.error(
              "The start time cannot be later than the end time (hours mismatch).",
              {
                position: "bottom-left",
              }
            );
            return;
          }

          if (
            fromTimeParts.hours === toTimeParts.hours &&
            fromTimeParts.minutes >= toTimeParts.minutes
          ) {
            toast.error(
              "The start time cannot be later than or equal to the end time (minutes mismatch).",
              {
                position: "bottom-left",
              }
            );
            return;
          }
        }
      }
    }

    // =========== FORMATTING DATE INTO DD/MM/YYYY ==============
    const formatDate = (date: string) =>
      new Intl.DateTimeFormat("en-GB").format(new Date(date));

    // =========== FORMATTING TIME BASED ON AM AND PM ==========
    const formatTimeWithAmPm = (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM.
      return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
    };

    // =========== FORMATTING DATA ==========
    const formattedData = {
      ...data,
      fromDate: formatDate(data.fromDate),
      toDate: formatDate(data.toDate),
      fromTime: formatTimeWithAmPm(data.fromTime),
      toTime: formatTimeWithAmPm(data.toTime),
    };

    console.log(formattedData);

    toast.success("Reporting period updated successfully!", {
      position: "bottom-left",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-5 w-full">
            <DateInput
              name="fromDate"
              labelName="From Date"
              placeholderText="Select From Date"
              dateFormat="MM/dd/yyyy"
              errors={errors}
              control={control}
              setValue={setValue}
            />
            {/* =========== THIS FIELD WILL BE DISABLED IF PREVIOUS FIELD IS EMPTY ===============*/}
            <DateInput
              name="toDate"
              labelName="To Date"
              placeholderText="Select To Date"
              errors={errors}
              control={control}
              setValue={setValue}
              disabled={!fromDate}
            />
          </div>
          <div className="flex items-center gap-5 w-full">
            <TimeInput
              labelName="From"
              name="fromTime"
              errors={errors}
              control={control}
            />
            {/* =========== THIS FIELD WILL BE DISABLED IF PREVIOUS FIELD IS EMPTY ===============*/}
            <TimeInput
              labelName="To"
              name="toTime"
              errors={errors}
              control={control}
              disabled={!fromTime}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <input
            type="submit"
            value="Change Reporting Period"
            className="bg-violetAltPrimary hover:bg-violetAltSecondary px-3 py-2 rounded-md font-medium text-white text-base w-fit cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default ReportingPeriod;

// "use client";
// import React from "react";
// import DateInput from "../ui/form/DateInput";
// import { useForm } from "react-hook-form";
// import TimeInput from "../ui/form/TimeInput";
// import { toast } from "react-toastify";

// interface IFormInput {
//   fromDate: string;
//   toDate: string;
//   fromTime: string;
//   toTime: string;
// }

// const ReportingPeriod = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//     control,
//     setValue,
//   } = useForm<IFormInput>();

//   const fromDate = watch("fromDate");
//   const fromTime = watch("fromTime");

//   const onSubmit = (data: IFormInput) => {
//     // console.log(data);
//     const formatDate = (date: string) =>
//       new Intl.DateTimeFormat("en-GB").format(new Date(date));

//     const formattedData = {
//       ...data,
//       fromDate: formatDate(data.fromDate),
//       toDate: formatDate(data.toDate),
//     };

//     console.log(formattedData);

//     toast.success("Reporting period updated successfully!", {
//       position: "bottom-left",
//       autoClose: 3001,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "light",
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-5 w-full">
//             {/* From Date Input */}
//             <DateInput
//               name="fromDate"
//               labelName="From Date"
//               placeholderText="Select From Date"
//               dateFormat="MM/dd/yyyy"
//               errors={errors}
//               control={control}
//               setValue={setValue}
//             />
//             {/* To Date Input - Disabled if fromDate is empty */}
//             <DateInput
//               name="toDate"
//               labelName="To Date"
//               placeholderText="Select To Date"
//               errors={errors}
//               control={control}
//               setValue={setValue}
//               disabled={!fromDate}
//             />
//           </div>
//           <div className="flex items-center gap-5 w-full">
//             {/* From Time Input */}
//             <TimeInput
//               labelName="From"
//               name="fromTime"
//               errors={errors}
//               control={control}
//               // defaultTime="12:00"
//             />
//             {/* To Time Input - Disabled if fromTime is empty */}
//             <TimeInput
//               labelName="To"
//               name="toTime"
//               errors={errors}
//               control={control}
//               // defaultTime="22:00"
//               disabled={!fromTime}
//             />
//           </div>
//         </div>
//         <div className="w-full flex justify-center items-center">
//           <input
//             type="submit"
//             value="Change Reporting Period"
//             className="bg-violetAltPrimary hover:bg-violetAltSecondary px-3 py-2 rounded-md font-medium text-white text-base w-fit cursor-pointer"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ReportingPeriod;

// "use client";
// import DateInput from "@/components/ui/form/DateInput";
// import SelectField from "@/components/ui/form/SelectField";
// import { isBefore, parse } from "date-fns";
// import { useForm } from "react-hook-form";

// interface IDepartment {
//   departmentValue: string;
//   departmentName: string;
// }

// interface IProduct {
//   productValue: string;
//   productName: string;
// }

// const products: IProduct[] = [
//   {
//     productValue: "prod_001",
//     productName: "Coca-Cola 500ml",
//   },
//   {
//     productValue: "prod_002",
//     productName: "Pepsi Can 330ml",
//   },
//   {
//     productValue: "prod_003",
//     productName: "Banana - Organic",
//   },
//   {
//     productValue: "prod_004",
//     productName: "Whole Milk 1L",
//   },
//   {
//     productValue: "prod_005",
//     productName: "Croissant",
//   },
//   {
//     productValue: "prod_006",
//     productName: "Fresh Salmon Fillet",
//   },
//   {
//     productValue: "prod_007",
//     productName: "Frozen Pizza - Pepperoni",
//   },
//   {
//     productValue: "prod_008",
//     productName: "Potato Chips - Salted",
//   },
//   {
//     productValue: "prod_009",
//     productName: "Detergent Powder 1kg",
//   },
//   {
//     productValue: "prod_010",
//     productName: "Shampoo - Herbal Extracts",
//   },
// ];

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

// const FilterInventory = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     setValue,
//     resetField,
//     watch,
//   } = useForm();

//   const fromDate = watch("from");
//   const toDate = watch("to");

//   const validateToDate = (toDateValue: string) => {
//     if (fromDate && toDateValue) {
//       const parsedFromDate = parse(fromDate, "dd MMM, yy", new Date());
//       const parsedToDate = parse(toDateValue, "dd MMM, yy", new Date());

//       // Check if toDate is before fromDate
//       return (
//         !isBefore(parsedToDate, parsedFromDate) ||
//         "To date cannot be earlier than from date"
//       );
//     }
//     return true;
//   };

//   const onSubmit = (data: any) => console.log(data);
//   return (
//     <form className="flex gap-10">
//       <DateInput
//         name="from"
//         control={control}
//         setValue={setValue}
//         errors={errors}
//         placeholderText="Select Start Date"
//         disabled={false}
//       />

//       <DateInput
//         name="to"
//         control={control}
//         setValue={setValue}
//         errors={errors}

//         register={register("to", {
//           validate: validateToDate,
//         })}
//         placeholderText="Select End Date"
//         disabled={!watch("from")}
//       />

//       <SelectField
//         control={control}
//         name="departmentName"
//         data={departments}
//         placeholderText="Select Department"
//         labelKey="departmentName"
//         valueKey="departmentValue"
//         resetField={resetField}
//         resetFieldName1=""
//         resetFieldName2=""
//         disabledValue="1"
//         isLoading={false}
//       />

//       <SelectField
//         control={control}
//         name="productName"
//         data={products}
//         placeholderText="Select Product"
//         labelKey="productName"
//         valueKey="productValue"
//         resetField={resetField}
//         resetFieldName1=""
//         resetFieldName2=""
//         disabledValue="1"
//         isLoading={false}
//       />
//     </form>
//   );
// };

// export default FilterInventory;

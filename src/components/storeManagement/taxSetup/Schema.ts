import * as yup from "yup";

const Schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters long"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long"),

  amount: yup
    .number()
    .required("Amount is required")
    .typeError("Amount must be number")
    .min(0, "Negative not allowed"),
    // .min(0, "Negative amount is not allowed"),

  fromDate: yup
    .date()
    .typeError("From date is required")
    .required("Activation start date is required"),

  // toDate: yup
  //   .date()
  //   .typeError("Date is required")
  //   .required("Activation end date is required")
  //   .min(
  //     yup.ref("fromDate"),
  //     "Activation end date cannot be earlier than the activation start date"
  //   ),

  isTaxActive: yup.boolean().required("Tax status is required"),
});

export default Schema;

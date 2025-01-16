import * as yup from "yup";

export const receiptConfigureSchema = yup.object().shape({
  header: yup.string().required("Company Name is required"),
  contact: yup
    .array()
    .of(
      yup.object().shape({
        line: yup
          .string()
          .required("Line  is required")
          .min(2, "Line Info must be at least 2 characters long"),
      })
    )
    .min(1, "At least one line is required")
    .required("Lines are required"),
    footer: yup
    .array()
    .of(
      yup.object().shape({
        line: yup
          .string()
          .required("Line  is required")
          .min(2, "Line Info must be at least 2 characters long"),
      })
    )
    .min(1, "At least one item is required")
    .required("Lines are required"),
});

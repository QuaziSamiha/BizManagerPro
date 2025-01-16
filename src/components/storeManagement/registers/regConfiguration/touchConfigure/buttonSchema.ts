import * as Yup from "yup";

export const buttonSchema = Yup.object().shape({
  buttonLabel: Yup.string()
    .min(2, "Label must be at least 2 characters")
    .required("Label is required"),
  department: Yup.string().required("Department is required"),
});

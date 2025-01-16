import * as yup from "yup";

const Schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters long"),
  listType: yup.string().required("Type is required"),
  lists: yup
    .array()
    .required("Lists are required")
    .min(1, "There must be at least one item in the list"),
});

export default Schema;

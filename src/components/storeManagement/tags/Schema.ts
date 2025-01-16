import * as yup from "yup";

const Schema = yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters long"),
    status:yup.string().required("Status is required")
});

export default Schema;

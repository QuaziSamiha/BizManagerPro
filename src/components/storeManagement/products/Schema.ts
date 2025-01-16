import * as yup from "yup";

const Schema = yup.object().shape({
  sku: yup
    .string()
    .required("SKU is required"),
    name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters long"),
    weight: yup
    .number()
    .typeError("Weight must be a number")
    .required("Weight is required"),
    department: yup
    .string()
    .required("Department is required"),
  uom: yup.string().required("Unit of measurement is required"),
  lowStock: yup.string().required("Low Stock Alert is required"),
  productType: yup.string().required("Product type is required"),
  pricingMode:yup.string().required("Price Mode is required")
});

export default Schema;

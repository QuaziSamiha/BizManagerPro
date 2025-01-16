import * as yup from "yup";

const Schema = yup.object().shape({
  receivedNumber: yup
    .number()
    .required("Received Number is Required")
    .min(1, "Received Number  must be greater than or equal to 1"),
  vendorName: yup
    .string()
    .required("Name is required")
    .min(5, "Vendor Name must be at least 5 characters long"),
  invoiceNumber: yup
    .number()
    .required("Invoice Number is Required")
    .min(1, "Invoice Number must be greater than or equal to 1"),
  checkNumber: yup
    .number()
    .required("Check Number is Required")
    .min(1, "Check Number must be greater than or equal to 1"),
  receivedDate: yup.string().required("Received Date is Required"),
  receivedTime: yup.string().required("Received Time is Required"),
  uom: yup
    .number()
    .required("Units to Measurement is required")
    .positive("UOM must be a positive number")
    .min(1, "UOM must be greater than or equal to 1"),
  quantity: yup
    .number()
    .required("Quantity is required")
    .positive("Quantity must be a positive number")
    .min(1, "Quantity must be greater than or equal to 1"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .min(1, "Price must be greater than or equal to 1"),
  totalPrice: yup
    .number()
    .required("Total Price is required")
    .positive("Total Price must be a positive number")
    .min(1, "Total Price must be greater than or equal to 1"),
  department: yup.string().required("Department is required"),
  product: yup.string().required("Product is required"),
});

export default Schema;

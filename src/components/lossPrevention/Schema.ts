import * as yup from "yup";
// =================== USED IN FILTER TRANSACTION FORM ==================
const Schema = yup.object().shape({
  registers: yup.string().required("Registers is required"),
  cashiers: yup.string().required("Cashiers is required"),
  eventTypes: yup.string().required("Event types are required"),
  salesEventTypes: yup.string().required("Sales event types are required"),
  includesSKUs: yup.string().required("SKUs are required"),
  includesDepartments: yup.string().required("SKUs are required"),
  includesTags: yup.string().required("Tags are required"),
  tenderCodes: yup.string().required("Tags are required"),
  minimumAmount: yup
    .number()
    .typeError("Amount must be number")
    .required("Minimum amount is required"),
  maximumAmount: yup
    .number()
    .typeError("Amount must be number")
    .required("Maximum amount is required"),
  lastFourCard: yup.string().required("Last four cards are required"),
  manualRingUp: yup.string().required("Manual ring up are required"),
  discountedLine: yup.string().required("Manual ring up are required"),
  voidLine: yup.string().required("Manual ring up are required"),
  flagged: yup.string().required("Manual ring up are required"),
});

export default Schema;

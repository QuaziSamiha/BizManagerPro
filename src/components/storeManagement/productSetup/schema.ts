import * as yup from "yup";

const productSchema = yup.object().shape({
  // Basic Information
  prodName: yup.string().required("Product name is required"),
  departmentId: yup.string().required("Department is required"),
  barcodeId: yup.string().optional(),
  sku: yup.string().optional(),
  isTaxable: yup.boolean().default(false),
  isEBTAllowed: yup.boolean().default(false),

  // Inventory Information
  weight: yup
    .number()
    .typeError("Weight must be number")
    .positive("Weight must be positive")
    .optional(),
  uom: yup.string().optional(),
  lowStockAlertQty: yup
    .number()
    .positive("Low stock alert must be positive")
    .integer("Must be whole number")
    .optional(),

  // Pricing Mode Selection
  pricingMode: yup.string().required("Pricing mode is required"),

  // Direct Unit Mode Validation
  retailPriceDirectUnit: yup.number().when("pricingMode", {
    is: "mode1",
    then: (schema) =>
      schema
        .required("Retail price is required")
        .positive("Price must be positive"),
    otherwise: (schema) => schema.optional(),
  }),

  // Direct Case Calculation Validation
  totalPrice: yup.number().when("pricingMode", {
    is: "mode2",
    then: (schema) =>
      schema
        .required("Case cost is required")
        .positive("Case cost must be positive"),
    otherwise: (schema) => schema.optional(),
  }),
  packQty: yup.number().when("pricingMode", {
    is: "mode2",
    then: (schema) =>
      schema
        .required("Pack quantity is required")
        .positive("Pack quantity must be positive")
        .integer("Must be whole number"),
    otherwise: (schema) => schema.optional(),
  }),
  unitPriceCaseCalculation: yup.number().when("pricingMode", {
    is: "mode2",
    then: (schema) =>
      schema
        .required("Unit price is required")
        .positive("Unit price must be positive"),
    otherwise: (schema) => schema.optional(),
  }),
  profitMarginCaseCalculation: yup.number().when("pricingMode", {
    is: "mode2",
    then: (schema) =>
      schema
        .required("Profit margin is required")
        .min(0, "Profit margin cannot be negative"),
    otherwise: (schema) => schema.optional(),
  }),
  retailPriceCaseCalculation: yup.number().when("pricingMode", {
    is: "mode2",
    then: (schema) =>
      schema
        .required("Retail price is required")
        .positive("Retail price must be positive"),
    otherwise: (schema) => schema.optional(),
  }),

  // Direct Item Calculation Validation
  unitPriceItemCalculation: yup.number().when("pricingMode", {
    is: "mode3",
    then: (schema) =>
      schema
        .required("Unit cost is required")
        .positive("Unit cost must be positive"),
    otherwise: (schema) => schema.optional(),
  }),
  profitMarginItemCalculation: yup.number().when("pricingMode", {
    is: "mode3",
    then: (schema) =>
      schema
        .required("Profit margin is required")
        .min(0, "Profit margin cannot be negative"),
    otherwise: (schema) => schema.optional(),
  }),
  retailPriceItemCalculation: yup.number().when("pricingMode", {
    is: "mode3",
    then: (schema) =>
      schema
        .required("Retail price is required")
        .positive("Retail price must be positive"),
    otherwise: (schema) => schema.optional(),
  }),
});

export default productSchema;

export interface IFormInputs {
  prodName: string;
  departmentId: string; // deptId: number;
  barcodeId?: string;
  sku?: string;
  isTaxable: boolean;
  isEBTAllowed: boolean;
  //   isAgeRestricted?: boolean;
  weight?: number;
  uom?: string; // uomId?: number;
  lowStockAlertQty?: number;
  // ? ======================= PRICING MODE =========================
  pricingMode: string;
  // ? ==== DIRECT UNIT MODE ====
  retailPriceDirectUnit?: number; // ? UNIT RETAIL PRICE FOR DIRECT UNIT MODE
  // ? ==== DIRECT CASE CALCULATION ====
  totalPrice?: number; // ? CASE COST
  packQty?: number; // ? UNIT PER CASE (TOTAL UNIT WITHIN A CASE)
  unitPriceCaseCalculation?: number; // ? UNIT COST
  profitMarginCaseCalculation?: number; // ? PROFIT PERCENTAGE - PROFIT MARGIN
  retailPriceCaseCalculation?: number; // ? UNIT RETAIL PRICE FOR CASE CALCULATION MODE
  // ? ==== DIRECT ITEM CALCULATION ======
  unitPriceItemCalculation?: number; // ? UNIT COST
  profitMarginItemCalculation?: number; // ? PROFIT PERCENTAGE - PROFIT MARGIN
  retailPriceItemCalculation?: number; // ? UNIT RETAIL PRICE FOR CASE CALCULATION MODE
}

import * as yup from "yup";

const AddNewUserSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "Name must be at least 3 characters long"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Name must be at least 2 characters long"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "This is not matching with password")
    .required("Confirm password is required"),
  companyReport: yup
    .array()
    .of(yup.string())
    .min(1, "At least one permission is required")
    .required("Company-wide's report permissions are required"),
  companyStoreManagement: yup
    .array()
    .of(yup.string())
    .min(1, "At least one permission is required")
    .required("Company-wide's store management permissions are required"),
  companyInventoryFinancial: yup
    .array()
    .of(yup.string())
    .min(1, "At least one permission is required")
    .required(
      "Company-wide's inventory and financial permissions are required"
    ),
  companyLossPrevention: yup
    .array()
    .of(yup.string())
    .min(1, "At least one permission is required")
    .required("Company-wide's loss prevention permissions are required"),
  storeReport: yup
    .array()
    .of(yup.string())
    .min(1, "At least one permission is required")
    .required("Store's report permissions are required"),
  storeStoreManagement: yup
    .array()
    .of(yup.string())
    .min(1, "At least one permission is required")
    .required("Store's store management permissions are required"),
  storeInventoryFinancial: yup
    .array()
    .of(yup.string())
    .min(1, "At least one permission is required")
    .required("Store's inventory permissions are required"),
  storeLossPrevention: yup
    .array()
    .of(yup.string())
    .min(1, "At least one permission is required")
    .required("Store's loss prevention permissions are required"),
});

export default AddNewUserSchema;

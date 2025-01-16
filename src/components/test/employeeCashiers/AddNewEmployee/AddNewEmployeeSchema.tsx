import * as yup from "yup";

const AddNewEmployeeSchema = yup.object().shape({
  employeeName: yup
    .string()
    .required("Employee name is required")
    .min(5, "Name must be at least 5 characters long"),
  storeName: yup.string().required("Store name is required"),
  employeeType: yup.string().required("Employee type is required"),
  cashierPermissions: yup
    .array()
    .of(yup.string().nullable())
    .when("employeeType", ([employeeType], schema) =>
      employeeType === "cashier"
        ? schema
            .min(1, "At least one permission is required for cashiers")
            .required("Cashier permissions are required")
        : schema.notRequired()
    ),
});

export default AddNewEmployeeSchema;

import * as yup from "yup";

const Schema = yup.object().shape({
  departmentName: yup.string().required("Department Name is required"),
  departmentCode: yup.string().required("Department Code is required"),
  age: yup.number().typeError("Age must be number").required("Age is required"),
  isDepartmentActive: yup.boolean().optional(),
});

export default Schema;

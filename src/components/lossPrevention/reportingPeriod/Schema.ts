import * as yup from "yup";

const Schema = yup.object().shape({
  fromDate: yup.string().required("Start date is required"),
  toDate: yup.string().required("End date is required"),
  fromTime: yup.string().required("Start is required"),
  toTime: yup.string().required("End time is required"),
});

export default Schema;

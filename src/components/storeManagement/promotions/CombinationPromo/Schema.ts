
import * as yup from "yup";

const Schema = yup.lazy((global)=>
  yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    onePrice: yup.string(),
    autoWeight: yup.string(),
    priority: yup.string().required("Priority Required"),
    totalPrice: yup
      .string()
      .when("onePrice", ([onePrice], schema) =>{
        console.log("onePrice",onePrice);
        return (
          onePrice === "onePrice"
            ? schema.required("Total is required")
            : schema.notRequired()
        )
      }
      ),
    store: yup.string().required("Store is required"),
    startPromoDate: yup.string().required("Date is required"),
    endPromoDate: yup.string().required("Date is required"),
    startPromoTime: yup.string().required("Time is required"),
    endPromoTime: yup.string().required("Time is required"),
    weeklyAvailability: yup
      .array()
      .of(
        yup.object().shape({
          day: yup.string().required("Day is required"),
          start: yup.string().required("Start time is required"),
          end: yup.string().required("End time is required"),
          check: yup.boolean().required("Check is required"),
        })
      )
      .required("Weekly Availability is required")
      .test(
        "at-least-one-checked",
        "At least one item must have the check box selected",
        function (value) {
          const isAtLeastOneChecked = value.some((item) => item.check === true);
          return isAtLeastOneChecked;
        }
      )
      .test(
        "check-time-order",
        "Start time must be before end time",
        function (value) {
          for (let i = 0; i < value.length; i++) {
            const { start, end } = value[i];
            if (start >= end) {
              return false;
            }
          }
          return true;
        }
      ),
    priceBreak: yup
      .array()
      .of(
        yup.object().shape({
          promo: yup.string().required("Promo  is required"),
          unit: yup
            .number()
            .required("Unit is required")
            .positive("Unit must be a positive number")
            .min(1, "Price must be greater than or equal to 1"),
            reward: yup
            .string()
            .when("autoWeight", ([], schema) => {
              if (global.autoWeight === "") {
                return schema
                  .required("Reward is required")
                  .min(3, "Reward must be at least 3 characters long")
              } else {
                return schema.notRequired();
              }
            }),
          price: yup
            .number()
            .when("autoWeight", ([], schema) => {
              if (global.autoWeight === "") {
                return schema.required("Price is required")
                .positive("Price must be a positive number")
                .min(1, "Price must be greater than or equal to 1")
              } else {
                return schema.notRequired();
              }
            }),
            weight: yup
            .number()
            .when("autoWeight", ([], schema) => {
              if (global.autoWeight === "autoWeight") {
                return schema.required("Weight is required")
                .positive("Weight must be a positive number")
                .min(1, "Weight must be greater than or equal to 1")
              } else {
                return schema.notRequired();
              }
            }),
        })
      )
      .required("Lists are required")
      .min(1, "There must be at least one item in the list"),
  })
)

export default Schema;

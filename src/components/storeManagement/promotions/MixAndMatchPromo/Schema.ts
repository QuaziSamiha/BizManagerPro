import * as yup from "yup";

const Schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters long"),

  promoModeNever: yup.string(),
  promoModeAdvance: yup.string(),
  store: yup
    .string()
    .when("promoModeAdvance", ([promoModeAdvance], schema) =>
      promoModeAdvance === "advanceMode"
        ? schema.required("Store is required")
        : schema.notRequired()
    ),
  startPromoDate: yup
    .string()
    .when("promoModeNever", ([promoModeNever], schema) =>
      promoModeNever === "neverEnd"
        ? schema.required("Date is required")
        : schema.notRequired()
    ),
  endPromoDate: yup
    .string()
    .when("promoModeNever", ([promoModeNever], schema) =>
      promoModeNever === "neverEnd"
        ? schema.required("Date is required")
        : schema.notRequired()
    ),
  startPromoTime: yup
    .string()
    .when("promoModeNever", ([promoModeNever], schema) =>
      promoModeNever === "neverEnd"
        ? schema.required("Time is required")
        : schema.notRequired()
    ),
  endPromoTime: yup
    .string()
    .when("promoModeNever", ([promoModeNever], schema) =>
      promoModeNever === "neverEnd"
        ? schema.required("Time is required")
        : schema.notRequired()
    ),
  weeklyAvailability: yup
    .array()
    .of(
      yup.object().shape({
        day: yup
          .string()
          .when("promoModeAdvance", ([promoModeAdvance], schema) =>
            promoModeAdvance === "advanceMode"
              ? schema.required("Day is required")
              : schema.notRequired()
          ),
        start: yup
          .string()
          .when("promoModeAdvance", ([promoModeAdvance], schema) =>
            promoModeAdvance === "advanceMode"
              ? schema.required("Start time is required")
              : schema.notRequired()
          ),
        end: yup
          .string()
          .when("promoModeAdvance", ([promoModeAdvance], schema) =>
            promoModeAdvance === "advanceMode"
              ? schema.required("End Time is required")
              : schema.notRequired()
          ),
        check: yup
          .boolean()
          .when("promoModeAdvance", ([promoModeAdvance], schema) =>
            promoModeAdvance === "advanceMode"
              ? schema.required("Check is required")
              : schema.notRequired()
          ),
      })
    )
    .when("promoModeAdvance", ([promoModeAdvance], schema) =>
      promoModeAdvance === "advanceMode"
        ? schema.required("Weekly Availability is required")
        : schema.notRequired()
    )
    .test(
      "at-least-one-checked",
      "At least one item must have the check box selected",
      function (value) {
        const { promoModeAdvance } = this.parent; 
        if (promoModeAdvance !== "advanceMode") return true;

        if (!value || value.length === 0) return false;

        const isAtLeastOneChecked = value.some(item => item.check === true);
        return isAtLeastOneChecked;
      }
    )
    .test('check-time-order', 'Start time must be before end time', function (value) {
      const { promoModeAdvance } = this.parent;
      if (promoModeAdvance !== "advanceMode") return true;
      if (!value || value.length === 0) return true; 
      for (let i = 0; i < value.length; i++) {
        const { start, end } = value[i];
        if (start === undefined || end === undefined) continue;
        if (start >= end) {
          return false;
        }
        return true;
      }
}),
  priceBreak: yup
    .array()
    .of(
      yup.object().shape({
        uoq: yup
          .number()
          .required("Units to Qualify is required")
          .positive("UOQ must be a positive number")
          .min(1, "Price must be greater than or equal to 1"),
        reward: yup
          .string()
          .required("Reward is required")
          .min(0, "Reward must be at least 3 characters long"),
        price: yup
          .number()
          .required("Price is required")
          .positive("Price must be a positive number")
          .min(1, "Price must be greater than or equal to 1"),
      })
    )
    .required("Lists are required")
    .min(1, "There must be at least one item in the list"),
});

export default Schema;

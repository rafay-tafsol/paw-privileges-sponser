import * as Yup from "yup";

export const OfferFormSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  startDate: Yup.date().required("Start Date is required"),
  endDate: Yup.date()
    .required("End Date is required")
    .min(Yup.ref("startDate"), "End Date cannot be before Start Date"),
  targetAudience: Yup.string().required("Target Audience is required"),
  offerType: Yup.string().required("Offer Type is required"),
  location: Yup.string().when("offerType.value", {
    is: "in-person",
    then: (schema) => schema.required("Location is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  websiteLink: Yup.string().when("offerType.value", {
    is: "online",
    then: (schema) =>
      schema.url("Enter a valid URL").required("Website Link is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  offerLimited: Yup.boolean(),
  discountAmount: Yup.number()
    .typeError("Discount must be a number")
    .positive("Discount must be a positive number")
    .nullable(),
  discountDate: Yup.date().nullable(),
  gallery: Yup.array()
    .of(Yup.mixed())
    .min(1, "At least one image is required")
    .required("Gallery is required"),
});

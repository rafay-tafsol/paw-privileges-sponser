import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  location: Yup.string().required("Location is required"),
  contact: Yup.string()
    .matches(/^03\d{9}$/, "Invalid contact format")
    .required("Contact is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  date: Yup.date().required("Date is required"),
  description: Yup.string().required("Description is required"),
  // logo: Yup.mixed().required("Logo is required"),
  gallery: Yup.array()
    .of(Yup.mixed())
    .min(1, "At least one image is required")
    .required("Gallery is required"),

  socialLinks: Yup.array()
    .of(Yup.string().required("Social link cannot be empty")) // No URL enforcement
    .min(1, "At least one social link is required"),
});

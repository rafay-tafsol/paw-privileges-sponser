import * as Yup from "yup";

export const profileSettingSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  currentPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Current Password is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  reEnterPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Re-enter Password is required"),
});

export default profileSettingSchema;

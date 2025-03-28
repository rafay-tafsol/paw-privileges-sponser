// "use client";

// import BorderWrapper from "@/component/atoms/BorderWrapper";
// import Button from "@/component/atoms/Button";
// import Input from "@/component/atoms/Input/Input";
// import ContentHeader from "@/component/molecules/ContentHeader";
// import { mergeClass } from "@/resources/utils/helper";
// import classes from "./Profile.module.css";
// import { useState } from "react";
// import UploadImageBox from "@/component/molecules/UploadImageBox";

// const ProfileTemplate = () => {
//   const [formData, setFormData] = useState({
//     image: null,
//   });
//   const handleUpdate = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };
//   return (
//     <>
//       <BorderWrapper>
//         <div className={classes.head}>
//           <ContentHeader title={"Profile Setting"} />
//         </div>
//         <UploadImageBox
//           containerClass={classes.uploadImageContainerClass}
//           hideDeleteIcon={true}
//           state={formData?.image}
//           uploadImageBox={classes.uploadImageBox}
//           setter={(file) => {
//             handleUpdate("image", file);
//           }}
//           onDelete={() => {
//             handleUpdate("image", null);
//           }}
//           imgClass={classes.uploadImage}
//           label={"Update Profile"}
//         />
//         <div className={classes.inputField}>
//           <Input label={"Email"} placeholder={"Enter Email"} />
//           <Input
//             label={"Current Password"}
//             type={"password"}
//             placeholder={"Enter Current Password"}
//           />
//           <Input
//             label={"Password"}
//             type={"password"}
//             placeholder={"Enter Password"}
//           />
//           <Input
//             label={"Re-Enter Password"}
//             type={"password"}
//             placeholder={"Re-Enter Password"}
//           />
//           <div className={mergeClass("mt16 ", classes.profileBtns)}>
//             <Button
//               className="fitContent"
//               label={"Cancel"}
//               variant={"outline"}
//             />
//             <Button
//               className="fitContent"
//               variant={"primary"}
//               label={"Update Profile"}
//             />
//           </div>
//         </div>
//       </BorderWrapper>
//     </>
//   );
// };

// export default ProfileTemplate;

"use client";

import BorderWrapper from "@/component/atoms/BorderWrapper";
import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import UploadImage from "@/component/atoms/UploadImage";
import React, { useState } from "react";
import classes from "./Profile.module.css";
import UploadImageBox from "@/component/molecules/UploadImageBox";
import { useFormik } from "formik";
import { profileSettingSchema } from "@/formik/schema/profileSettingSchema";

const ProfileTemplate = () => {
  const [formData, setFormData] = useState({
    image: null,
  });

  const profileSetting = useFormik({
    initialValues: {
      email: "",
      currentPassword: "",
      password: "",
      reEnterPassword: "",
    },
    validationSchema: profileSettingSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  const handleUpdate = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <BorderWrapper>
        {/* <UploadImage title={"Update Profile"} /> */}
        <UploadImageBox
          containerClass={classes.uploadImageContainerClass}
          hideDeleteIcon={true}
          state={formData?.image}
          uploadImageBox={classes.uploadImageBox}
          setter={(file) => {
            handleUpdate("image", file);
          }}
          onDelete={() => {
            handleUpdate("image", null);
          }}
          imgClass={classes.uploadImage}
          label={"Update Profile"}
        />
        <div className={classes.inputField}>
          <Input
            label={"Email"}
            placeholder={"Enter Email"}
            value={profileSetting.values.email}
            setValue={profileSetting.handleChange("email")}
            errorText={
              profileSetting.touched.email && profileSetting.errors.email
            }
          />
          <Input
            label={"Current Password"}
            type={"password"}
            placeholder={"Enter Current Password"}
            value={profileSetting.values.currentPassword}
            setValue={profileSetting.handleChange("currentPassword")}
            errorText={
              profileSetting.touched.currentPassword &&
              profileSetting.errors.currentPassword
            }
          />
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Enter Password"}
            value={profileSetting.values.password}
            setValue={profileSetting.handleChange("password")}
            errorText={
              profileSetting.touched.password && profileSetting.errors.password
            }
          />
          <Input
            label={"Re-Enter Password"}
            type={"password"}
            placeholder={"Re-Enter Password"}
            value={profileSetting.values.reEnterPassword}
            setValue={profileSetting.handleChange("reEnterPassword")}
            errorText={
              profileSetting.touched.reEnterPassword &&
              profileSetting.errors.reEnterPassword
            }
          />
          <div className="flexGap mt16">
            <Button
              className="fitContent"
              label={"Update Profile"}
              onClick={profileSetting.handleSubmit}
            />
            <Button
              className="fitContent"
              label={"Cancel"}
              variant={"outlined"}
            />
          </div>
        </div>
      </BorderWrapper>
    </>
  );
};

export default ProfileTemplate;

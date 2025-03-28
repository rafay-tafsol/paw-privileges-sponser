"use client";

import BorderWrapper from "@/component/atoms/BorderWrapper";
import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import ContentHeader from "@/component/molecules/ContentHeader";
import { mergeClass } from "@/resources/utils/helper";
import classes from "./Profile.module.css";
import { useState } from "react";
import UploadImageBox from "@/component/molecules/UploadImageBox";

const ProfileTemplate = () => {
  const [formData, setFormData] = useState({
    image: null,
  });
  const handleUpdate = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <>
      <BorderWrapper>
        <div className={classes.head}>
          <ContentHeader title={"Profile Setting"} />
        </div>
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
          <Input label={"Email"} placeholder={"Enter Email"} />
          <Input
            label={"Current Password"}
            type={"password"}
            placeholder={"Enter Current Password"}
          />
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Enter Password"}
          />
          <Input
            label={"Re-Enter Password"}
            type={"password"}
            placeholder={"Re-Enter Password"}
          />
          <div className={mergeClass("mt16 ", classes.profileBtns)}>
            <Button
              className="fitContent"
              label={"Cancel"}
              variant={"outline"}
            />
            <Button
              className="fitContent"
              variant={"primary"}
              label={"Update Profile"}
            />
          </div>
        </div>
      </BorderWrapper>
    </>
  );
};

export default ProfileTemplate;

import BorderWrapper from "@/component/atoms/BorderWrapper";
import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import UploadImage from "@/component/atoms/UploadImage";
import React from "react";
import classes from "./Profile.module.css";
import { mergeClass } from "@/resources/utils/helper";
import ContentHeader from "@/component/molecules/ContentHeader";

const ProfileTemplate = () => {
  return (
    <>
      <BorderWrapper>
        <div className={classes.head}>
          <ContentHeader title={"Profile Setting"} />
        </div>
        <UploadImage title={"Update Profile"} />
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

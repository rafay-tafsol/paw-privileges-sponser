"use client";

import BorderWrapper from "@/component/atoms/BorderWrapper";
import Button from "@/component/atoms/Button";
import { Checkbox } from "@/component/atoms/Checkbox";
import { mergeClass } from "@/resources/utils/helper";
import classes from "./ChangeLanguage.module.css";
import ContentHeader from "@/component/molecules/ContentHeader";
import { useState } from "react";

const ChangeLanguage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <BorderWrapper>
        <div className={classes.head}>
          <ContentHeader title={"Change Language"} />
        </div>
        <div className={classes.inputField}>
          <Checkbox label={"English"} value={checked} setValue={setChecked} />
          <Checkbox
            label={"Canadian French"}
            value={checked}
            setValue={setChecked}
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

export default ChangeLanguage;

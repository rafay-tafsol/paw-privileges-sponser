"use client";
import React, { useState } from "react";
import classes from "./CreateSubscription.module.css";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import ContentHeader from "@/component/molecules/ContentHeader";
import Input from "@/component/atoms/Input/Input";
import { mergeClass } from "@/resources/utils/helper";
import Button from "@/component/atoms/Button";
import ToggleComponent from "@/component/atoms/ToggleComponent";

const CreateSubscriptionTemplate = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <BorderWrapper>
      <ContentHeader title={"Subscription Plan"} />
      <div>
        <Input placeholder={"Enter Category name"} label={"Package Name"} />
        <Input placeholder={"Price"} label={"Price"} />
        <Input placeholder={"Description"} label={"About benefits"} />
        <div className={classes?.statusParent}>
          <h4>Status</h4>
        </div>
        <div></div>
        <div>
          <div className={mergeClass("flexGap")}>
            <ToggleComponent checked={isToggled} onChange={setIsToggled} />
            <div className={mergeClass("h5 mb0")}>Active</div>
          </div>
        </div>
        <div className="flexGap mt20">
          <Button label={"Add Plan"} className="fitContent" />
          <Button
            label={"Cancel"}
            variant={"outlined"}
            className="fitContent"
          />
        </div>
      </div>
    </BorderWrapper>
  );
};

export default CreateSubscriptionTemplate;

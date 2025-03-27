"use client";

import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import TextComponent from "@/component/atoms/TextComponent/TextComponent";
import { useState } from "react";

const ForgetPasswordTemplate = () => {
  const [value, setValue] = useState();

  return (
    <>
      <TextComponent
        title={"Forget Password"}
        description={
          "Enter the email address associated with your account, and we’ll email you a link to reset your password."
        }
      />
      <div>
        <div className={"flexColGap"}>
          <Input
            placeholder={"Enter Email"}
            label={"Email"}
            value={value}
            setValue={setValue}
          />
          <Button variant={"primary"} label={"Send"} />
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordTemplate;

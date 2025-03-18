import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import TextComponent from "@/component/atoms/TextComponent/TextComponent";
import React from "react";

const RecoverPasswordTemplate = () => {
  return (
    <>
      <TextComponent
        title={"Reset Password"}
        description={
          "Enter the email address associated with your account, and we’ll email you a link to reset your password."
        }
      />
      <div>
        <div className={"flexColGap"}>
          <Input
            placeholder={"Enter Password"}
            type={"password"}
            label={"Password"}
          />
          <Input
            placeholder={"Confirm Password"}
            type={"password"}
            label={"Confirm Password"}
          />
          <Button variant={"primary"} label={"Recover Password"} />
        </div>
      </div>
    </>
  );
};

export default RecoverPasswordTemplate;

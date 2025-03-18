"use client";

import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import TextComponent from "@/component/atoms/TextComponent/TextComponent";
import { mergeClass } from "@/resources/utils/helper";
import React from "react";
import classes from "./signIn.module.css";
import { useRouter } from "next/navigation";

const SignInTemplate = () => {
  const router = useRouter();

  return (
    <>
      <TextComponent
        title={"Sign In"}
        description={"Welcome To Paw Privileges"}
      />
      <div>
        <div className={"flexColGap"}>
          <Input placeholder={"Email"} label={"Email"} />
          <Input
            placeholder={"password"}
            type={"password"}
            label={"Password"}
          />
          <p
            className={mergeClass(`h4 right`)}
            onClick={() => router.push("/auth/forget-password")}
          >
            Forget Password?
          </p>
          <Button variant={"primary"} label={"Sign In"} />
          <p className={mergeClass(`h4 center`, classes.bottom)}>
            Don’t Have An Account? <span> Sign Up</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInTemplate;

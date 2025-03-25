"use client";

import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import TextComponent from "@/component/atoms/TextComponent/TextComponent";
import { mergeClass } from "@/resources/utils/helper";
import React from "react";
import classes from "./signIn.module.css";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { signInSchema } from "@/formik/schema/signInSchema";

const SignInTemplate = () => {
  const router = useRouter();

  const signInFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <>
      <TextComponent
        title={"Sign In"}
        description={"Welcome To Paw Privileges"}
      />
      <div>
        <div className={mergeClass("flexColGap", classes.signIn)}>
          <Input
            placeholder={"Email"}
            label={"Email"}
            type="email"
            name="email"
            value={signInFormik.values.email}
            setValue={signInFormik.handleChange("email")}
            errorText={signInFormik.touched.email && signInFormik.errors.email}
          />
          <Input
            placeholder={"password"}
            type={"password"}
            label={"Password"}
            name="password"
            value={signInFormik.values.password}
            setValue={signInFormik.handleChange("password")}
            errorText={
              signInFormik.touched.password && signInFormik.errors.password
            }
          />
          <p
            className={mergeClass(`h4 right cursor`, classes.forgot)}
            onClick={() => router.push("/auth/forget-password")}
          >
            Forget Password?
          </p>
          <Button
            variant={"primary"}
            label={"Sign In"}
            onClick={signInFormik.handleSubmit}
          />
          <p className={mergeClass(`h4 center cursor`, classes.bottom)}>
            Don’t Have An Account?{" "}
            <span onClick={() => router.push("/auth/sign-up")}> Sign Up</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInTemplate;

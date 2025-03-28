"use client";
import React, { useState, useEffect } from "react";
import Button from "@/component/atoms/Button";
import TextComponent from "@/component/atoms/TextComponent/TextComponent";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Post } from "@/interceptor/axios-functions";
import RenderToast from "@/component/atoms/RenderToast";
import { mergeClass } from "@/resources/utils/helper";
import classes from "./OTP.module.css";
import CircleOTPInput from "@/component/atoms/CircleOTPInput";

const OTPTemplate = () => {
  const router = useRouter();
  const [otpValues, setOtpValues] = useState(new Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const handleInputChange = (value, index) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(-1);
    setOtpValues(newOtpValues);

    if (value && index < otpValues.length - 1) {
      document?.getElementById(`otp-input-${index + 1}`)?.focus();
    }
    setErrorMessage("");
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = "";
      setOtpValues(newOtpValues);
      if (index > 0) {
        document?.getElementById(`otp-input-${index - 1}`)?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    setLoading("loading");
    if (otpValues.some((value) => value === "")) {
      setLoading("");
      return setErrorMessage("Please fill in all OTP fields.");
    }
    const obj = {
      email: Cookies.get("email"),
      code: otpValues.join(""),
      fromForgotPassword: true,
    };
    Cookies.set("code", obj.code);
    const response = await Post({ route: "auth/verify/otp", data: obj });
    if (response) {
      router.push("/auth/reset-password");
      RenderToast({ type: "success", message: "Success" });
    }
    setLoading("");
    setTimer(60);
    setCanResend(false);
  };

  const handleResendOTP = async () => {
    const obj = {
      email: Cookies.get("email"),
    };
    const response = await Post({ route: "auth/resend/otp", data: obj });
    if (response) {
      setOtpValues(new Array(6).fill(""));
      RenderToast({ type: "info", message: "OTP resent successfully" });
      setTimer(60);
      setCanResend(false);
    }
  };

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      <TextComponent
        title={"OTP Verification"}
        description={
          "Enter the OTP sent to your email address to reset your password."
        }
      />
      <div className={"flexColGap"}>
        <div
          style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}
        >
          {otpValues.map((value, idx) => (
            <CircleOTPInput
              key={idx}
              value={value}
              onChange={(e) => handleInputChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              id={`otp-input-${idx}`}
            />
          ))}
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Button
          disabled={loading === "loading"}
          variant={"primary"}
          onClick={handleSubmit}
          label={loading === "loading" ? "Loading..." : "Submit"}
        />
        <p className={mergeClass("center", classes.resendText)}>
          {`This will expire in  ${timer} `}
          <span className="globalText changeColor"> Resend Passcode</span>
        </p>
      </div>
    </>
  );
};

export default OTPTemplate;

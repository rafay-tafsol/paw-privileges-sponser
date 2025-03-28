"use client";

import React from "react";
import classes from "./AuthContainer.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AuthContainer = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={classes.authParent}>
      <div className={classes.mainChildren}>
        <div className={classes.logo}>
          <Image src={"/images/app-images/svg/logo.svg"} fill alt="logo" />
        </div>
        <div
          className={
            pathname.includes("/sign-up") ||
            pathname.includes("/subscription-plan")
              ? classes.childTwo
              : classes.child
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;

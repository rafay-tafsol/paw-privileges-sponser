import React from "react";
import classes from "./AuthContainer.module.css";
import Image from "next/image";

const AuthContainer = ({ children }) => {
  return (
    <div className={classes.authParent}>
      <div className={classes.mainChildren}>
        <div className={classes.logo}>
          <Image src={"/Images/app-images/svg/logo.svg"} fill alt="logo" />
        </div>
        <div className={classes.child}>{children}</div>
      </div>
    </div>
  );
};

export default AuthContainer;

import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { mergeClass } from "@/resources/utils/helper";
import { FaAngleDown } from "react-icons/fa6";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className="flexBetween">
        <div className={classes.logo}>
          <Image src={"/images/app-images/svg/logo.svg"} alt="logo" fill />
        </div>
        <div className={mergeClass(classes.rightHeader)}>
          <IoMdNotificationsOutline cursor={"pointer"} fontSize={26} />
          <div className={mergeClass("flexGap", classes.profileImage)}>
            <div className={classes.profile}>
              <Image
                src={"/images/app-images/svg/profile.svg"}
                fill
                alt="profile"
              />
            </div>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

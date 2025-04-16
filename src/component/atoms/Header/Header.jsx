"use client";

import { mergeClass } from "@/resources/utils/helper";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import classes from "./Header.module.css";
import { ClickAwayListener } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [loading, setLoading] = useState("");
  const pathname = usePathname()?.toLowerCase() || "";
  const [show, setShow] = useState(false);

  // const handleProfileClick = () => {
  //   setLoading((prev) => (prev === "profile" ? "" : "profile")); // Toggle popover visibility
  // };

  return (
    <div className={classes.Header}>
      <div className="flexBetween">
        <div
          className={mergeClass("cursor", classes.logo)}
          onClick={() => router.push("/")}
        >
          <Image src={"/images/app-images/svg/logo.svg"} alt="logo" fill />
        </div>
        <div className={mergeClass(classes.rightHeader)}>
          <span
            className={pathname === "/notification" ? classes.notifyActive : ""}
            onClick={() => {
              router.push("/notification");
            }}
          >
            <IoMdNotificationsOutline cursor="pointer" fontSize={26} />
          </span>
          <div
            className={mergeClass("flexGap", classes.profileImage)}
            onClick={() => setShow((prev) => !prev)}
          >
            <div className={classes.profile}>
              <Image
                src={"/images/app-images/svg/profile.svg"}
                fill
                alt="profile"
              />
            </div>
            <FaAngleDown />
          </div>

          {/* Popover */}
          {show && (
            <ClickAwayListener onClickAway={() => setShow(false)}>
              <div
                className={mergeClass(classes.dropdown, classes.show)}
                onClick={() => setShow(false)}
              >
                <p onClick={() => router.push("/account-setting")}>
                  Account Setting
                </p>
                <p onClick={() => router.push("/profile")}>Profile Setting</p>
                <p onClick={() => router.push("/change-language")}>
                  Change Language
                </p>
              </div>
            </ClickAwayListener>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

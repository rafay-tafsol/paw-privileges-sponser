"use client";
import React from "react";
import classes from "./SidebarItem.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarItem = ({ item }) => {
  const pathname = usePathname()?.toLowerCase() || "";
  const itemTitle = item?.title.toLowerCase();

  const isActive =
    (pathname === "/" || pathname === "") && itemTitle === "dashboard"
      ? true
      : pathname.includes(itemTitle);

  return (
    <Link href={item?.link} className={classes.linkStyle}>
      <div className={`${classes.sidebarItem} ${isActive && classes.active}`}>
        <div className={classes.iconImage}>
          <Image src={item?.image} fill alt="icon" />
        </div>
        <p>{item?.title}</p>
      </div>
    </Link>
  );
};

export default SidebarItem;

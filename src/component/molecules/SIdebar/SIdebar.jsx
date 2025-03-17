import React from "react";
import classes from "./SIdebar.module.css";
import { mergeClass } from "@/resources/utils/helper";
import Button from "@/component/atoms/Button";
import { IoPowerSharp } from "react-icons/io5";
import SidebarItem from "@/component/atoms/SidebarItem";
import { sidebarData } from "@/developmentContent/developmentData/SidebarData";

const Sidebar = () => {
  return (
    <div className={mergeClass("width height", classes.Sidebar)}>
      <div className={classes.sidebarContent}>
        {sidebarData?.map((item) => {
          return <SidebarItem item={item} key={item?._id} />;
        })}
      </div>
      <div className={classes.btnMain}>
        <Button label={"Logout"} />
      </div>
    </div>
  );
};

export default Sidebar;

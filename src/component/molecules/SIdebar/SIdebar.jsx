"use client";

import Button from "@/component/atoms/Button";
import SidebarItem from "@/component/atoms/SidebarItem";
import { sidebarData } from "@/developmentContent/developmentData/SidebarData";
import { mergeClass } from "@/resources/utils/helper";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import classes from "./SIdebar.module.css";
import { signOutRequest } from "@/store/auth/authSlice";

const Sidebar = () => {
  const router = useRouter();
  // const onLogout = () => {
  //   dispatch(signOutRequest());
  //   Cookies.remove("_xpdx");
  //   Cookies.remove("_xpdx_u");
  //   router.replace("/");
  //   RenderToast("Logged out successfully", "success");
  // };

  return (
    <div className={mergeClass("width height", classes.Sidebar)}>
      <div className={classes.sidebarContent}>
        {sidebarData?.map((item) => {
          return <SidebarItem item={item} key={item?._id} />;
        })}
      </div>
      <div className={classes.btnMain}>
        <Button
          variant={"primary"}
          label={"Logout"}
          onClick={() => router.push("/auth/sign-in")}
        />
      </div>
    </div>
  );
};

export default Sidebar;

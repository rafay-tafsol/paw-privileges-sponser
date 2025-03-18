import React from "react";
import classes from "./ShowStatus.module.css";
import { capitalizeFirstLetter } from "@/resources/utils/helper";

const ShowStatus = ({ status }) => {
  return (
    <div
      className={` ${classes.status} ${
        status === "pending" || status === "Pending"
          ? classes.pendingLight
          : status === "rejected"
          ? classes?.rejectLight
          : classes.activeLight
      }`}
    >
      <span
        className={classes.circle}
        style={{
          backgroundColor:
            status === "pending"
              ? "var(--pending-color)"
              : status === "rejected"
              ? "var(--reject-color)"
              : "var(--approval-color)",
        }}
      ></span>
      {capitalizeFirstLetter(status)}
    </div>
  );
};

export default ShowStatus;

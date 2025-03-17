import React from "react";
import classes from "./SubscriptionRevenue.module.css";
import { capitalizeFirstLetter, mergeClass } from "@/resources/utils/helper";

const SubscriptionRevenue = ({ item, className }) => {
  return (
    <div className={mergeClass(classes.subscription)}>
      <div
        className={`${classes?.type} ${className} ${
          item.type === "premium" && classes?.premium
        }`}
      ></div>
      <p className={`${classes?.subscriptionType}`}>
        {capitalizeFirstLetter(item?.title)}
      </p>
      <h5 className={classes.amount}>{item?.amount}</h5>
    </div>
  );
};

export default SubscriptionRevenue;

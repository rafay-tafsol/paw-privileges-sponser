import React from "react";
import classes from "./OfferRange.module.css";
import ProgressBar from "../ProgressBar";

const OfferRange = ({ item }) => {
  console.log("🚀 ~ OfferRange ~ item:", item);
  return (
    <div className={classes.offerRange}>
      <div className={classes.rangeText}>
        <h5>{item?.count || "20"}</h5>
        <p>{item?.title}</p>
      </div>
      <div className={classes.rangeBar}>
        <ProgressBar progress={item?.percentage} />
        {/* <p>{progress}%</p> */}
      </div>
    </div>
  );
};

export default OfferRange;

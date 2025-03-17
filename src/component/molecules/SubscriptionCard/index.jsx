import React from "react";
import classes from "./SubscriptionCard.module.css";
import { MdOutlineLayers } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const SubscriptionCard = ({ data }) => {
  return (
    <div className={classes.subscriptionCardMain}>
      <div className={classes.cardTop}>
        <div className={classes.topLeft}>
          <span>
            <MdOutlineLayers color={"var(--white-color)"} />
          </span>
          <p>{data?.title}</p>
        </div>
        <div className={classes.topRight}>
          <span>
            <LuPencil color={"var(--main-color)"} />
          </span>
          <span>
            <RiDeleteBin6Line color={"var(--main-color)"} />
          </span>
        </div>
      </div>
      <div className={classes.cardBottom}>
        <h4>{data?.price}</h4>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default SubscriptionCard;

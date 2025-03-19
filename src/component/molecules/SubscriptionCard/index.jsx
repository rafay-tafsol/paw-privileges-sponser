import React from "react";
import classes from "./SubscriptionCard.module.css";
import { MdOutlineLayers } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "@/component/atoms/Button";

const SubscriptionCard = ({ data, isEditDelete, isPrimaryBtn, label }) => {
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
          {isEditDelete && (
            <>
              <span>
                <LuPencil color={"var(--main-color)"} />
              </span>
              <span>
                <RiDeleteBin6Line color={"var(--main-color)"} />
              </span>
            </>
          )}
          {isPrimaryBtn && <Button label={label} variant={"primary"} />}
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

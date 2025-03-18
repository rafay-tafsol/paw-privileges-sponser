import React from "react";
import classes from "./Notification.module.css";

const Notification = ({ item, onHover, setOnHover }) => {
  const handleMouseEnter = () => {
    if (setOnHover) {
      setOnHover(item?._id);
    }
  };

  const handleMouseLeave = () => {
    if (setOnHover) {
      setOnHover(0);
    }
  };

  console.log("onHover", onHover);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.notificationParent}
    >
      <div className={classes.notificationMain}>
        <div className={classes.notification}>
          <h5>{item?.title}</h5>
          <p>{item?.description}</p>
        </div>
      </div>
      <div className={classes.notificationTime}>{item?.createdAt}</div>
    </div>
  );
};

export default Notification;

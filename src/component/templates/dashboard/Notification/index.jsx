"use client";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import Notification from "@/component/atoms/Notification";
import { notificationsData } from "@/developmentContent/developmentData/DummyData";
import React, { useState } from "react";
import classes from "./Notification.module.css";

const NotificationTemplate = () => {
  const [onHover, setOnHover] = useState(0);
  return (
    <BorderWrapper>
      <div className={classes.child}>
        <div className="h2">Notification</div>

        <div className={classes.notificationParent}>
          {notificationsData?.length > 0 &&
            notificationsData?.map((item) => {
              return (
                <div key={item._id}>
                  <Notification
                    setOnHover={setOnHover}
                    onHover={onHover}
                    item={item}
                    key={item.id}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </BorderWrapper>
  );
};

export default NotificationTemplate;

import React, { useState } from "react";
import classes from "./Tabs.module.css";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className={classes.tabs}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${classes.tab} ${
            activeTab === tab?.value ? classes.active : classes.inactive
          }`}
          onClick={() => setActiveTab(tab?.value)}
        >
          {tab?.name}
        </div>
      ))}
    </div>
  );
}

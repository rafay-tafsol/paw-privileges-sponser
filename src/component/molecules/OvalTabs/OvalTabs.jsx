"use client";
import React from "react";
import classes from "./OvalTabs.module.css";
import FilterButton from "@/component/atoms/FilterButton";

const OvalTabs = ({ data, value, setValue }) => {
  return (
    <div className={classes?.tab}>
      {data?.map((item) => {
        return (
          <FilterButton
            setValue={setValue}
            value={value}
            item={item}
            key={item?._id}
          />
        );
      })}
    </div>
  );
};

export default OvalTabs;

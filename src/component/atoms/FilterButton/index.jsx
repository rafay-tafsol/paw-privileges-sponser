import { mergeClass } from "@/resources/utils/helper";
import React from "react";
import classes from "./FilterButton.module.css";

const FilterButton = ({ label, setValue, value, item }) => {
  return (
    <div
      onClick={() => {
        setValue(item?.value);
      }}
      className={mergeClass(
        `fitContent h3, ${classes.mergeButton} ${
          item.value === value && classes.active
        }`
      )}
    >
      {item?.label}
    </div>
  );
};

export default FilterButton;

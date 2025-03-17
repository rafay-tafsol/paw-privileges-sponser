"use client";
import React from "react";
import classes from "./TopHeader.module.css";
import SearchInput from "@/component/atoms/SearchInput";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import DropDown from "../DropDown/DropDown";
import { mergeClass } from "@/resources/utils/helper";
import DateInput from "../DateInput";

const TopHeader = ({
  className,
  showSearch = false,
  showDropdownFilter = false,
  showDateFilter = false,
}) => {
  return (
    <div
      className={mergeClass(
        classes.topHeader,
        className,
        !showSearch && classes.justifyRight
      )}
    >
      {showSearch && (
        <div className={classes.search}>
          <SearchInput />
        </div>
      )}

      {showDateFilter && (
        <div className={classes.dateInputContainer}>
          <DateInput
            placeholder={"Active"}
            setValue={() => {}}
            inputClass={classes.dateInput}
          />
        </div>
      )}
      {showDropdownFilter && (
        <div className={classes.dropdown}>
          <DropDown containerCustom={classes.dropdownCustom} />
        </div>
      )}
    </div>
  );
};

export default TopHeader;

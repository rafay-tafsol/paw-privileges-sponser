import React from "react";
import classes from "./searchInput.module.css";
import { mergeClass } from "@/resources/utils/helper";
import { RiSearch2Line } from "react-icons/ri";

export default function SearchInput({
  setSearch = () => {},
  search,
  placeholder,
  inputClass,
  noBorder,
  leftIconColor,
  leftIconClass,
  label,
  labelClass,
  labelStyle,
  label2,
  label2Class,
  required,
}) {
  return (
    <div className={classes.main}>
      {label && (
        <label
          htmlFor={`input${label}`}
          className={`fs-16 fw-700 ${[classes.labelText, labelClass].join(
            " "
          )}`}
          style={{ ...labelStyle }}
        >
          {label}{" "}
          <span className={mergeClass(label2Class, "label2")}>
            {label2 && label2}
          </span>
          {required && "*"}
        </label>
      )}
      <div className={classes.searchContainer}>
        <div className={classes.leftIconClass}>
          {!leftIconClass && (
            <RiSearch2Line color="var(--main-color)" size={28} />
          )}
        </div>

        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder={placeholder ?? "Search"}
          className={classes.inputClass}
        />
      </div>
    </div>
  );
}

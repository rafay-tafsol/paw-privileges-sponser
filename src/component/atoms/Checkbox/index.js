"use client";

import { mergeClass } from "@/resources/utils/helper";
import classes from "./Checkbox.module.css";
import PropTypes from "prop-types";

export const Checkbox = ({
  value,
  setValue,
  label,
  label2 = "",
  disabled,
  labelStyle,
  checkMarkStyle,
  checkboxDiv,
  title,
}) => {
  const checkValueTypeArray = Array.isArray(value);
  const isChecked = checkValueTypeArray
    ? value?.findIndex((findValue) => findValue == label)
    : value == label
    ? true
    : false;

  const HandleClick = () => {
    let newArray = [];
    if (checkValueTypeArray) {
      newArray = value?.slice();
      if (isChecked !== -1) {
        newArray.splice(isChecked, 1);
      } else {
        newArray.push(label);
      }
    } else {
      newArray = isChecked ? "" : label;
    }
    setValue(newArray);
  };
  return (
    <>
      <style jsx>{`
        .${classes.container} input:disabled ~ .${classes.checkmark} {
          border: ${checkValueTypeArray && isChecked !== -1
              ? 0
              : checkValueTypeArray == false && isChecked == true
              ? 0
              : 2}px
            solid #4d4d4d;
          background-color: ${checkValueTypeArray && isChecked !== -1
            ? "green"
            : checkValueTypeArray == false && isChecked == true
            ? "green"
            : "transparent"};
        }
      `}</style>

      <div className={classes.checkboxContainer}>
        {title && (
          <label
            htmlFor={`input${title}`}
            className={`${[
              classes.titleText,
              disabled && classes.disabled,
            ].join(" ")}`}
            style={{ ...labelStyle }}
          >
            {title}
          </label>
        )}
        <div className={` ${classes.checkboxWithLabel} ${checkboxDiv}`}>
          <div className={`${classes.container}`}>
            <input
              type="checkbox"
              checked={
                checkValueTypeArray && isChecked !== -1
                  ? "checked"
                  : checkValueTypeArray == false &&
                    isChecked == true &&
                    "checked"
              }
              disabled={disabled}
              id={`checkbox${label}`}
            />
            <span
              className={mergeClass(classes.checkmark, checkMarkStyle)}
              onClick={() => disabled !== true && HandleClick()}
              style={{
                borderColor: disabled
                  ? "#dddddd80" // Light border color when disabled
                  : isChecked !== -1
                  ? "var(--field_stroke_color)"
                  : "var(--main-color)",
              }}
            ></span>
          </div>
          {label && (
            <label
              htmlFor={`checkbox${label}`}
              className={` ${
                isChecked !== -1 && disabled == false
                  ? classes.labelChecked
                  : disabled == true
                  ? classes.labelDisabled
                  : classes.label
              }`}
              style={{
                ...labelStyle,
              }}
            >
              <span>{label}</span>
              {label2 && <span className={classes.label2}>{label2}</span>}
            </label>
          )}
        </div>
      </div>
    </>
  );
};

Checkbox.propTypes = {
  value: PropTypes.array,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
};
Checkbox.defaultProps = {
  value: [],
  disabled: false,
  label: null,
};

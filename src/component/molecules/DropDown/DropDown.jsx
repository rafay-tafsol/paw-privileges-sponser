"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import ReactSelect, { components } from "react-select";
import classes from "./DropDown.module.css";
import PropTypes from "prop-types";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import AsyncSelect from "react-select/async";
import Image from "next/image";

// Custom Option Component for react-select
const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;

  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={classes.asyncDiv}
      style={{ display: "flex", alignItems: "center", padding: "8px" }}
    >
      <div className="profile" style={{ marginRight: "2px" }}>
        <Image src={data.image} alt="profile" width={30} height={30} />
      </div>
      <div className={classes.asyncText}>{data.label}</div>
    </div>
  );
};

export const DropDown = ({
  options,
  label,
  labelTwo,
  customStyle,
  disabled,
  value,
  setter,
  noBorder,
  placeholder,
  placeholderColor = "var(--Mine-Shaft-500)",
  isMulti,
  style,
  leftIcon,
  Components,
  labelClassName,
  indicatorColor = "var(--field_stroke_color)",
  optionLabel,
  optionValue,
  singleValueColor = "var(--main-color)",
  customeClassName = "DropdownOptionContainer",
  className,
  isClearable = false,
  containerCustom,

  selectRef,
  isSearchable = false,
  isAsync = false,
  // isClearable = true,

  ...props
}) => {
  const DropdownComponent = isAsync ? AsyncSelect : ReactSelect;

  const DropdownIndicator = (props) => {
    return (
      <>
        <style>
          {`
            .DropdownOptionContainer__indicator{
              padding: 2px;
              border-radius: 8px;
              height:30px;
              width:30px;
              display:flex;
              align-items:center;
              justify-content:center;
            }
          `}
        </style>
        <components.DropdownIndicator {...props}>
          {props?.selectProps?.menuIsOpen ? (
            <IoIosArrowUp size={18} color={indicatorColor} />
          ) : (
            <IoIosArrowDown size={18} color={indicatorColor} />
          )}
        </components.DropdownIndicator>
      </>
    );
  };

  const dropDownStyle = {
    control: (styles, { isFocused, isDisabled, isSelected }) => ({
      ...styles,
      backgroundColor: isDisabled ? "var(--disabled-input-color)" : "#fff",
      padding: "0px 8px 0px 5px",
      color: "var(--white-color)",
      boxShadow: "none",
      fontFamily: "var(--ff-primary-reg)",
      fontSize: "var(--fs-base)",
      letterSpacing: "1.4",
      cursor: "pointer",
      height: "43px",
      display: "flex",
      alignItems: "center",
      border: "none",
      borderColor: "var(--main-color)",
      borderRadius: "8px !important",
      textTransform: "capitialize",
      ...customStyle,

      ":hover": {
        ...styles[":hover"],
        borderColor: "var(--main-color)",
      },
      ":placeholder": {
        ...styles[":placeholder"],
        color: "var(--Mine-Shaft-500)",
      },
      ":active": {
        ...styles[":active"],
        borderColor: "var(--main-color)",
      },
    }),

    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: placeholderColor,
        fontSize: "14px",
        fontFamily: "var(--font-poppins)",
        fontWeight: "400",
        alignItems: "center",
        justifyContent: "center",
      };
    },

    menu: (provided) => ({
      ...provided,
      marginTop: "5px !important",
    }),

    singleValue: (provided, state) => ({
      ...provided,
      color: singleValueColor, // Change color of the selected single value
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "var(--dusty-rose)"
          : "var(--white-color)",
        color: "var(--black-color)",
        padding: "8px 12px",
        fontFamily: "var(--font-poppins)",
        fontSize: "14px",
        textTransform: "capitialize",

        // ":active": {
        //   ...styles[":active"],
        //   color: "#fff",
        // },

        ":hover": {
          ...styles[":hover"],
          color: "var(--white-color)",
          backgroundColor: "var(--dusty-rose)",
          cursor: "pointer",
        },
      };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "var(--main-color)",
        borderRadius: "14px",
        padding: "1px 10px",
        fontFamily: "var(--ff-primary-reg)",
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "#fff",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      fontSize: "var(--fs-base)",
      color: "#fff",
      ":hover": {
        color: "#fff",
      },
    }),
  };
  return (
    <div
      className={`${[classes.Container, className ? className : ""].join(" ")}`}
    >
      <style>{`
        .DropdownOptionContainer__menu {
          margin: 0px;
          border: 0px;
          borderRadius: "8px !important",
          z-index: 1100 !important;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
        }
        .DropdownOptionContainer__single-value {
          color: ${singleValueColor} !important;
        }
      `}</style>
      {label && (
        <label
          htmlFor={`dropdown${label}`}
          className={`${[
            classes.label,
            labelClassName && labelClassName,
            disabled && classes.disabled,
          ].join(" ")}`}
        >
          {label}
          {/* {labelTwo && (
            <span style={{ color: Colors.neutralShadesOfDimGray }}>
              {" " + labelTwo}
            </span>
          )} */}
        </label>
      )}

      <div
        className={`${[
          classes.dropdownContainer,
          containerCustom && containerCustom,
        ].join(" ")}`}
      >
        <DropdownComponent
          inputId={`dropdown${label}`}
          value={value}
          onChange={(e) => {
            setter(e);
          }}
          className={`${[classes.reactSelect].join(" ")}`}
          isMulti={isMulti}
          isDisabled={disabled}
          placeholder={placeholder}
          options={options}
          styles={{ ...dropDownStyle, ...style }}
          isClearable={isClearable}
          isSearchable={isSearchable}
          classNamePrefix={customeClassName}
          components={
            isAsync
              ? { Option: CustomOption }
              : {
                  IndicatorSeparator: () => null,
                  DropdownIndicator: (e) => DropdownIndicator(e),
                  ...Components,
                }
          }
          getOptionLabel={(option) => {
            return optionLabel ? option[optionLabel] : option.label;
          }}
          getOptionValue={(option) =>
            optionValue ? option[optionValue] : option.value
          }
          {...props}
        />
        {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}
      </div>
    </div>
  );
};

export default DropDown;

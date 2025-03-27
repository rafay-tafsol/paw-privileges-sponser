"use client"


import React from "react";
import classes from "./ToggleComponent.module.css";

export default function ToggleComponent({ checked, onChange, disabled = false }) {
  return (
    <label className={`${classes.switch} ${disabled ? classes.disabled : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className={classes.slider}></span>
    </label>
  );
}

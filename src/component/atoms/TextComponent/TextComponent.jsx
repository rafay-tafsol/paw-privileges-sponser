import React from "react";
import classes from "./TextComponent.module.css";

const TextComponent = ({ title, description }) => {
  return (
    <div className={classes.TextComponent}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default TextComponent;

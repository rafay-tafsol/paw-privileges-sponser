import React from "react";
import classes from "./ContentHeader.module.css";
import Button from "@/component/atoms/Button";
import Link from "next/link";
import { mergeClass } from "@/resources/utils/helper";

const ContentHeader = ({ title, buttonText, onClick, route = "" }) => {
  return (
    <div className="width height flexBetween">
      <h1 className={mergeClass("h1", classes.heading)}>{title}</h1>
      {buttonText && (
        <Link href={route}>
          <Button
            className={classes.btn}
            variant={"primary"}
            label={buttonText}
            onClick={onClick}
          />
        </Link>
      )}
    </div>
  );
};

export default ContentHeader;

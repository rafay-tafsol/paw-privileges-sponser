import React from "react";
import classes from "./UploadImage.module.css";
import { CiCircleAlert } from "react-icons/ci";
import Image from "next/image";
import { mergeClass } from "@/resources/utils/helper";
import Button from "@/component/atoms/Button";
import { MdOutlineFileUpload } from "react-icons/md";

const UploadImage = ({ title, text }) => {
  return (
    <div>
      <div className={classes.mainIcon}>
        <h4 className={mergeClass("h3 mb0")}>{title ?? "Upload Icon"}</h4>
        {text && (
          <div className={classes.flexGapCustom}>
            <CiCircleAlert size={18} color="var(--Mine-Shaft-500)" />
            <div className={classes.description}>{text}</div>
          </div>
        )}
      </div>
      <div className={classes.uploadImage}>
        <div className={classes.uploadParent}>
          <div className={classes.upload}>
            <Image
              fill
              src={"/images/app-images/svg/upload.svg"}
              alt="upload"
            />
          </div>
        </div>
        <Button
          className={classes.uploadBtn}
          variant={"outline"}
          label={"Upload"}
          leftIcon={<MdOutlineFileUpload size={18} color="var(--main-color)" />}
        />
      </div>
    </div>
  );
};

export default UploadImage;

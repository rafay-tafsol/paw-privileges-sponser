"use client";
import { useRef } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import classes from "./UploadImageBox.module.css";

import Button from "@/component/atoms/Button";
import { mediaUrl, mergeClass } from "@/resources/utils/helper";
import Image from "next/image";
import { CiCircleAlert } from "react-icons/ci";

const UploadImageBox = ({
  disabled = false,
  state,
  setter,
  label,
  subLabel,
  edit = true,
  onDelete,
  onClose,
  fallBackImage,
  text,
  isCloseable,
  hideDeleteIcon = false,
  imgClass,
  uploadImageBox,
  containerClass = "",
  onEdit = () => {},
}) => {
  const inputRef = useRef(null);

  return (
    <>
      <div className={classes.uploadHead}>
        {label && (
          <label className={`${classes.label} ${subLabel && "m-0"}`}>
            {label}
          </label>
        )}
        {text && (
          <div className={classes.flexGapCustom}>
            <CiCircleAlert size={18} color="var(--Mine-Shaft-500)" />
            <div className={classes.description}>{text}</div>
          </div>
        )}
      </div>
      {/* {subLabel && <label className={classes.subLabel}>{subLabel}</label>} */}

      <div className={`${classes.box} ${containerClass}`}>
        <div className={mergeClass(classes.uploadImageBox, uploadImageBox)}>
          {/* Close Icon */}
          {/* {isCloseable && (
            <span className={classes.closeIcon} onClick={onClose}>
              <MdClose />
            </span>
          )} */}
          {state?.name || typeof state == "string" ? (
            <>
              <div className={classes.imageUploaded}>
                <img
                  src={
                    typeof state == "object"
                      ? URL.createObjectURL(state)
                      : mediaUrl(state)
                  }
                  alt=""
                  className={imgClass ? imgClass : ""}
                />
              </div>
              <div className={classes.editAndDelete}>
                {edit && (
                  <>
                    {/* {hideDeleteIcon && (
                   <div className={classes.icon} onClick={onDelete}>
                     <RiDeleteBinLine />
                   </div>
                 )} */}

                    <Button
                      className={classes.uploadBtn}
                      variant={"outline"}
                      label={"Upload"}
                      leftIcon={
                        <MdOutlineFileUpload
                          size={18}
                          color="var(--main-color)"
                        />
                      }
                      onClick={() => {
                        inputRef.current.click();
                        onEdit();
                      }}
                    />
                    {/* <div
                   className={classes.icon}
                   onClick={() => {
                     inputRef.current.click();
                     onEdit();
                   }}
                 >
                   <MdModeEdit />
                 </div> */}
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => inputRef.current.click()}
                className={classes.uploadBox}
              >
                <div className={classes?.user}>
                  <Image
                    src={"/images/app-images/svg/upload.svg"}
                    fill
                    alt="user"
                  />
                </div>
              </div>
              <div
                onClick={() => inputRef.current.click()}
                className={
                  disabled ? classes.uploadIconDisabled : classes.uploadIcon
                }
              >
                {fallBackImage ? (
                  <div className={classes.imgDiv}>
                    <img src={fallBackImage} alt="fallBackImage" />
                  </div>
                ) : (
                  <div className={classes?.addIcon}>
                    {/* <Image
                    src={"/assets/images/svg/plus.svg"}
                    alt="add icon"
                    fill
                  /> */}
                    <Button
                      className={classes.uploadBtn}
                      variant={"outline"}
                      label={"Upload"}
                      leftIcon={
                        <MdOutlineFileUpload
                          size={18}
                          color="var(--main-color)"
                        />
                      }
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        {/* Input For Image Upload */}
        <input
          disabled={disabled}
          hidden
          type={"file"}
          ref={inputRef}
          onChange={(e) => setter(e.target.files[0])}
        />
      </div>
    </>
  );
};

export default UploadImageBox;

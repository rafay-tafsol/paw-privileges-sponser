"use client";
import RenderToast from "@/component/atoms/RenderToast";
import { Patch } from "@/interceptor/axios-functions";
import { mediaUrl } from "@/resources/utils/helper";
import {
  getMediaType,
  getSupportedImageTypes,
} from "@/resources/utils/mediaUpload";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import classes from "./MultiFileUpload.module.css";
// import LottieLoader from "@/component/atoms/LottieLoader/LottieLoader";
import dynamic from "next/dynamic";
const LottieLoader = dynamic(
  () => import("@/component/atoms/LottieLoader/LottieLoader"),
  { ssr: false }
);

const MultiFileUpload = ({
  label,
  uploadText = "Upload File",
  customTextClass,
  fileSize,
  supportedFiles = "File formats pdf and Word Doc",
  uploadImage,
  files,
  uploadIcon,
  setFiles,
  errorText,
  extraStyles = {},
  acceptedFiles = getSupportedImageTypes("all"),
  removeFileCb,
  maxFileCount = 5,
}) => {
  const [isDeleteApiCalling, setIsDeleteApiCalling] = useState(false);
  let containerStyleObject = {
    ...(errorText && { border: "1px solid red" }),
    ...extraStyles,
  };

  // onDrop
  const onDrop = (_acceptedFiles) => {
    // validate
    if (_acceptedFiles.length > maxFileCount) {
      return RenderToast({
        message: `You can upload maximum ${maxFileCount} file${
          maxFileCount > 1 ? "s" : ""
        } at a time`,
        type: "error",
      });
    }

    setFiles([...files, ..._acceptedFiles]);
  };

  // removeFile
  const removeFile = async (key) => {
    setIsDeleteApiCalling(true);
    const response = await Patch({
      route: "media/delete",
      data: { key },
    });
    if (response) {
      removeFileCb(key);
    }
    setIsDeleteApiCalling(false);
  };

  const renderFileComponent = (file) => {
    const isFileObject = typeof file === "object";
    const fileType = getMediaType(
      isFileObject ? file?.type : file?.split(".").pop()
    );

    if (["images", "photo"].includes(fileType)) {
      return (
        <div className={classes?.imageContainer}>
          <img
            src={isFileObject ? URL.createObjectURL(file) : mediaUrl(file)}
            alt={file.name || "Image"}
          />
        </div>
      );
    }
    // else if (fileType === "video") {
    //   return (
    //     <ReactPlayer url={URL.createObjectURL(file)} playing={false} controls />
    //   );
    // }
    else if (fileType === "docs") {
      return (
        <div className={classes.filePreview}>
          <span className={classes.previewIcon}>
            <FaFileContract
              title="View File"
              size={35}
              color="var(--secondary-text)"
              onClick={() =>
                window.open(
                  isFileObject ? URL.createObjectURL(file) : mediaUrl(file),
                  "_blank"
                )
              }
            />
          </span>
        </div>
      );
    } else {
      return (
        <div className={classes.filePreview}>
          <p className={classes?.previewIcon}>{file.name}</p>
        </div>
      );
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: acceptedFiles,
    multiple: true,
    maxFiles: 5,
    onDropRejected: (files) => {
      if (files?.length > maxFileCount) {
        return RenderToast({
          message: `You can upload maximum ${maxFileCount} file${
            maxFileCount > 1 ? "s" : ""
          } at a time`,
          type: "error",
        });
      }
    },
  });

  return (
    <>
      {label && <p className={`fs-13 mt-3 ${classes.labelStyle}`}>{label}</p>}
      <div
        className={classes.fileInputDiv}
        // style={{
        //   ...(containerStyleObject && { ...containerStyleObject }),
        // }}
      >
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div className={classes.fileDesc}>
            {uploadIcon ? (
              uploadIcon
            ) : (
              <div className={classes.imageDiv}>
                <Image
                  src={uploadImage}
                  alt="Upload"
                  fill
                  className={classes.image}
                />
              </div>
            )}
            <p className={`${customTextClass} ${classes.text}`}>{uploadText}</p>
            <BsFillPlusSquareFill color="var(--primary-bg)" size={20} />
            {fileSize ||
              (supportedFiles && (
                <div>
                  <p className={classes.desc}>{fileSize}</p>
                  <p className={classes.desc}>{supportedFiles}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      {errorText && (
        <p className={`mt-2 ${[classes.errorText].join(" ")}`}>{errorText}</p>
      )}
      {/* {errorText && <p className={`${classes.error}`}>{errorText}</p>} */}
      {files && (
        <div className={classes.filePreviewList}>
          {files?.map((file, index) => (
            <div key={index} className={classes.fileItem}>
              <span
                className={classes.removeFile}
                onClick={() => removeFile(file)}
              >
                <IoCloseOutline color="var(--white)" size={22} />
              </span>
              {renderFileComponent(file)}
            </div>
          ))}
        </div>
      )}

      {isDeleteApiCalling && <LottieLoader />}
    </>
  );
};

export default MultiFileUpload;

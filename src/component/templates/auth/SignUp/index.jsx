"use client";

import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import TextComponent from "@/component/atoms/TextComponent/TextComponent";
import { mergeClass } from "@/resources/utils/helper";
import React, { useState } from "react";
import classes from "./signIn.module.css";
import { useRouter } from "next/navigation";
import UploadImage from "@/component/atoms/UploadImage";
import { TextArea } from "@/component/atoms/TextArea/TextArea";
import MultiFileUpload from "@/component/molecules/MultiFileUpload/MultiFileUpload";
import { SlCloudUpload } from "react-icons/sl";
import { getSupportedImageTypes } from "@/resources/utils/mediaUpload";
import UploadImageBox from "@/component/molecules/UploadImageBox";

const SignUpTemplate = () => {
  const router = useRouter();
  const [documentFiles, setDocumentFiles] = useState([]);

  const [formData, setFormData] = useState({
    image: null,
  });
  // handleUpdate
  const handleUpdate = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <TextComponent
        title={"Sign Up"}
        description={"Welcome To Paw Privileges"}
      />
      {/* <UploadImage title={"Update Profile"} /> */}
      <UploadImageBox
        containerClass={classes.uploadImageContainerClass}
        hideDeleteIcon={true}
        state={formData?.image}
        uploadImageBox={classes.uploadImageBox}
        setter={(file) => {
          handleUpdate("image", file);
        }}
        onDelete={() => {
          handleUpdate("image", null);
        }}
        onEdit={() => {}}
        imgClass={classes.uploadImage}
        label={"Add Image"}
      />
      <div>
        <div className={"flexColGap"}>
          <Input placeholder={"Wade Warren"} label={"Name"} />
          <Input placeholder={"Email"} type={"email"} label={"Email"} />
          <Input placeholder={"Monaco"} label={"Location"} />
          <Input placeholder={"(308) 555-0121"} label={"Contact"} />
          <Input
            placeholder={"password"}
            type={"password"}
            label={"Password"}
          />
          <Input placeholder={"10-10-25"} type={"date"} label={"Date"} />
          <TextArea placeholder={"Type Description"} label={"Description"} />
          <MultiFileUpload
            extraStyles={{ marginBottom: "10px" }}
            label="Upload Gallery"
            text={"Please upload an image with dimensions of 120x170"}
            uploadText="Browse and chose the files you want to upload from your computer"
            supportedFiles="(Image Dimensions 1200x170)"
            uploadIcon={
              <SlCloudUpload size={24} color="var(--Mine-Shaft-500)" />
            }
            setFiles={(files) => handleUploadMedia(files)}
            acceptedFiles={getSupportedImageTypes("images")}
            files={documentFiles}
            removeFileCb={(key) => {
              const newDocuments = documentFiles.filter((e) => e !== key);
              setDocumentFiles(newDocuments);
              // formik.setFieldValue("proposal", newDocuments);
            }}
            //   errorText={formik.touched.proposal && formik.errors.proposal}
            maxFileCount={1}
            //   formik={formik}
          />
          <Input placeholder={"Account url"} label={"Share Social Link*"} />
          <Button variant={"primary"} label={"Sign In"} />
          <p className={mergeClass(`h4 center`, classes.bottom)}>
            Already Have An Account? <span> Sign In</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpTemplate;

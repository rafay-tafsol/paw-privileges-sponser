"use client";

import BorderWrapper from "@/component/atoms/BorderWrapper";
import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import ContentHeader from "@/component/molecules/ContentHeader";
import UploadImageBox from "@/component/molecules/UploadImageBox";
import { mergeClass } from "@/resources/utils/helper";
import classes from "./Account.module.css";
import { useState } from "react";
import MultiFileUpload from "@/component/molecules/MultiFileUpload/MultiFileUpload";
import { TextArea } from "@/component/atoms/TextArea/TextArea";
import { SlCloudUpload } from "react-icons/sl";
import { getSupportedImageTypes } from "@/resources/utils/mediaUpload";

const AccountTemplate = () => {
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
      <BorderWrapper>
        <div className={classes.head}>
          <ContentHeader title={"Account Setting"} />
        </div>
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
          label="Upload Gallery"
          text={"Please upload an image with dimensions of 120x170"}
        />
        <div className={classes.inputField}>
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
          <div className={mergeClass("mt16 ", classes.profileBtns)}>
            <Button
              className="fitContent"
              label={"Cancel"}
              variant={"outline"}
            />
            <Button
              className="fitContent"
              variant={"primary"}
              label={"Update Profile"}
            />
          </div>
        </div>
      </BorderWrapper>
    </>
  );
};

export default AccountTemplate;

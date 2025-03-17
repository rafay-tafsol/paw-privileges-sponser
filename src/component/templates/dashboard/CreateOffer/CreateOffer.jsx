"use client";
import React, { useState } from "react";
import classes from "./CreateOffer.module.css";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import ContentHeader from "@/component/molecules/ContentHeader";
import MultiFileUpload from "@/component/molecules/MultiFileUpload/MultiFileUpload";
import Input from "@/component/atoms/Input/Input";
import DropDown from "@/component/molecules/DropDown/DropDown";
import {
  offerType,
  targetAudience,
} from "@/developmentContent/developmentData/DropdownData/DropdownData";
import DateInput from "@/component/molecules/DateInput";
import { Checkbox } from "@/component/atoms/Checkbox";
import { SlCloudUpload } from "react-icons/sl";
import {
  getSupportedImageTypes,
  uploadImagesHelper,
} from "@/resources/utils/mediaUpload";
import Button from "@/component/atoms/Button";
import { RiAttachment2 } from "react-icons/ri";

export default function CreateOffer() {
  const [offerLimited, setOfferLimited] = useState(false);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [isLoadingWithType, setIsLoadingWithTypes] = useState("");
  const [selectedSponsor, setSelectedSponsor] = useState("");

  return (
    <BorderWrapper className={classes.wrapper}>
      <ContentHeader title={`Create Offer`} />
      <div className={classes.inputFields}>
        <DropDown
          isClearable
          isAsync
          isSearchable
          value={selectedSponsor}
          setter={setSelectedSponsor}
          label={"Select Sponsor"}
          debounceTimeout={5000}
          placeholder={"Search sponsors"}
          defaultOptions={dummySponsors}
        />
        <Input label={"Title"} placeholder={"Enter category name"} />
        <DateInput label={"Start Date"} />
        <DateInput label={"End Date"} />
        <DropDown
          placeholder={"Select any"}
          setValue={() => {}}
          label={"Target Audience"}
          options={targetAudience}
        />
        <DropDown
          placeholder={"Select any"}
          setValue={() => {}}
          label={"Offer Type"}
          options={offerType}
        />
        <Input label={"Location"} placeholder={"Enter Location"} />
        <Input
          label={"Website Link"}
          placeholder={"Enter website link"}
          leftIcon={<RiAttachment2 color={"var(--Mine-Shaft-500)"} />}
        />

        <Checkbox
          value={offerLimited}
          setValue={setOfferLimited}
          label="Limited Offer"
          checkboxDiv={classes.labelClass}
          checkMarkStyle={classes.checkMarkBox}
          title={"Offer Tag"}
        />
        <div className={classes.customLabel}>
          <label className={`${[classes.labelText].join(" ")}`}>Discount</label>
          <div className={classes.twoInputs}>
            <Input
              label={""}
              placeholder={"Enter discount amount"}
              className={classes.customInput}
            />
            <DateInput
              label={""}
              placeholder="Discount Date"
              className={classes.customInput}
            />
          </div>
        </div>
        <MultiFileUpload
          extraStyles={{ marginBottom: "10px" }}
          label="Upload Gallery"
          text={"Please upload an image with dimensions of 120x170"}
          uploadText="Browse and chose the files you want to upload from your computer"
          supportedFiles="(Image Dimensions 1200x170)"
          uploadIcon={<SlCloudUpload size={24} color="var(--Mine-Shaft-500)" />}
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

        <div className={classes.buttonDiv}>
          <Button variant={"primary"} label={"Create Offer"} />
          <Button
            label={"Cancel"}
            variant={"outlined"}
            className={classes.btnLabelFont}
          />
        </div>
      </div>
    </BorderWrapper>
  );
}

const dummySponsors = [
  {
    label: "Sponsor 1", // Name only
    value: "online",
    image: "/images/svgs/profile.svg", // Image path
  },
  {
    label: "Sponsor 2", // Name only
    value: "asd",
    image: "/images/svgs/profile.svg", // Image path
  },
];

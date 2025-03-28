"use client";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import ContentHeader from "@/component/molecules/ContentHeader";
import DateInput from "@/component/molecules/DateInput";
import DropDown from "@/component/molecules/DropDown/DropDown";
import {
  offerType,
  targetAudience,
} from "@/developmentContent/developmentData/DropdownData/DropdownData";
import { OfferFormSchema } from "@/formik/schema/CreateOfferSchema";
import { useFormik } from "formik";
import { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";
import classes from "./CreateOffer.module.css";

export default function CreateOffer() {
  const [offerLimited, setOfferLimited] = useState(false);
  // const [documentFiles, setDocumentFiles] = useState([]);
  const [isLoadingWithType, setIsLoadingWithTypes] = useState("");

  const [formData, setFormData] = useState({
    image: null,
  });

  // handleUpdate
  const handleUpdate = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const createOfferFormik = useFormik({
    initialValues: {
      title: "",
      startDate: "",
      endDate: "",
      targetAudience: "",
      offerType: "",
      location: "",
      websiteLink: "",
      offerLimited: false,
      discountAmount: "",
      discountDate: "",
      gallery: [],
    },
    validationSchema: OfferFormSchema,

    onSubmit: (values) => {
      console.log("Formik Errors:", createOfferFormik.errors);
      console.log("Form Submitted", values);
    },
  });

  return (
    <BorderWrapper className={classes.wrapper}>
      <ContentHeader title={`Create Offer`} />
      <div className={classes.inputFields}>
        <Input
          label={"Title"}
          placeholder={"Enter category name"}
          value={createOfferFormik.values.title}
          setValue={createOfferFormik.handleChange("title")}
          errorText={
            createOfferFormik.touched.title && createOfferFormik.errors.title
          }
        />
        <DateInput
          label={"Start Date"}
          value={createOfferFormik.values.startDate}
          setValue={createOfferFormik.handleChange("startDate")}
          errorText={
            createOfferFormik.touched.startDate &&
            createOfferFormik.errors.startDate
          }
        />
        <DateInput
          label={"End Date"}
          value={createOfferFormik.values.endDate}
          setValue={createOfferFormik.handleChange("endDate")}
          errorText={
            createOfferFormik.touched.endDate &&
            createOfferFormik.errors.endDate
          }
        />

        <DropDown
          placeholder="Select any"
          label="Target Audience"
          value={createOfferFormik.values.targetAudience.value} // Ensure only value is stored
          setter={(val) =>
            createOfferFormik.setFieldValue("targetAudience", val?.value)
          }
          errorText={
            createOfferFormik.touched.targetAudience &&
            createOfferFormik.errors.targetAudience
          }
          options={targetAudience.map((e) => ({
            label: e.label,
            value: e.value,
          }))}
        />

        <DropDown
          placeholder="Select any"
          label="Offer Type"
          value={createOfferFormik.values.offerType.value} // Ensure only value is stored
          setter={(val) =>
            createOfferFormik.setFieldValue("offerType", val?.value)
          }
          errorText={
            createOfferFormik.touched.offerType &&
            createOfferFormik.errors.offerType
          }
          options={offerType.map((e) => ({
            label: e.label,
            value: e.value,
          }))}
        />

        {/* <DropDown
          placeholder="Select any"
          label="Offer Type"
          value={createOfferFormik.values.offerType?.value} // Ensure value is a string
          setter={(val) =>
            createOfferFormik.setFieldValue("offerType", val?.value)
          } // Store only the value
          errorText={
            createOfferFormik.touched.offerType &&
            createOfferFormik.errors.offerType
          }
          options={offerType?.map((e) => ({
            label: e.label,
            value: e.value,
          }))}
        /> */}

        {createOfferFormik.values.offerType === "in-person" && (
          <Input
            label={"Location"}
            placeholder={"Enter Location"}
            value={createOfferFormik.values.location}
            setValue={createOfferFormik.handleChange("location")}
            errorText={
              createOfferFormik.touched.location &&
              createOfferFormik.errors.location
            }
          />
        )}

        {createOfferFormik.values.offerType === "online" && (
          <Input
            label={"Website Link"}
            placeholder={"Enter website link"}
            leftIcon={<RiAttachment2 color={"var(--Mine-Shaft-500)"} />}
            value={createOfferFormik.values.websiteLink}
            setValue={createOfferFormik.handleChange("websiteLink")}
            errorText={
              createOfferFormik.touched.websiteLink &&
              createOfferFormik.errors.websiteLink
            }
          />
        )}

        {/* 
        <Checkbox
          value={createOfferFormik.values.offerLimited}
          setValue={(newValue) =>
            // createOfferFormik.setFieldValue(
            //   "offerLimited",
            //   newValue === "Limited Offer" ? true : false
            // )
            createOfferFormik.setFieldValue("offerLimited", newValue)
          }
          label="Limited Offer"
          checkboxDiv={classes.labelClass}
          checkMarkStyle={classes.checkMarkBox}
          title="Offer Tag"
          errorText={
            createOfferFormik.touched.offerLimited &&
            createOfferFormik.errors.offerLimited
          }
        /> */}

        <div className={classes.customLabel}>
          <label className={`${[classes.labelText].join(" ")}`}>Discount</label>
          <div className={classes.twoInputs}>
            <Input
              label={""}
              placeholder={"Enter discount amount"}
              className={classes.customInput}
              value={createOfferFormik.values.discountAmount}
              setValue={createOfferFormik.handleChange("discountAmount")}
              errorText={
                createOfferFormik.touched.discountAmount &&
                createOfferFormik.errors.discountAmount
              }
            />
            <DateInput
              label={""}
              placeholder="Discount Date"
              className={classes.customInput}
              value={createOfferFormik.values.discountDate}
              setValue={createOfferFormik.handleChange("discountDate")}
              errorText={
                createOfferFormik.touched.discountDate &&
                createOfferFormik.errors.discountDate
              }
            />
          </div>
        </div>
        {/* <MultiFileUpload
          extraStyles={{ marginBottom: "10px" }}
          label="Upload Gallery"
          text="Please upload an image with dimensions of 120x170"
          uploadText="Browse and choose the files you want to upload from your computer"
          supportedFiles="(Image Dimensions 1200x170)"
          uploadIcon={<SlCloudUpload size={24} color="var(--Mine-Shaft-500)" />}
          // setFiles={(files) => handleUploadMedia(files)}
          setFiles={(files) => {
            setDocumentFiles(files);
            createOfferFormik.setFieldValue("gallery", files);
          }}
          acceptedFiles={getSupportedImageTypes("images")}
          files={documentFiles}
          removeFileCb={(key) => {
            const newDocuments = documentFiles.filter((e) => e !== key);
            setDocumentFiles(newDocuments);
            createOfferFormik.setFieldValue("gallery", newDocuments);
          }}
          maxFileCount={5}
          errorText={
            createOfferFormik.touched.gallery &&
            createOfferFormik.errors.gallery
          }
        /> */}

        <div className={classes.buttonDiv}>
          <Button
            type="submit"
            variant="primary"
            label="Create Offer"
            onClick={createOfferFormik.handleSubmit}
          />
          <Button
            type="reset"
            label="Cancel"
            variant="outlined"
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

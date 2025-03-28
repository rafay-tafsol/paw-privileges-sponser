"use client";
import { useState } from "react";
import Button from "@/component/atoms/Button";
import Input from "@/component/atoms/Input/Input";
import { TextArea } from "@/component/atoms/TextArea/TextArea";
import MultiFileUpload from "@/component/molecules/MultiFileUpload/MultiFileUpload";
import SocialMediaSelect from "@/component/molecules/SocialMediaSelect";
import UploadImageBox from "@/component/molecules/UploadImageBox";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import classes from "./signUp.module.css";
import { SlCloudUpload } from "react-icons/sl";
import { getSupportedImageTypes } from "@/resources/utils/mediaUpload";
import { signUpSchema } from "@/formik/schema/SignUpSchema";
import { useFormik } from "formik";
import DateInput from "@/component/molecules/DateInput";

const SignUpTemplate = () => {
  const router = useRouter();
  // const [documentFiles, setDocumentFiles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);

  // const [formData, setFormData] = useState({
  //   image: null,
  // });
  // // handleUpdate
  // const handleUpdate = (key, value) => {
  //   setFormData((prev) => ({ ...prev, [key]: value }));
  // };

  const SignUpFormik = useFormik({
    initialValues: {
      // logo: null,
      name: "",
      email: "",
      location: "",
      contact: "",
      password: "",
      date: "",
      description: "",
      gallery: [],
      socialLinks: [],
    },
    validationSchema: signUpSchema,

    onSubmit: (values) => {
      console.log("Formik Errors:", SignUpFormik.errors);
      console.log("Form Submitted", values);
    },
  });

  const handleAdd = () => {
    console.log("Input Value:", inputValue);
    console.log("Current Social Links:", SignUpFormik.values.socialLinks);

    if (
      inputValue.trim() &&
      !SignUpFormik.values.socialLinks.includes(inputValue)
    ) {
      const updatedLinks = [
        ...SignUpFormik.values.socialLinks,
        inputValue.trim(),
      ];
      console.log("Updated Social Links:", updatedLinks);

      SignUpFormik.setFieldValue("socialLinks", updatedLinks);
      setInputValue(""); // Clear input
    }
  };

  const handleRemove = (platform) => {
    const updatedLinks = SignUpFormik.values.socialLinks.filter(
      (item) => item !== platform
    );
    SignUpFormik.setFieldValue("socialLinks", updatedLinks);
  };

  return (
    <>
      {/* <UploadImageBox
        containerClass={classes.uploadImageContainerClass}
        hideDeleteIcon={true}
        uploadImageBox={classes.uploadImageBox}
        state={formData?.image}
        setter={(file) => {
          handleUpdate("image", file);
        }}
        onDelete={() => {
          handleUpdate("image", null);
        }}
        onEdit={() => {}}
        imgClass={classes.uploadImage}
        label={"Add Image"}
      /> */}

      <div className="flexColGap">
        <Input
          placeholder="Wade Warren"
          label="Name"
          name="name"
          value={SignUpFormik.values.name}
          setValue={SignUpFormik.handleChange("name")}
          errorText={SignUpFormik.touched.name && SignUpFormik.errors.name}
        />
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
          value={SignUpFormik.values.email}
          setValue={SignUpFormik.handleChange("email")}
          errorText={SignUpFormik.touched.email && SignUpFormik.errors.email}
        />
        <Input
          placeholder="Monaco"
          label="Location"
          name="location"
          value={SignUpFormik.values.location}
          setValue={SignUpFormik.handleChange("location")}
          errorText={
            SignUpFormik.touched.location && SignUpFormik.errors.location
          }
        />
        <Input
          placeholder="(308) 555-0121"
          label="Contact"
          name="contact"
          value={SignUpFormik.values.contact}
          setValue={SignUpFormik.handleChange("contact")}
          errorText={
            SignUpFormik.touched.contact && SignUpFormik.errors.contact
          }
        />
        <Input
          placeholder="password"
          type="password"
          label="Password"
          name="password"
          value={SignUpFormik.values.password}
          setValue={SignUpFormik.handleChange("password")}
          errorText={
            SignUpFormik.touched.password && SignUpFormik.errors.password
          }
        />
        {/* <Input
          placeholder="10-10-25"
          type="date"
          label="Date"
          name="date"
          value={SignUpFormik.values.date}
          setValue={SignUpFormik.handleChange("date")}
          errorText={SignUpFormik.touched.date && SignUpFormik.errors.date}
        /> */}
        <DateInput
          label={"Date"}
          name="date"
          placeholder="10-10-25"
          type="date"
          value={SignUpFormik.values.date}
          setValue={SignUpFormik.handleChange("date")}
          errorText={SignUpFormik.touched.date && SignUpFormik.errors.date}
        />
        <TextArea
          placeholder="Type Description"
          label="Description"
          name="description"
          value={SignUpFormik.values.description}
          setter={SignUpFormik.handleChange("description")}
          errorText={
            SignUpFormik.touched.description && SignUpFormik.errors.description
          }
        />
        {/* <MultiFileUpload
          extraStyles={{ marginBottom: "10px" }}
          label="Upload Gallery"
          text="Please upload an image with dimensions of 120x170"
          uploadText="Browse and choose the files you want to upload from your computer"
          supportedFiles="(Image Dimensions 1200x170)"
          uploadIcon={<SlCloudUpload size={24} color="var(--Mine-Shaft-500)" />}
          setFiles={(files) => {
            setDocumentFiles(files);
            SignUpFormik.setFieldValue("gallery", files);
          }}
          acceptedFiles={getSupportedImageTypes("images")}
          files={documentFiles}
          removeFileCb={(key) => {
            const newDocuments = documentFiles.filter((e) => e !== key);
            setDocumentFiles(newDocuments);
            SignUpFormik.setFieldValue("gallery", newDocuments);
          }}
          maxFileCount={5}
          errorText={
            SignUpFormik.touched.gallery && SignUpFormik.errors.gallery
          }
        /> */}

        <SocialMediaSelect
          inputLabel="Share Social Link*"
          inputPlaceholder="Enter social media name"
          RightBtn={true}
          btnLabel="Add Social Link"
          inputValue={inputValue}
          setInputValue={setInputValue}
          socialLinks={SignUpFormik.values.socialLinks} // Make sure it's coming from Formik
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          errorText={
            SignUpFormik.touched.socialLinks && SignUpFormik.errors.socialLinks
          }
        />

        <Button
          variant="primary"
          label="Sign Up"
          type="submit"
          onClick={SignUpFormik.handleSubmit}
        />
        <p className={classes.bottom}>
          Already Have An Account? <span>Sign In</span>
        </p>
      </div>
    </>
  );
};

export default SignUpTemplate;

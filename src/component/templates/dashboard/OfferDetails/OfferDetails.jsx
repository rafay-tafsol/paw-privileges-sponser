import React from "react";
import classes from "./OfferDetails.module.css";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import ContentHeader from "@/component/molecules/ContentHeader";
import Image from "next/image";
import { mergeClass } from "@/resources/utils/helper";
import { SlTarget } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbTag } from "react-icons/tb";
import Button from "@/component/atoms/Button";

export default function OfferDetails() {
  return (
    <BorderWrapper className={classes.wrapper}>
      <ContentHeader title={`Offer Details`} />
      <Image
        src="/Images/app-images/svg/offerDetails.svg"
        layout="responsive"
        width={1200}
        height={200}
        alt="Banner"
        className={classes.bannerImage}
      />
      <div className={mergeClass("flexGap", classes.headDiv)}>
        <h2 className={mergeClass("h2", classes.subHeading)}>
          Free Grooming Session For Breeders
        </h2>
        <p className={classes.limitedTime}>Limited Time</p>
      </div>

      <div className={classes.valuesContainer}>
        <div className={classes.element}>
          <h3 className={mergeClass("h3", classes.valueTitle)}>
            Target Audience
          </h3>
          <div className="flexGap">
            <SlTarget size={18} color="var(--main-color)" />
            <p className={mergeClass("h5", classes.key)}>Target Audience</p>
            <p className={mergeClass("h5", classes.value)}>Dog Breeder</p>
          </div>
        </div>
        <hr className={classes.hr} />
        <div className={classes.element}>
          <h3 className={mergeClass("h3", classes.valueTitle)}>Offer Date</h3>
          <div className="flexGap">
            <LuCalendarDays size={18} color="var(--main-color)" />
            <p className={mergeClass("h5", classes.key)}>Start Date</p>
            <p className={mergeClass("h5", classes.value, classes.seperator)}>
              10/1/25
            </p>
            <LuCalendarDays size={18} color="var(--main-color)" />
            <p className={mergeClass("h5", classes.key)}>End Date</p>
            <p className={mergeClass("h5", classes.value)}>10/2/25</p>
          </div>
        </div>
        <hr className={classes.hr} />
        <div className={classes.element}>
          <h3 className={mergeClass("h3", classes.valueTitle)}>Offer Type</h3>
          <div className="flexGap">
            <TbTag size={18} color="var(--main-color)" />
            <p className={mergeClass("h5", classes.key)}>Offer Type</p>
            <p className={mergeClass("h5", classes.value, classes.seperator)}>
              Online
            </p>
            <HiOutlineLocationMarker size={18} color="var(--main-color)" />
            <p className={mergeClass("h5", classes.key)}>Website Link</p>
            <p className={mergeClass("h5", classes.value)}>www.website.com</p>
          </div>
        </div>
        <hr className={classes.hr} />
        <div className={classes.element}>
          <h3 className={mergeClass("h3", classes.valueTitle)}>Discount</h3>
          <div className="flexGap">
            <LuCalendarDays size={18} color="var(--main-color)" />
            <p className={mergeClass("h5", classes.key)}>Date</p>
            <p className={mergeClass("h5", classes.value, classes.seperator)}>
              10/4/25
            </p>
            <p className={mergeClass("h5", classes.value)}>10%</p>
          </div>
        </div>
        <div className={classes.buttonDiv}>
          <Button label={"Approve"} variant={"primary"} />
          <Button
            label={"Reject"}
            variant={"outlined"}
            className={classes.btnLabelFont}
          />
        </div>
      </div>
    </BorderWrapper>
  );
}

import React from "react";
import classes from "./ProfileDescription.module.css";
import Image from "next/image";
import { mergeClass } from "@/resources/utils/helper";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiCalendarDots } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { TbPhone } from "react-icons/tb";
import moment from "moment";
import ElasticCarousel from "../ElasticCarousel";

export default function ProfileDescription({ data }) {
  const details = data?.profileDetail;

  return (
    <div className={classes.mainDiv}>
      <div className={classes.bannerWrapper}>
        {/* <ElasticCarousel>
          {data?.headerImg?.map((item, index) => (
            <Image
              key={index}
              src={item}
              layout="responsive"
              width={1200}
              height={200}
              alt="Banner"
              className={classes.bannerImage}
            />
          ))}
        </ElasticCarousel> */}

        <Image
          src="/images/app-images/svg/sponsorCoverPhoto.svg"
          layout="responsive"
          width={1200}
          height={200}
          alt="Banner"
          className={classes.bannerImage}
        />

        <div className={classes.circularImageWrapper}>
          <Image
            src="/images/app-images/svg/sponsorProfileImage.svg"
            width={120}
            height={120}
            alt="Circular"
            className={classes.circularImage}
          />
        </div>
      </div>
      <div className={classes.descriptionDiv}>
        <div className={classes.nameDiv}>
          <h2 className={mergeClass("h2", classes.name)}>{details?.name}</h2>
          <div className={classes.socialIconsDiv}>
            <FaFacebookF color="var(--main-color)" size={18} />
            <RiInstagramFill color="var(--main-color)" size={18} />
            <IoLogoTiktok color="var(--main-color)" size={18} />
          </div>
        </div>
        <div className={classes.detaislDiv}>
          <div className={classes.details}>
            <IoMailOutline color="var(--main-color)" size={18} />
            <p className={mergeClass("h5", classes.data)}>{details?.email}</p>
          </div>
          <div className={classes.details}>
            <TbPhone color="var(--main-color)" size={18} />
            <p className={mergeClass("h5", classes.data)}>{details?.number}</p>
          </div>
          <div className={classes.details}>
            <HiOutlineLocationMarker color="var(--main-color)" size={18} />
            <p className={mergeClass("h5", classes.data)}>
              {details?.location}
            </p>
          </div>
          <div className={classes.details}>
            <PiCalendarDots color="var(--main-color)" size={18} />
            <p className={mergeClass("h5", classes.data)}>
              {moment(details?.date).format("DD/MM/YYYY")}
            </p>
          </div>
        </div>
      </div>
      <p className={classes.personalInfo}>{details?.description}</p>
    </div>
  );
}

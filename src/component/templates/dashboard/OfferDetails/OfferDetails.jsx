"use client";

import BorderWrapper from "@/component/atoms/BorderWrapper";
import ContentHeader from "@/component/molecules/ContentHeader";
import Image from "next/image";
import { useState } from "react";
import classes from "./OfferDetails.module.css";

import ElasticCarousel from "@/component/atoms/ElasticCarousel";
import { offersData } from "@/developmentContent/developmentData/DummyData";
import { mergeClass } from "@/resources/utils/helper";
import { useRouter, useSearchParams } from "next/navigation";
import { offersDetailData } from "@/developmentContent/developmentData/OfferDetails";

export default function OfferDetails() {
  const [data, setData] = useState(offersDetailData);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <BorderWrapper className={classes.wrapper}>
      <ContentHeader title={`Offer Details`} />
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
        src="/Images/app-images/svg/sponsorCoverPhoto.svg"
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
        {data?.offerDetail.map((item, index) => (
          <div key={index}>
            <div className={classes.element}>
              <h3 className={mergeClass("h3", classes.valueTitle)}>
                {item.title}
              </h3>
              <div className="flexGap">
                {item.icon}
                <p className={mergeClass("h5", classes.key)}>{item.key}</p>
                <p
                  className={mergeClass("h5", classes.value, classes.seperator)}
                >
                  {item.value}
                </p>
                {item.additionalIcon && item.additionalKey && (
                  <>
                    {item.additionalIcon}
                    <p className={mergeClass("h5", classes.key)}>
                      {item.additionalKey}
                    </p>
                    <p className={mergeClass("h5", classes.value)}>
                      {item.additionalValue}
                    </p>
                  </>
                )}
              </div>
            </div>

            {index !== data?.offerDetail.length - 1 && (
              <hr className={classes.hr} />
            )}
          </div>
        ))}
      </div>
      {type === "in-person" && (
        <div className="google-map-code">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "12px" }}
            aria-hidden="false"
          />
        </div>
      )}
    </BorderWrapper>
  );
}

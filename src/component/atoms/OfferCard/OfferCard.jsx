import React from "react";
import classes from "./OfferCard.module.css";
import Image from "next/image";
import { mergeClass } from "@/resources/utils/helper";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function OfferCard({ data }) {
  const router = useRouter();

  return (
    <div
      className={classes.mainDiv}
      onClick={() => router.push("offer-details")}
    >
      <div className={classes.imageDiv}>
        <Image src={data?.image} fill alt="offers" className={classes.image} />
        <div className={classes.dateBadge}>
          <span>Available:</span> {data?.availableDate}
        </div>
      </div>
      <p className={mergeClass("h3", classes.text)}>{data?.title}</p>
      <div className={classes.location}>
        <HiOutlineLocationMarker color="var(--main-color)" size={20} />
        <p className={mergeClass("h3", classes.text)}>{data?.location}</p>
      </div>
    </div>
  );
}

"use client";

import BorderWrapper from "@/component/atoms/BorderWrapper";
import OfferCard from "@/component/atoms/OfferCard/OfferCard";
import ProfileDescription from "@/component/atoms/ProfileDescription/ProfileDescription";
import ContentHeader from "@/component/molecules/ContentHeader";
import { sponsorProfileData } from "@/developmentContent/SponsorProfileData";
import { mergeClass } from "@/resources/utils/helper";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./SponsorProfile.module.css";

const SponsorProfile = () => {
  const [data, setData] = useState(sponsorProfileData);
  return (
    <BorderWrapper className={classes.wrapper}>
      <ContentHeader
        title={`Dog Profile`}
        buttonText={"Edit Profile"}
        route={"/sponsor-profile/edit-sponsor-profile"}
      />

      <ProfileDescription data={data} />

      <div className={classes.offersDiv}>
        <h2 className={mergeClass("h2", classes.heading)}>Offers</h2>
        <Row className={""}>
          {data?.offersCardData?.map((item, i) => {
            return (
              <Col md={4} key={i}>
                <OfferCard data={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </BorderWrapper>
  );
};

export default SponsorProfile;

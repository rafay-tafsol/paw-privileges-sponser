"use client";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import { userManagementBtn } from "@/developmentContent/developmentData/ButtonData";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Subscription.module.css";
import ContentHeader from "@/component/molecules/ContentHeader";
import FilterButton from "@/component/atoms/FilterButton";
import TopHeader from "@/component/molecules/TopHeader";
import { mergeClass } from "@/resources/utils/helper";
import {
  subscriptionCardData,
  subscriptionData,
} from "@/developmentContent/developmentData/SubscritionPageData/Subscription";
import SubscriptionCard from "@/component/molecules/SubscriptionCard";
import OvalTabs from "@/component/molecules/OvalTabs/OvalTabs";
import Billing from "@/component/molecules/Billing";

const SubscriptionPage = () => {
  const [value, setValue] = useState(subscriptionData[0].value);
  return (
    <div>
      <BorderWrapper>
        <Row>
          <Col md={12}>
            <div className={classes.header}>
              <ContentHeader title={"Subscription Management"} />
            </div>
          </Col>

          <Col md={12}>
            <div className={classes.subcriptionCardWrapper}>
              <Row>
                {subscriptionCardData?.map((data, index) => (
                  <Col md={6} key={index}>
                    <SubscriptionCard data={data} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col md={12}>
            <div className={classes.header}>
              <h3>Invoice</h3>
            </div>
          </Col>
          <Col md={12}>
            <div className={classes.subcriptionInvoice}>
              <Billing />
            </div>
          </Col>
        </Row>
      </BorderWrapper>
    </div>
  );
};

export default SubscriptionPage;

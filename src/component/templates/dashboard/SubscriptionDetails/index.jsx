import PaymentCard from "@/component/molecules/PaymentCard";
import { paymentAndInvoiceData } from "@/developmentContent/developmentData/SubscriptionDetailPage/SubscriptionDetailPage";
import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./SubscriptionDetails.module.css";
import { MdOutlineLayers } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";

const SubscriptionDetails = () => {
  return (
    <div className={classes.SubscriptionDetailsMain}>
      <Row>
        <Col md={12}>
          <div className={classes.header}>
            <h3>Subscription Details</h3>
          </div>
        </Col>
        <Col md={12}>
          <div className={classes.subcriptionInvoiceCards}>
            <Row>
              {paymentAndInvoiceData?.map((data, index) => (
                <Col md={5} key={index}>
                  <PaymentCard data={data} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col md={10}>
          <div className={classes.paymentDetails}>
            <div className={classes.paymentDetailHead}>
              <span>
                <MdOutlineLayers color={"var(--white-color)"} />
              </span>
              <p>Payment Details</p>
            </div>
            <div className={classes.subHead}>
              <h4>Billing Address</h4>
            </div>
            <div className={classes.billingAddress}>
              <h4>Jenny Wilson</h4>
              <p>
                <LuMapPin />
                <span>123 Elm Street, Suite 456</span>
              </p>
              <p>
                <LuMapPin />
                <span>123 Elm Street, Suite 456</span>
              </p>
            </div>
            <div className={classes.subHead}>
              <h4>Payment Detail</h4>
            </div>
            <div className={classes.paymentDetail}>
              <span>
                <p>Payment Method</p> <h4>Paypal</h4>
              </span>
              <span>
                <p>Transaction ID</p> <h4>TXN-5678901234</h4>
              </span>
              <span>
                <p>Payment Date</p> <h4>Jan 15, 2025</h4>
              </span>
            </div>
            <div className={classes.subHead}>
              <h4>Amount Paid</h4>
            </div>
            <div className={classes.payment}>
              <span>
                <p>Total Amount</p> <h4>$99.99</h4>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SubscriptionDetails;

"use client";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import ContentHeader from "@/component/molecules/ContentHeader";
import Pagination from "@/component/molecules/PaginationComponent";
import SubscriptionCard from "@/component/molecules/SubscriptionCard";
import TopHeader from "@/component/molecules/TopHeader";
import AppTable from "@/component/organisms/AppTable/AppTable";
import {
  subscriptionCardData,
  subscriptionData,
} from "@/developmentContent/developmentData/SubscritionPageData/Subscription";
import { invoiceDataRecords } from "@/developmentContent/developmentData/TableBody";
import { invoiceTableHeader } from "@/developmentContent/developmentData/TableHeader";
import { capitalizeFirstLetter, mergeClass } from "@/resources/utils/helper";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { HiDotsHorizontal } from "react-icons/hi";
import classes from "./Subscription.module.css";
import ShowStatus from "@/component/atoms/ShowStatus";
import { useRouter } from "next/navigation";

const SubscriptionPage = () => {
  const router = useRouter();

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
                    <SubscriptionCard
                      data={data}
                      isPrimaryBtn={true}
                      label={"Upgrade"}
                    />
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
              <TopHeader showSearch />
              <div className="mt14">
                <AppTable
                  data={invoiceDataRecords}
                  tableHeader={invoiceTableHeader}
                  renderItem={({ item, key, rowIndex, data }) => {
                    const dataItem = data[rowIndex];
                    if (key === "name") {
                      return (
                        <div className="flexGap">
                          <div className={"profile"}>
                            <Image src={dataItem?.image} fill alt="profile" />
                          </div>
                          <div>{dataItem?.name}</div>
                        </div>
                      );
                    }
                    if (key === "date") {
                      return (
                        <p>{moment(dataItem.date).format("DD/MM/YYYY")}</p>
                      );
                    }
                    if (key === "status") {
                      return (
                        // <div
                        //   className={mergeClass(
                        //     classes?.status,
                        //     `${
                        //       dataItem?.status === "paid"
                        //         ? classes?.paidStatus
                        //         : classes?.pendingStatus
                        //     }`
                        //   )}
                        // >
                        //   <span
                        //     className={mergeClass(
                        //       classes?.statusSpan,
                        //       `${
                        //         dataItem?.status === "paid"
                        //           ? classes?.paidSpan
                        //           : classes?.pendingSpan
                        //       }`
                        //     )}
                        //   ></span>
                        //   {capitalizeFirstLetter(dataItem?.status)}
                        // </div>
                        <ShowStatus status={dataItem?.status} />
                      );
                    }
                    if (key === "amount") {
                      return <div>{dataItem?.amount}$</div>;
                    }
                    if (key === "select") {
                      return (
                        <HiDotsHorizontal
                          fontSize={24}
                          cursor={"pointer"}
                          onClick={() =>
                            router.push(`/subscription/subscription-details`)
                          }
                        />
                      );
                    }

                    return item || "";
                  }}
                />
                <Pagination />
              </div>
            </div>
          </Col>
        </Row>
      </BorderWrapper>
    </div>
  );
};

export default SubscriptionPage;

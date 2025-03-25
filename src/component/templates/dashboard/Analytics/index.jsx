"use client";

import BorderWrapper from "@/component/atoms/BorderWrapper";
import StatesCard from "@/component/atoms/StatesCard";
import LineChart from "@/component/molecules/Chart";
import { mediaUrl, mergeClass } from "@/resources/utils/helper";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Analytics.module.css";

import Button from "@/component/atoms/Button";
import ShowStatus from "@/component/atoms/ShowStatus";
import ContentHeader from "@/component/molecules/ContentHeader";
import DropDown from "@/component/molecules/DropDown/DropDown";
import Pagination from "@/component/molecules/PaginationComponent";
import TopHeader from "@/component/molecules/TopHeader";
import AppTable from "@/component/organisms/AppTable/AppTable";
import { offerManagementBtn } from "@/developmentContent/developmentData/ButtonData";
import { offerStatus } from "@/developmentContent/developmentData/DropdownData/DropdownData";
import {
  analyticsTableData,
  offerInPersonTableData,
  offerOnlineTableData,
} from "@/developmentContent/developmentData/TableBody";
import {
  analyticsTableHeader,
  offerTableHeader,
} from "@/developmentContent/developmentData/TableHeader";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiDownloadBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AnalyticsTemplate = () => {
  const router = useRouter();

  const [value, setValue] = useState(offerManagementBtn[0].value);
  const [page, setPage] = useState(1);

  return (
    <BorderWrapper>
      <div className={classes?.mainAnalytics}>
        <div className="mb20">
          <ContentHeader
            title={"Analytics"}
            route={""}
            buttonText={"Download Reports"}
          />
        </div>
        <div className={classes.dashboard}>
          <div className={classes.top}>
            {/* left */}
            <div className={classes.left}>
              <Row>
                <Col md="3">
                  <StatesCard />
                </Col>
                <Col md="3">
                  <StatesCard />
                </Col>
                <Col md="3">
                  <StatesCard />
                </Col>
                <Col md="3">
                  <StatesCard />
                </Col>
              </Row>
            </div>
            {/* right */}
          </div>
          <div className={classes.bottom}>
            <BorderWrapper containerClass={classes.bottomWrapper}>
              <div className={classes.chartHead}>
                <div className={classes.headText}>
                  <h4 className={mergeClass(`h1`)}>20% Off Premium Dog Food</h4>
                  <p> Top Performing Offer </p>
                </div>
                <DropDown placeholder={"This Month"} />
              </div>
              <div className={classes?.LineChart}>
                <LineChart />
              </div>
              <div className={classes.chartBottom}>
                <Button
                  variant={"secondary"}
                  label={"Download Report"}
                  rightIcon={<PiDownloadBold />}
                />
                <span>
                  <h5>98.78%</h5>
                  <p>Rate Click</p>
                </span>
              </div>
            </BorderWrapper>
          </div>
        </div>
      </div>
      <BorderWrapper className={classes.BorderWrapper}>
        <ContentHeader
          title={"Offer Analytics"}
          buttonText={"Download Report"}
          variant={"secondary"}
          rightIcon={<PiDownloadBold />}
          route={"/create-offer"}
        />
        <div className="width">
          <TopHeader
            className={"mt20"}
            placeholder={"Status"}
            showSearch
            showDropdownFilter
            showDateFilter
            options={offerStatus}
          />
        </div>
        <AppTable
          data={analyticsTableData}
          tableHeader={analyticsTableHeader}
          renderItem={({ item, key, rowIndex, data }) => {
            const dataItem = data[rowIndex];
            if (key === "status") {
              return <ShowStatus status={dataItem.status} />;
            }
            if (key === "chart") {
              return (
                <div className={classes.analyticsImg}>
                  <Image
                    src={mediaUrl(dataItem?.chart)}
                    alt="Chart Image"
                    layout="fill"
                  />
                </div>
              );
            }
            if (key === "select") {
              return (
                // <HiDotsHorizontal
                //   fontSize={24}
                //   cursor={"pointer"}
                //   onClick={() => router.push(`/offer-management/offer-details`)}
                // />
                <div className={classes.analyticsBtn}>
                  <Button
                    variant={"secondary"}
                    label={"Download Report"}
                    rightIcon={<PiDownloadBold />}
                  />
                </div>
              );
            }

            return item || "";
          }}
        />
        <Pagination setCurrentPage={setPage} currentPage={page} />
      </BorderWrapper>
    </BorderWrapper>
  );
};

export default AnalyticsTemplate;

"use client";
import React, { useState } from "react";
import classes from "./OfferManagement.module.css";
import ContentHeader from "@/component/molecules/ContentHeader";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import SearchInput from "@/component/atoms/SearchInput";
import TopHeader from "@/component/molecules/TopHeader";
import DropDown from "@/component/molecules/DropDown/DropDown";
import { offerManagementBtn } from "@/developmentContent/developmentData/ButtonData";
import OvalTabs from "@/component/molecules/OvalTabs/OvalTabs";
import { offerTableHeader } from "@/developmentContent/developmentData/TableHeader";
import {
  offerInPersonTableData,
  offerOnlineTableData,
} from "@/developmentContent/developmentData/TableBody";
import AppTable from "@/component/organisms/AppTable/AppTable";
import { HiDotsHorizontal } from "react-icons/hi";
import ShowStatus from "@/component/atoms/ShowStatus";
import Pagination from "@/component/molecules/PaginationComponent";
import { useRouter } from "next/navigation";

const OfferManagementTemplate = () => {
  const router = useRouter();
  const [value, setValue] = useState(offerManagementBtn[0].value);
  const [page, setPage] = useState(1);

  return (
    <BorderWrapper>
      <ContentHeader
        title={"Offer Management"}
        buttonText={"Create Offer"}
        route={"/create-offer"}
      />
      <div className="width">
        <TopHeader
          className={"mt20"}
          showSearch
          showDropdownFilter
          showDateFilter
        />
      </div>
      <div className="mt12">
        <OvalTabs data={offerManagementBtn} value={value} setValue={setValue} />
      </div>
      <AppTable
        data={value == "online" ? offerOnlineTableData : offerInPersonTableData}
        tableHeader={offerTableHeader}
        renderItem={({ item, key, rowIndex, data }) => {
          const dataItem = data[rowIndex];
          if (key === "status") {
            return <ShowStatus status={dataItem.status} />;
          }
          if (key === "select") {
            return (
              <HiDotsHorizontal
                fontSize={24}
                cursor={"pointer"}
                onClick={() => router.push(`/offer-management/offer-details`)}
              />
            );
          }

          return item || "";
        }}
      />
      <Pagination setCurrentPage={setPage} currentPage={page} />
    </BorderWrapper>
  );
};

export default OfferManagementTemplate;

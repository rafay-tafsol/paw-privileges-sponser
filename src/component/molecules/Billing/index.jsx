import React from "react";
import classes from "./Billing.module.css";
import TopHeader from "@/component/molecules/TopHeader";
import DropDown from "@/component/molecules/DropDown/DropDown";
import AppTable from "@/component/organisms/AppTable/AppTable";
import { HiDotsHorizontal } from "react-icons/hi";
import { billingTableHeader } from "@/developmentContent/developmentData/TableHeader";
import { billingDataRecords } from "@/developmentContent/developmentData/TableBody";
import moment from "moment";
import Image from "next/image";
import { capitalizeFirstLetter, mergeClass } from "@/resources/utils/helper";
import Pagination from "../PaginationComponent";

const Billing = () => {
  return (
    <>
      <TopHeader showSearch />
      <div className="mt14">
        <AppTable
          data={billingDataRecords}
          tableHeader={billingTableHeader}
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
              return <p>{moment(dataItem.date).format("DD/MM/YYYY")}</p>;
            }
            if (key === "status") {
              return (
                <div
                  className={mergeClass(
                    classes?.status,
                    `${
                      dataItem?.status === "paid"
                        ? classes?.paidStatus
                        : classes?.pendingStatus
                    }`
                  )}
                >
                  <span
                    className={mergeClass(
                      classes?.statusSpan,
                      `${
                        dataItem?.status === "paid"
                          ? classes?.paidSpan
                          : classes?.pendingSpan
                      }`
                    )}
                  ></span>
                  {capitalizeFirstLetter(dataItem?.status)}
                </div>
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
                    router.push(
                      `/user-management/${dataItem.id || 1}?user=${value}`
                    )
                  }
                />
              );
            }

            return item || "";
          }}
        />
        <Pagination />
      </div>
    </>
  );
};

export default Billing;

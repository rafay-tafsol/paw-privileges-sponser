import React from "react";
import classes from "./DashboardWrapper.module.css";
import Header from "@/component/atoms/Header/Header";
import { Container } from "react-bootstrap";
import { mergeClass } from "@/resources/utils/helper";
import Sidebar from "@/component/molecules/SIdebar/SIdebar";

const DashboardWrapper = ({ children }) => {
  return (
    <div className={classes.main}>
      {/* /// top header */}
      <Header />
      {/* //// medium */}
      <div className={classes.mainContent}>
        {/* //// sidebar */}
        <Sidebar />
        {/* main content */}
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardWrapper;

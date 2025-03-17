import StatesCard from "@/component/atoms/StatesCard";
import { Col, Row } from "react-bootstrap";
import classes from "./Dashboard.module.css";
import BorderWrapper from "@/component/atoms/BorderWrapper";
import SubscriptionRevenue from "@/component/atoms/SubscriptionRevenue";
import {
  offerAnalytics,
  revenueGraph,
} from "@/developmentContent/developmentData/DummyData";
import { mergeClass } from "@/resources/utils/helper";
import LineChart from "@/component/molecules/Chart";
import OfferRange from "@/component/atoms/OfferRange";
import DropDown from "@/component/molecules/DropDown/DropDown";
import Button from "@/component/atoms/Button";
import { PiDownloadBold } from "react-icons/pi";

const DashboardTemplate = () => {
  return (
    <div className={classes.dashboard}>
      <div className={classes.top}>
        {/* left */}
        <div className={classes.left}>
          <Row>
            <Col md="6">
              <StatesCard />
            </Col>
            <Col md="6">
              <StatesCard />
            </Col>
            <Col md="6">
              <StatesCard />
            </Col>
            <Col md="6">
              <StatesCard />
            </Col>
          </Row>
        </div>
        {/* right */}
        <div className={classes.right}>
          <BorderWrapper containerClass={classes.borderWrapper}>
            <h4 className={mergeClass(`h1`)}>Offer Analytics</h4>
            <div className={classes.progressBarDiv}>
              {offerAnalytics?.map((item, index) => (
                <OfferRange item={item} key={index} />
              ))}
            </div>
          </BorderWrapper>
        </div>
      </div>
      {/* bottom */}
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
  );
};

export default DashboardTemplate;

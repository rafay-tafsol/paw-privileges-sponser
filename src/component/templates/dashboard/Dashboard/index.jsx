import StatesCard from "@/component/atoms/StatesCard";
import { Col, Row } from "react-bootstrap";
import classes from "./Dashboard.module.css";

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
        {/* <div className={classes.right}>
          <BorderWrapper>
            <h4 className={mergeClass(`h1`)}>Revenue</h4>
            <div className={mergeClass("flexGap",classes.type)}>
              {revenueGraph?.map((item) => {
                return <SubscriptionRevenue item={item} key={item?._id} />;
              })}
            </div>
            <div className={classes?.LineChart}>
            <LineChart />
            </div>
          </BorderWrapper>
        </div> */}
      </div>
      {/* <div className={classes.table}>
        <BorderWrapper>
          <h4 className={mergeClass(`h1`)}>Sponsor</h4>
          <AppTable
            tableHeader={sponsorTableHeader}
            data={SponsorTableData}
            renderItem={({ item, key, rowIndex }) => {
              const dataItem = SponsorTableData[rowIndex];
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
              if (key === "createdAt") {
                return <p>{moment(dataItem.createdAt).format("DD/MM/YYYY")}</p>;
              }
              if (key === "select") {
                return (
                  <HiDotsHorizontal
                    fontSize={24}
                    cursor={"pointer"}
                    // onClick={() =>
                    //   router.push(`/customer/dispute/${dataItem._id}`)
                    // }
                  />
                );
              }

              return item || "";
            }}
          />
        </BorderWrapper>
      </div> */}
    </div>
  );
};

export default DashboardTemplate;

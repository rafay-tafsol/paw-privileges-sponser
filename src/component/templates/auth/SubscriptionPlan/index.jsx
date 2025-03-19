import TextComponent from "@/component/atoms/TextComponent/TextComponent";
import SubscriptionCard from "@/component/molecules/SubscriptionCard";
import { subscriptionCardData } from "@/developmentContent/developmentData/SubscritionPageData/Subscription";
import { Col, Row } from "react-bootstrap";

const SubscriptionPlanTemplate = () => {
  return (
    <>
      <TextComponent title={"Subscription Plan"} />
      <div className={"flexColGap"}>
        <Row>
          {subscriptionCardData?.map((data, index) => (
            <Col md={12} className="my-2" key={index}>
              <SubscriptionCard
                data={data}
                isPrimaryBtn={true}
                label={"Buy Now"}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default SubscriptionPlanTemplate;

import { Fragment } from "react";
import { Col, Card, Image } from "react-bootstrap";

const Data_analytics = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/1e218218-8984-4d15-a1cf-ac38511d77cc/public_uffrl",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/google-data-analytics-certificate.png"
      />
    </Fragment>
  );
};

export default Data_analytics;

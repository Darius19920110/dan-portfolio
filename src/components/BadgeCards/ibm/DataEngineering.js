import { Fragment } from "react";
import { Col, Card, Image } from "react-bootstrap";

const DataEngineering = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/132a3b22-7ff7-4e27-bbe6-a3956dd24540/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/data-engineering-essentials.png"
      />
    </Fragment>
  );
};

export default DataEngineering;

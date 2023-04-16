import { Fragment } from "react";
import { Col, Card, Image } from "react-bootstrap";

const DatabaseSql = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/30466b01-bde7-4767-8ebc-01d016e45295/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/databases-and-sql-for-data-science.png"
      />
    </Fragment>
  );
};

export default DatabaseSql;

import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const GoogleData = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open(
              "https://coursera.org/verify/professional-cert/XWBKTLB2TLHY",
              "_blank"
            );
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/google_data_analytics.jpg"
          />
          <Card.Body>
            <Card.Title>Google Data Analytics</Card.Title>
            <Card.Text>Google</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default GoogleData;

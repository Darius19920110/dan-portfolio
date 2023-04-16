import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const BusinessAnalytics = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://confirm.udacity.com/ARCCAEPH", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img variant="top" src="images/certs/business_analytics.jpg" />
          <Card.Body>
            <Card.Title>Business Analytics</Card.Title>
            <Card.Text>Udacity</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BusinessAnalytics;

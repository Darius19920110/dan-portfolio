import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const DescriptiveStatistics = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://confirm.udacity.com/ESPKZJX3", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/descriptive_statistics_certificate.jpg"
          />
          <Card.Body>
            <Card.Title>Descriptive Statistics</Card.Title>
            <Card.Text>Udacity</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default DescriptiveStatistics;

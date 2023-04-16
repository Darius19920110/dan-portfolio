import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const DataEngineering = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://coursera.org/verify/2MMS7HYQZGPA", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/introduction_to_data_engineering.jpg"
          />
          <Card.Body>
            <Card.Title>Introduction to Data Engineering</Card.Title>
            <Card.Text>IBM</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default DataEngineering;

import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const Introduction_to_data_science = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://coursera.org/verify/APHMZ7TJ4U9E", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/introduction_to_data_science.jpg"
          />
          <Card.Body>
            <Card.Title>Introduction to Data Science in Python</Card.Title>
            <Card.Text>University of Michigan</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Introduction_to_data_science;

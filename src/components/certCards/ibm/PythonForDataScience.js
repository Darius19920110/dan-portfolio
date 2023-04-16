import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const PythonForDataScience = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://coursera.org/verify/H6WV33NA2Z87", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/python_for_data_science_ai_development.jpg"
          />
          <Card.Body>
            <Card.Title>Python for Data Science, AI & Development</Card.Title>
            <Card.Text>IBM</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PythonForDataScience;

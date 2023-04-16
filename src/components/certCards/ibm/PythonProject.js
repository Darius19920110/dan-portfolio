import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const PythonProject = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://coursera.org/verify/PCCTHDHCCHFJ", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/python_project_for_data_engineering.jpg"
          />
          <Card.Body>
            <Card.Title>Python Project for Data Engineering</Card.Title>
            <Card.Text>IBM</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PythonProject;

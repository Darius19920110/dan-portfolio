import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const RelationalDb = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://coursera.org/verify/VLKZENPXTZFJ", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/relational_database_administration.jpg"
          />
          <Card.Body>
            <Card.Title>Relational Database Administration (DBA)</Card.Title>
            <Card.Text>IBM</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default RelationalDb;

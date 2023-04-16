import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const Rdbms = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://coursera.org/verify/ZKRKY3G22MX3", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/introduction_to_relational_databases.jpg"
          />
          <Card.Body>
            <Card.Title>
              Introduction to Relational Databases (RDBMS)
            </Card.Title>
            <Card.Text>IBM</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Rdbms;

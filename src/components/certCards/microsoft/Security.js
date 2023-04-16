import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const Security = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open(
              "https://learn.microsoft.com/en-gb/users/danielmeszaros-4661/transcript/md48txznm8pk6rv",
              "_blank"
            );
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/security_fundamentals.jpg"
          />
          <Card.Body>
            <Card.Title>Security Fundamentals</Card.Title>
            <Card.Text>Microsoft</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Security;

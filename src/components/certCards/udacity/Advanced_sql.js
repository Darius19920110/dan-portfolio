import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const Advanced_sql = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://confirm.udacity.com/627V9ZWC", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img variant="top" src="images/certs/advanced_sql.jpg" />
          <Card.Body>
            <Card.Title>Advanced SQL</Card.Title>
            <Card.Text>Udacity</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Advanced_sql;

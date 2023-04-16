import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const SqlPartI = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://confirm.udacity.com/EZUQM6DM", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img variant="top" src="images/certs/sql_partI.jpg" />
          <Card.Body>
            <Card.Title>
              SQL <br /> Part I
            </Card.Title>
            <Card.Text>Udacity</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SqlPartI;

import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const SqlPartII = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://confirm.udacity.com/WYJQDPJC", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img variant="top" src="images/certs/sql_partII.jpg" />
          <Card.Body>
            <Card.Title>
              SQL <br /> Part II
            </Card.Title>
            <Card.Text>Udacity</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SqlPartII;

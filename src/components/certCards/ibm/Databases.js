import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const Databases = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://coursera.org/verify/BDD94CBE4KK5", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/databases_and_sql_for_data_science_with_python.jpg"
          />
          <Card.Body>
            <Card.Title>
              Databases and SQL for Data Science with Python
            </Card.Title>
            <Card.Text>IBM</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Databases;

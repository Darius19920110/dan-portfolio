import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const SpreadSheetsPartII = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://confirm.udacity.com/GCYMQD9S", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/analytics_with_spreadsheets_partII.jpg"
          />
          <Card.Body>
            <Card.Title>
              Analytics with Spreadsheets <br /> Part II
            </Card.Title>
            <Card.Text>Udacity</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SpreadSheetsPartII;

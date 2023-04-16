import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const PythonAssociate = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://verify.openedg.org/", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img variant="top" src="images/certs/python_associate.jpg" />
          <Card.Body>
            <Card.Title>PCAP - Python Associate</Card.Title>
            <Card.Text>
              OpenEDG <br />
              Certification Code: 4kmt.j7eQ.mCfj
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PythonAssociate;

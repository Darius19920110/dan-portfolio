import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const Linux = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://coursera.org/verify/CNKVC7SQ29HH", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/handson_introduction_to_linux_commands_and_shell_scripting.jpg"
          />
          <Card.Body>
            <Card.Title>
              Hands-on Introduction to Linux Commands and Shell Scripting
            </Card.Title>
            <Card.Text>IBM</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Linux;

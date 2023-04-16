import { Fragment, useState } from "react";
import {
  Col,
  Card,
  Modal,
  ListGroup,
  Image,
  Badge,
  Accordion,
  Row,
} from "react-bootstrap";

function Fun_data_man_modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fundamentals of Data Manipulation with Python
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-4 mt-3">
          <div className="left-border">
            <h5>
              <strong>Objectives</strong>
            </h5>
            <ListGroup as="ol" variant="flush" className="f-sm">
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Load, manipulate, and select data using numpy, as well as
                  understand the fundamental data types in the numpy ecosystem
                </strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Show the benefits of vectorization with numpy data
                </strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>Apply regular expressions to string data</strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Demonstrate, at a high level, how regular expression pattern
                  matching is expressed
                </strong>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <Accordion flush alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>
                <strong>PART A</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Find a list of all of the names in the following string using
                regex.
              </p>
              <Image
                src="images/assignments/module_1/week_1/part_a.png"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>
                <strong>PART B</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                The dataset file{" "}
                <strong>
                  <a
                    href="https://storage.googleapis.com/projects01/assignments/module_1/week_1/grades.txt"
                    target="_blank"
                  >
                    grades.txt
                  </a>
                </strong>{" "}
                contains a line separated list of people with their grade in a
                class. Create a regex to generate a list of just those students
                who received a B in the course.
              </p>
              <Image
                src="images/assignments/module_1/week_1/part_b.png"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h4>
                <strong>PART C</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Consider the standard web log file{" "}
                <strong>
                  <a
                    href="https://storage.googleapis.com/projects01/assignments/module_1/week_1/logdata.txt"
                    target="_blank"
                  >
                    logdata.txt.
                  </a>
                </strong>
                This file records the access a user makes when visiting a web
                page. Each line of the log has the following items:
              </p>
              <ListGroup as="ol" numbered variant="flush" className="f-sm">
                <ListGroup.Item as="li" className="pb-1 pt-1">
                  a host (e.g., '146.204.224.152')
                </ListGroup.Item>
                <ListGroup.Item as="li" className="pb-1 pt-1">
                  a user_name (e.g., 'feest6811'{" "}
                  <strong>
                    note: sometimes the user name is missing! In this case, use
                    '-' as the value for the username.
                  </strong>
                  )
                </ListGroup.Item>
                <ListGroup.Item as="li" className="pb-1 pt-1">
                  the time a request was made (e.g., '21/Jun/2019:15:45:24
                  -0700')
                </ListGroup.Item>
                <ListGroup.Item as="li" className="pb-1 pt-1">
                  the post request type (e.g., 'POST /incentivize HTTP/1.1'{" "}
                  <strong>note: not everything is a POST!</strong>)
                </ListGroup.Item>
              </ListGroup>
              <p className="f-sm mt-3">
                Your task is to convert this into a list of dictionaries, where
                each dictionary looks like the following:
              </p>

              <Row className="m-0 row-height">
                <Col md={2}>
                  <p className="f-sm">example_dict = </p>
                </Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm mb-0">&#123; "host":"146.204.224.152",</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm pl-2">"user_name":"feest6811",</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm pl-2">
                    "time":"21/Jun/2019:15:45:24 -0700",
                  </p>
                </Col>
              </Row>
              <Row className="m-0">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm pl-2">
                    "request":"POST /incentivize HTTP/1.1"&#125;
                  </p>
                </Col>
              </Row>
              <Image
                src="images/assignments/module_1/week_1/part_c.png"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </Modal>
  );
}

const Fun_data_man = () => {
  const [fun_data_man_ModalShow, setFun_data_man_ModalShow] = useState(false);
  return (
    <Fragment>
      <Fun_data_man_modal
        show={fun_data_man_ModalShow}
        onHide={() => setFun_data_man_ModalShow(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setFun_data_man_ModalShow(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/assignments/module_1/week_1/regex_profile.jpg"
          />
          <Card.Body>
            <Card.Title>
              Fundamentals of Data Manipulation with Python
            </Card.Title>
            <Card.Text>
              <Badge pill bg="success">
                Regular Expressions
              </Badge>{" "}
              <Badge pill bg="success">
                Python
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Fun_data_man;

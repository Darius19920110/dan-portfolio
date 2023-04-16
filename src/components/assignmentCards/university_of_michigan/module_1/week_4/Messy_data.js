import { Fragment, useState, useRef } from "react";
import {
  Col,
  Card,
  Modal,
  ListGroup,
  Image,
  Badge,
  Row,
  Accordion,
} from "react-bootstrap";

function Messy_dataModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Answering Questions with Messy Data
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
                  Demonstrate basic statistical test knowledge on dataframes in
                  pandas
                </strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Recognize other kinds of structured data such as networks,
                  graphs, natural language
                </strong>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="mb-4 mt-3">
          <div className="left-border">
            <h5>
              <strong>Description</strong>
            </h5>
            <p className="f-sm">
              In this assignment you must read in a file of metropolitan regions
              and associated sports teams from{" "}
              <strong>
                <a
                  href="https://storage.googleapis.com/projects01/assignments/module_1/week_4/wikipedia_data.html"
                  target="_blank"
                >
                  wikipedia_data.html
                </a>
              </strong>{" "}
              and answer some questions about each metropolitan region. Each of
              these regions may have one or more teams from the "Big 4": NFL
              (football,{" "}
              <strong>
                <a
                  href="https://storage.googleapis.com/projects01/assignments/module_1/week_4/nfl.csv"
                  target="_blank"
                >
                  Download nfl.csv
                </a>
              </strong>
              ), MLB (baseball,{" "}
              <strong>
                <a
                  href="https://storage.googleapis.com/projects01/assignments/module_1/week_4/mlb.csv"
                  target="_blank"
                >
                  Download mlb.csv
                </a>
              </strong>
              ), NBA (basketball,{" "}
              <strong>
                <a
                  href="https://storage.googleapis.com/projects01/assignments/module_1/week_4/nba.csv"
                  target="_blank"
                >
                  Download nba.csv
                </a>
              </strong>{" "}
              or NHL (hockey,{" "}
              <strong>
                <a
                  href="https://storage.googleapis.com/projects01/assignments/module_1/week_4/nhl.csv"
                  target="_blank"
                >
                  Download nhl.csv
                </a>
              </strong>
              ). Please keep in mind that all questions are from the perspective
              of the metropolitan region, and that this file is the "source of
              authority" for the location of a given sports team. Thus teams
              which are commonly known by a different area (e.g. "Oakland
              Raiders") need to be mapped into the metropolitan region given
              (e.g. San Francisco Bay Area). This will require some human data
              understanding outside of the data you've been given (e.g. you will
              have to hand-code some names, and might need to google to find out
              where teams are)!
            </p>
            <p className="f-sm">
              For each sport I would like you to answer the question:{" "}
              <strong>
                what is the win/loss ratio's correlation with the population of
                the city it is in?
              </strong>{" "}
              Win/Loss ratio refers to the number of wins over the number of
              wins plus the number of losses. Remember that to calculate the
              correlation with <strong>pearsonr</strong>, so you are going to
              send in two ordered lists of values, the populations from the
              wikipedia_data.html file and the win/loss ratio for a given sport
              in the same order. Average the win/loss ratios for those cities
              which have multiple teams of a single sport. Each sport is worth
              an equal amount in this assignment (20%*4=80%) of the grade for
              this assignment. You should only use data{" "}
              <strong>from year 2018</strong> for your analysis -- this is
              important!
            </p>
          </div>
        </div>
        <div className="mb-4 mt-3">
          <div className="left-border">
            <h5>
              <strong>Notes</strong>
            </h5>
            <p className="f-sm">
              I created some handy functions to reuse it and follow dry code
              concepts because all four questions are similar.
              <br /> All codes are written in Jupyter Notebook.
            </p>
          </div>
        </div>

        <Accordion flush alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>
                <strong>Functions</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <Image
                src="images/assignments/module_1/week_4/functions_1.png"
                fluid
              />
              <Image
                src="images/assignments/module_1/week_4/functions_2.png"
                fluid
              />
              <Image
                src="images/assignments/module_1/week_4/functions_3.png"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>
                <strong>Question 1</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                For this question, calculate the win/loss ratio's correlation
                with the population of the city it is in for the{" "}
                <strong>NHL</strong> using <strong>2018 </strong>
                data.
              </p>
              <Image
                src="images/assignments/module_1/week_4/question_1.png"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h4>
                <strong>Question 2</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                For this question, calculate the win/loss ratio's correlation
                with the population of the city it is in for the{" "}
                <strong>NBA</strong> using <strong>2018</strong> data.
              </p>
              <Image
                src="images/assignments/module_1/week_4/question_2.png"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h4>
                <strong>Question 3</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                For this question, calculate the win/loss ratio's correlation
                with the population of the city it is in for the{" "}
                <strong>MLB</strong> using <strong>2018</strong> data.
              </p>
              <Image
                src="images/assignments/module_1/week_4/question_3.png"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h4>
                <strong>Question 4</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                For this question, calculate the win/loss ratio's correlation
                with the population of the city it is in for the{" "}
                <strong>NFL</strong> using <strong>2018</strong> data.
              </p>
              <Image
                src="images/assignments/module_1/week_4/question_4.png"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </Modal>
  );
}

const Messy_data = () => {
  const [messy_dataModalShow, setMessy_dataModalShow] = useState(false);
  return (
    <Fragment>
      <Messy_dataModal
        show={messy_dataModalShow}
        onHide={() => setMessy_dataModalShow(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setMessy_dataModalShow(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/assignments/module_1/week_4/profile.jpeg"
          />
          <Card.Body>
            <Card.Title>Answering Questions with Messy Data</Card.Title>
            <Card.Text>
              <Badge pill bg="success">
                Pandas
              </Badge>{" "}
              <Badge pill bg="success">
                Win/Loss ratio
              </Badge>{" "}
              <Badge pill bg="success">
                Correlation
              </Badge>
              <Badge pill bg="success">
                Scipy.stats
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Messy_data;

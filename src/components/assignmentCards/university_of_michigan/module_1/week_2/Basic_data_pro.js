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

function Basic_data_proModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Basic Data Processing with Pandas
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
                  Demonstrate how the series class builds on top of numpy
                  datatypes
                </strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>Remember that the series class is a numpy array</strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Demonstrate the basics of how to query a series structure
                </strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Remember the dataframe as the principle data science structure
                </strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>Define the various features of a dataframe</strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Demonstrate what an axis is in relation to dataframes
                </strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Demonstrate the difference between the series and dataframe
                  classes
                </strong>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="pt-1 pb-1">
                <strong>
                  Create and use pandas DataFrames to represent raw data
                </strong>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div className="mb-4 mt-3">
          <div className="left-border">
            <h4>
              <strong>Introduction</strong>
            </h4>
            <p className="f-sm">
              For this assignment you'll be looking at 2017 data on
              immunizations from the CDC. Your csv data file for this assignment
              can be downloaded from{" "}
              <strong>
                <a
                  href="https://storage.googleapis.com/projects01/assignments/module_1/week_2/NISPUF17.csv"
                  target="_blank"
                >
                  HERE.
                </a>
              </strong>{" "}
              A data users guide for this, which you'll need to map the
              variables in the data to the questions being asked, is available{" "}
              <strong>
                <a
                  href="https://storage.googleapis.com/projects01/assignments/module_1/week_2/NIS-PUF17-DUG.pdf"
                  target="_blank"
                >
                  HERE.
                </a>
              </strong>
            </p>
          </div>
        </div>

        <Accordion flush alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>
                <strong>Question 1</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Write a function called <strong>proportion_of_education</strong>{" "}
                which returns the proportion of children in the dataset who had
                a mother with the education levels equal to less than high
                school (&lt;12), high school (12), more than high school but not
                a college graduate (&gt;12) and college degree.
              </p>
              <p className="f-sm">
                <i>
                  This function should return a dictionary in the form of (use
                  the correct numbers, do not round numbers):
                </i>
              </p>
              <Row className="m-0 row-height">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm mb-0">
                    &#123; "less than high school":0.2,
                  </p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm pl-2">"high school":0.4,</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm pl-2">
                    "more than high school but not college":0.2,
                  </p>
                </Col>
              </Row>
              <Row className="m-0">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm pl-2">"college":0.2&#125;</p>
                </Col>
              </Row>
              <Image src="images/assignments/module_1/week_2/q_1.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>
                <strong>Question 2</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Let's explore the relationship between being fed breastmilk as a
                child and getting a seasonal influenza vaccine from a healthcare
                provider. Return a tuple of the average number of influenza
                vaccines for those children we know received breastmilk as a
                child and those who know did not.
              </p>

              <p className="f-sm">
                <i>
                  This function should return a tuple in the form, use the
                  correct numbers:
                </i>
              </p>
              <p className="f-sm ml-4">(2.5, 0.1)</p>

              <Image src="images/assignments/module_1/week_2/q_2.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h4>
                <strong>Question 3</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                It would be interesting to see if there is any evidence of a
                link between vaccine effectiveness and sex of the child.
                Calculate the ratio of the number of children who contracted
                chickenpox but were vaccinated against it (at least one
                varicella dose) versus those who were vaccinated but did not
                contract chicken pox. Return results by sex.
              </p>
              <p className="f-sm">
                <i>
                  This function should return a dictionary in the form of (use
                  the correct numbers):
                </i>
              </p>
              <Row className="m-0 row-height">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm mb-0">&#123; "male":0.2,</p>
                </Col>
              </Row>
              <Row className="m-0">
                <Col md={2}></Col>
                <Col md={10} className="pl-0">
                  <p className="f-sm pl-2">"female":0.4&#125;</p>
                </Col>
              </Row>
              <Image src="images/assignments/module_1/week_2/q_3.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h4>
                <strong>Question 4</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                A correlation is a statistical relationship between two
                variables. If we wanted to know if vaccines work, we might look
                at the correlation between the use of the vaccine and whether it
                results in prevention of the infection or disease [1]. In this
                question, you are to see if there is a correlation between
                having had the chicken pox and the number of chickenpox vaccine
                doses given (varicella).
              </p>
              <p className="f-sm">
                Some notes on interpreting the answer. The{" "}
                <strong>had_chickenpox_column</strong> is either{" "}
                <strong>1</strong> (for yes) or <strong>2</strong> (for no), and
                the <strong>num_chickenpox_vaccine_column</strong> is the number
                of doses a child has been given of the varicella vaccine. A
                positive correlation (e.g., <strong>corr &gt; 0</strong>) means
                that an increase in <strong>had_chickenpox_column</strong>{" "}
                (which means more no’s) would also increase the values of
                <strong>num_chickenpox_vaccine_column</strong> (which means more
                doses of vaccine). If there is a negative correlation (e.g.,{" "}
                <strong>corr &lt; 0</strong>), it indicates that having had
                chickenpox is related to an increase in the number of vaccine
                doses.
              </p>
              <p className="f-sm">
                Also, <strong>pval</strong> is the probability that we observe a
                correlation between <strong>had_chickenpox_column</strong> and
                <strong>num_chickenpox_vaccine_column</strong> which is greater
                than or equal to a particular value occurred by chance. A small
                pval means that the observed correlation is highly unlikely to
                occur by chance. In this case, <strong>pval</strong> should be
                very small (will end in <strong>e-18</strong> indicating a very
                small number).
              </p>
              <p className="f-sm">
                [1] This isn’t really the full picture, since we are not looking
                at when the dose was given. It’s possible that children had
                chickenpox and then their parents went to get them the vaccine.
                Does this dataset have the data we would need to investigate the
                timing of the dose?
              </p>
              <Image src="images/assignments/module_1/week_2/q_4.png" fluid />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </Modal>
  );
}

const Basic_data_pro = () => {
  const [basic_data_proModalShow, setBasic_data_proModalShow] = useState(false);
  return (
    <Fragment>
      <Basic_data_proModal
        show={basic_data_proModalShow}
        onHide={() => setBasic_data_proModalShow(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setBasic_data_proModalShow(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/assignments/module_1/week_2/profile.jpeg"
          />
          <Card.Body>
            <Card.Title>Basic Data Processing with Pandas</Card.Title>
            <Card.Text>
              <Badge pill bg="success">
                Pandas
              </Badge>{" "}
              <Badge pill bg="success">
                Numpy
              </Badge>{" "}
              <Badge pill bg="success">
                Scipy
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

export default Basic_data_pro;

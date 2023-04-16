import { Fragment, useState } from "react";
import {
  Col,
  Row,
  Card,
  Modal,
  ListGroup,
  Image,
  Accordion,
} from "react-bootstrap";

function UsCensus_modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          US Census Demographic Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="left-border">
          <h5>About this project</h5>
          <p className="f-sm">
            In this project, I'll create visualizations to reveal insights from
            a data set. I will create data visualizations that tell a story or
            highlight patterns in the data set. My work will be a reflection of
            the theory and practice of data visualization, such as visual
            encodings, design principles, and effective communication. <br />
            <strong>
              <p className="mt-3 f-sm">
                The full PDF report can be found{" "}
                <a
                  href="https://storage.googleapis.com/projects01/projects/us_census_demographic_data/US%20Census%20Details.pdf"
                  target="_blank"
                >
                  HERE.
                </a>
              </p>
              <p className="mt-3 f-sm">
                The County Data can be downloaded from{" "}
                <a
                  href="https://storage.googleapis.com/projects01/projects/us_census_demographic_data/acs2015-county-data.csv"
                  target="_blank"
                >
                  HERE.
                </a>
              </p>
              <p className="mt-3 f-sm">
                The full Tableau project can be found and download from{" "}
                <a
                  href="https://public.tableau.com/app/profile/daniel.meszaros/viz/USCensus_16765565116060/USCensus?publish=yes"
                  target="_blank"
                >
                  HERE.
                </a>
              </p>
            </strong>
          </p>
        </div>
        <div className="left-border mt-4">
          <h5>Project Description</h5>
          <p className="f-sm">
            I am going to work with US census Demographic Data. This data comes
            from a Kaggle dataset, it includes the census data for all counties
            in 2015.{" "}
            <strong>
              I am going to answer three questions with data visualisations in
              Tableau. <br />
              <br />
              Please find the interactive dashboard and the full PDF report of
              this project from the links above. <br />
            </strong>
            (Download the tableau project file for a better user experience.{" "}
            <strong>
              I am going to insert only screenshots here for each task.
            </strong>
            )
            <br />
          </p>
        </div>
        <div className="left-border mt-4">
          <h5>Background</h5>
          <p className="f-sm">
            The idea of this project comes from UDACITY. They provided the data
            and tasks for this project. All of the work is mine and the third
            question comes from me.
          </p>
        </div>

        <Accordion flush alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>
                <strong>1. Which states have the best transportation?</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <Image
                src="images/projects/tableau/us_census/transportation.jpg"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>
                <strong>
                  2. How does income and poverty look across America?
                </strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <Image src="images/projects/tableau/us_census/income.jpg" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className="pt-3 pb-3">
              <h4>
                <strong>
                  3. Are there any relations between the unemployment rate and
                  ethnicity?
                </strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <Image
                src="images/projects/tableau/us_census/ethnicity.jpg"
                fluid
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </Modal>
  );
}

const UsCensus = () => {
  const [usCensusModalShow, setUsCensus] = useState(false);
  return (
    <Fragment>
      <UsCensus_modal
        show={usCensusModalShow}
        onHide={() => setUsCensus(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setUsCensus(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/projects/tableau/us_census/US_Census.jpeg"
          />
          <Card.Body>
            <Card.Title>US Census Demographic Data</Card.Title>
            <Card.Text>Tableau</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default UsCensus;

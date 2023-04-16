import { Fragment, useState } from "react";
import { Col, Card, Modal, ListGroup, Image } from "react-bootstrap";

function Deforestation_modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Deforestation Exploration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="left-border">
          <h5>About this project</h5>
          <p className="f-sm">
            I will work for a fictional company, ForestQuery, a non-profit
            organization, on a mission to reduce deforestation around the world
            and which raises awareness about this important environmental topic.
            The company asked me to create a report of my findings. <br />
            <strong>
              <p className="mt-3 f-sm">
                The PDF report with the SQL queries I used, can be found{" "}
                <a
                  href="https://storage.googleapis.com/projects01/projects/Deforestation%20Exploration/deforestation-exploration-project.pdf"
                  target="_blank"
                >
                  HERE.
                </a>
                <br /> All sentence in bold are my answers in the PDF report.
              </p>
            </strong>
          </p>
        </div>
        <div className="left-border mt-4">
          <h5>Background</h5>
          <p className="f-sm">
            The idea of this project comes from UDACITY. They provided a
            template and I will answer these questions while query the database
            in UDACITY IDE environment. I will use 3 SQL tables for this task
          </p>
          <ListGroup as="ol" numbered variant="flush" className="f-sm">
            <ListGroup.Item as="li">forest_area</ListGroup.Item>
            <ListGroup.Item as="li">land_area</ListGroup.Item>
            <ListGroup.Item as="li">regions</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="left-border mt-4">
          <h5>Skills I will use</h5>
          <ListGroup as="ol" variant="flush" className="f-sm">
            <ListGroup.Item as="li">
              SQL to answer business questions
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="left-border mt-4">
          <h5>Scenario</h5>
          <p className="f-sm">
            My executive director and her leadership team members are looking to
            understand which countries and regions around the world seem to have
            forests that have been shrinking in size, and also which countries
            and regions have the most significant forest area, both in terms of
            amount and percent of total area. The hope is that these findings
            can help inform initiatives, communications, and personnel
            allocation to achieve the largest impact with the precious few
            resources that the organization has at its disposal. I have been
            able to find tables of data online dealing with forestation as well
            as total land area and region groupings, and I have brought these
            tables together onto a database that I would like to query to answer
            some of the most important questions in preparation for a meeting
            with the ForestQuery executive team coming up in a few days.
          </p>
        </div>
        <div className="left-border mt-4 p-minus">
          <h5>Preparation</h5>
          <p className="f-sm">
            I will use VIEW to JOIN all 3 tables for easier calculations.
          </p>
          <Image
            src="images/projects/sql/deforestation_exploration/view_sql.png"
            fluid={true}
            className="img-sm"
          />
        </div>
        <div className="mt-5">
          <h4>
            <strong>PART 1 - Global Situation</strong>
          </h4>
          <ListGroup as="ol" variant="flush" className="f-sm" numbered>
            <ListGroup.Item as="li" className="pb-0">
              What was the total forest area (in sq km) of the world in 1990?{" "}
              <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>41282694.9</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              What was the total forest area (in sq km) of the world in 2016?{" "}
              <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>39958245.9</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              What was the change (in sq km) in the forest area of the world
              from 1990 to 2016? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>1,324,449</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              What was the percent change in forest area of the world between
              1990 and 2016? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>3.21 %</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              If you compare the amount of forest area lost between 1990 and
              2016, to which country's total area in 2016 is it closest to?{" "}
              <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Australia</strong>
              </p>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="mt-5">
          <h4>
            <strong>PART 2 - Regional Outlook</strong>
          </h4>
          <ListGroup as="ol" variant="flush" className="f-sm" numbered>
            <ListGroup.Item as="li" className="pb-0">
              What was the percent forest of the entire world in 2016? Which
              region had the HIGHEST percent forest in 2016, and which had the
              LOWEST, to 2 decimal places? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Entire world = 31.38%</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>highest = 46.16% Latin America & Caribbean</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>lowest = 2.07% Middle East & North Africa</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0">
              What was the percent forest of the entire world in 1990? Which
              region had the HIGHEST percent forest in 1990, and which had the
              LOWEST, to 2 decimal places? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Entire world = 32.42%</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>highest = 51.03% Latin America & Caribbean</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>lowest = 1.78% Middle East & North Africa</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0">
              Based on the table you created, which regions of the world
              DECREASED in forest area from 1990 to 2016? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Sub-Saharan Africa 0.31% to 0.29%</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Latin America & Caribbean 0.51% to 0.46%</strong>
              </p>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="mt-5">
          <h4>
            <strong>PART 3 - Country-Level Detail</strong>
          </h4>
          <ListGroup as="ol" variant="flush" className="f-sm" numbered>
            <ListGroup.Item as="li" className="pb-0">
              Which 5 countries saw the largest amount decrease in forest area
              from 1990 to 2016? What was the difference in forest area for
              each? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Brazil - 541,510</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Indonesia - 282,193.98</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Myanmar - 107,234</strong>
              </p>
              <p className="ml-3 mb-0 f-sm">
                <strong>Nigeria - 106,506</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Tanzania - 102,320</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0">
              Which 5 countries saw the largest percent decrease in forest area
              from 1990 to 2016? What was the percent change to 2 decimal places
              for each? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Togo - 75.45 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Nigeria - 61.80 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Uganda - 59.13 %</strong>
              </p>
              <p className="ml-3 mb-0 f-sm">
                <strong>Mauritania - 46.75 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Honduras - 45.03 %</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0">
              If countries were grouped by percent forestation in quartiles,
              which group had the most countries in it in 2016? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>1th quartile - 85 countries</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>2th quartile - 72 countries</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>3th quartile - 38 countries</strong>
              </p>
              <p className="ml-3 mb-0 f-sm">
                <strong>4th quartile - 9 countries</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0">
              List all of the countries that were in the 4th quartile (percent
              forest > 75%) in 2016. <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Solomon Islands East Asia & Pacific - 77.86 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>American Samoa East Asia & Pacific - 87.50%</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>
                  Micronesia, Fed. Sts. East Asia & Pacific - 91.86 %
                </strong>
              </p>
              <p className="ml-3 mb-0 f-sm">
                <strong>Palau East Asia & Pacific - 87.61 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Lao PDR East Asia & Pacific - 82.11 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Guyana Latin America & Caribbean - 83.90 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Suriname Latin America & Caribbean - 98.26 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Gabon Sub-Saharan Africa - 90.04 %</strong>
              </p>{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>Seychelles Sub-Saharan Africa - 88.41 %</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0">
              How many countries had a percent forestation higher than the
              United States in 2016? <br />{" "}
              <p className="ml-3 mb-0 f-sm">
                <strong>94 countries</strong>
              </p>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const Deforestation = () => {
  const [deforestationModalShow, setDeforestationModalShow] = useState(false);
  return (
    <Fragment>
      <Deforestation_modal
        show={deforestationModalShow}
        onHide={() => setDeforestationModalShow(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setDeforestationModalShow(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/projects/sql/deforestation_exploration/profile.png"
          />
          <Card.Body>
            <Card.Title>Deforestation Exploration</Card.Title>
            <Card.Text>SQL</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Deforestation;

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

function Advanced_data_proModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Advanced Data Processing with Pandas
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
                  Create and use pandas DataFrames to represent raw data.
                </strong>
              </ListGroup.Item>
            </ListGroup>
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
                Load the energy data from the file{" "}
                <strong>
                  <a href="https://storage.googleapis.com/projects01/assignments/module_1/week_3/Energy%20Indicators.xls">
                    Energy Indicators.xls
                  </a>
                </strong>
                , which is a list of indicators of energy supply and renewable
                electricity production from the United Nations for the year
                2013, and should be put into a DataFrame with the variable name
                of Energy.
              </p>
              <p className="f-sm">
                Keep in mind that this is an Excel file, and not a comma
                separated values file. Also, make sure to exclude the footer and
                header information from the datafile. The first two columns are
                unneccessary, so you should get rid of them, and you should
                change the column labels so that the columns are:
              </p>
              <p className="f-sm">
                <strong>
                  [ ' Country ', ' Energy Supply ', ' Energy Supply per Capita
                  ', ' % Renewable ' ]
                </strong>
              </p>
              <p className="f-sm">
                Convert <strong>Energy Supply</strong> to gigajoules (
                <strong>
                  Note: there are 1,000,000 gigajoules in a petajoule
                </strong>
                ). For all countries which have missing data (e.g. data with
                "...") make sure this is reflected as <strong>np.NaN</strong>{" "}
                values.
              </p>
              <p className="f-sm">
                Rename the following list of countries (for use in later
                questions):
              </p>
              <p className="f-sm">
                <strong>
                  "Republic of Korea": "South Korea", <br />
                  "United States of America": "United States", <br />
                  "United Kingdom of Great Britain and Northern Ireland":
                  "United Kingdom", <br />
                  "China, Hong Kong Special Administrative Region": "Hong Kong"
                </strong>
              </p>
              <p className="f-sm">
                There are also several countries with numbers and/or parenthesis
                in their name. Be sure to remove these, e.g.{" "}
                <strong>'Bolivia (Plurinational State of)'</strong> should be{" "}
                <strong>'Bolivia'</strong>. <strong>'Switzerland17'</strong>{" "}
                should be <strong>'Switzerland'</strong>.
              </p>
              <p className="f-sm">
                Next, load the GDP data from the file{" "}
                <strong>world_bank.csv</strong>{" "}
                <strong>
                  <a href="https://storage.googleapis.com/projects01/assignments/module_1/week_3/world_bank.csv">
                    (Download)
                  </a>
                </strong>{" "}
                , which is a csv containing countries' GDP from 1960 to 2015
                from World Bank. Call this DataFrame <strong>GDP</strong>.
              </p>
              <p className="f-sm">
                Make sure to skip the header, and rename the following list of
                countries:
              </p>
              <p className="f-sm">
                <strong>
                  "Korea, Rep.": "South Korea", <br />
                  "Iran, Islamic Rep.": "Iran", <br />
                  "Hong Kong SAR, China": "Hong Kong"
                </strong>
              </p>
              <p className="f-sm">
                Finally, load the Sciamgo Journal and Country Rank data for
                Energy Engineering and Power Technology from the file{" "}
                <strong>
                  <a href="https://storage.googleapis.com/projects01/assignments/module_1/week_3/scimagojr-3.xlsx">
                    scimagojr-3.xlsx
                  </a>
                </strong>
                , which ranks countries based on their journal contributions in
                the aforementioned area. Call this DataFrame{" "}
                <strong>ScimEn</strong>.
              </p>
              <p className="f-sm">
                Join the three datasets: GDP, Energy, and ScimEn into a new
                dataset (using the intersection of country names). Use only the
                last 10 years (2006-2015) of GDP data and only the top 15
                countries by Scimagojr 'Rank' (Rank 1 through 15).
              </p>
              <p className="f-sm">
                The index of this DataFrame should be the name of the country,
                and the columns should be ['Rank', 'Documents', 'Citable
                documents', 'Citations', 'Self-citations', 'Citations per
                document', 'H index', 'Energy Supply', 'Energy Supply per
                Capita', '% Renewable', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015'].
              </p>
              <p className="f-sm">
                <i>
                  This function should return a DataFrame with 20 columns and 15
                  entries, and the rows of the DataFrame should be sorted by
                  "Rank".
                </i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_1_1.png" fluid />
              <Image src="images/assignments/module_1/week_3/q_1_2.png" fluid />
              <Image src="images/assignments/module_1/week_3/q_1_3.png" fluid />
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
                What are the top 15 countries for average GDP over the last 10
                years?
              </p>
              <p className="f-sm">
                <i>
                  This function should return a Series named{" "}
                  <strong>avgGDP</strong> with 15 countries and their average
                  GDP sorted in descending order.
                </i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_2.png" fluid />
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
                By how much had the GDP changed over the 10 year span for the
                country with the 6th largest average GDP?
              </p>
              <p className="f-sm">
                <i>This function should return a single number.</i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_3.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h4>
                <strong>Question 4</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">What is the mean energy supply per capita?</p>
              <p className="f-sm">
                <i>This function should return a single number.</i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_4.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h4>
                <strong>Question 5</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                What country has the maximum % Renewable and what is the
                percentage?
              </p>
              <p className="f-sm">
                <i>
                  This function should return a tuple with the name of the
                  country and the percentage.
                </i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_5.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <h4>
                <strong>Question 6</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Create a new column that is the ratio of Self-Citations to Total
                Citations. What is the maximum value for this new column, and
                what country has the highest ratio?
              </p>
              <p className="f-sm">
                <i>
                  This function should return a tuple with the name of the
                  country and the ratio.
                </i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_6.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <h4>
                <strong>Question 7</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Create a column that estimates the population using Energy
                Supply and Energy Supply per capita. What is the third most
                populous country according to this estimate?
              </p>
              <p className="f-sm">
                <i>This function should return the name of the country</i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_7.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <h4>
                <strong>Question 8</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Create a column that estimates the number of citable documents
                per person. What is the correlation between the number of
                citable documents per capita and the energy supply per capita?
                Use the <strong>.corr()</strong> method, (Pearson's
                correlation).
              </p>
              <p className="f-sm">
                <i>This function should return a single number.</i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_8.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <h4>
                <strong>Question 9</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Create a new column with a 1 if the country's % Renewable value
                is at or above the median for all countries in the top 15, and a
                0 if the country's % Renewable value is below the median.
              </p>
              <p className="f-sm">
                <i>
                  This function should return a series named{" "}
                  <strong>HighRenew</strong> whose index is the country name
                  sorted in ascending order of rank.
                </i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_9.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <h4>
                <strong>Question 10</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Use the following dictionary to group the Countries by
                Continent, then create a DataFrame that displays the sample size
                (the number of countries in each continent bin), and the sum,
                mean, and std deviation for the estimated population of each
                country.
              </p>
              <Row className="m-0 row-height">
                <Col md={3}>
                  <p className="f-sm">ContinentDict = </p>
                </Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm mb-0">&#123; 'China':'Asia',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'United States':'North America',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Japan':'Asia',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'United Kingdom':'Europe',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Russian Federation':'Europe',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Canada':'North America',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Germany':'Europe',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'India':'Asia',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'France':'Europe',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'South Korea':'Asia',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Italy':'Europe',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Spain':'Europe',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Iran':'Asia',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Australia':'Australia',</p>
                </Col>
              </Row>
              <Row className="m-0 row-height">
                <Col md={3}></Col>
                <Col md={9} className="pl-0">
                  <p className="f-sm pl-2">'Brazil':'South America' &#125;</p>
                </Col>
              </Row>
              <p className="f-sm mt-3">
                <i>
                  This function should return a DataFrame with index named
                  Continent{" "}
                  <strong>
                    ['Asia', 'Australia', 'Europe', 'North America', 'South
                    America']
                  </strong>{" "}
                  and columns <strong>['size', 'sum', 'mean', 'std']</strong>
                </i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_10.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <h4>
                <strong>Question 11</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Cut % Renewable into 5 bins. Group Top15 by the Continent, as
                well as these new % Renewable bins. How many countries are in
                each of these groups?
              </p>
              <p className="f-sm">
                <i>
                  This function should return a Series with a MultiIndex of{" "}
                  <strong>Continent</strong>, then the bins for{" "}
                  <strong>% Renewable</strong>. Do not include groups with no
                  countries.
                </i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_11.png" fluid />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <h4>
                <strong>Question 12</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="f-sm">
                Convert the Population Estimate series to a string with
                thousands separator (using commas). Use all significant digits
                (do not round the results).
              </p>
              <p className="f-sm">e.g. 12345678.90 == 12,345,678.90</p>
              <p className="f-sm">
                <i>
                  This function should return a series <strong>PopEst</strong>{" "}
                  whose index is the country name and whose values are the
                  population estimate string
                </i>
              </p>
              <Image src="images/assignments/module_1/week_3/q_12.png" fluid />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </Modal>
  );
}

const Advanced_data_pro = () => {
  const [advanced_data_proModalShow, setAdvanced_data_proModalShow] =
    useState(false);
  return (
    <Fragment>
      <Advanced_data_proModal
        show={advanced_data_proModalShow}
        onHide={() => setAdvanced_data_proModalShow(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setAdvanced_data_proModalShow(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/assignments/module_1/week_3/profile.jpeg"
          />
          <Card.Body>
            <Card.Title>Advanced Data Processing with Pandas</Card.Title>
            <Card.Text>
              <Badge pill bg="success">
                Pandas
              </Badge>{" "}
              <Badge pill bg="success">
                Numpy
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

export default Advanced_data_pro;

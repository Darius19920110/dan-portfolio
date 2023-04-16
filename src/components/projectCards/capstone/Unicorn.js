import { Fragment, useState } from "react";
import { Col, Card, Modal, ListGroup, Image, Accordion } from "react-bootstrap";
import ReactPlayer from "react-player";

function Unicorn_modal(props) {
  const [playing, setPlaying] = useState(true);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Unicorn E-commerce
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="left-border">
          <h5>Introduction</h5>
          <p className="f-sm">
            This Capstone project will combine what I have learned in the
            preceding courses on SQL, Spreadsheets, and Tableau. <br />
            The project includes three main parts, each with their own subtasks:
          </p>
          <ListGroup as="ol" numbered variant="flush" className="f-sm">
            <ListGroup.Item as="li">Data Exploration SQL</ListGroup.Item>
            <ListGroup.Item as="li">
              Data Cleaning using Spreadsheets
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Getting Insights using Tableau
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="left-border mt-4">
          <h5>Project Background</h5>
          <p className="f-sm">
            The idea of this project comes from Masterschool. They provided a
            datasets and I will answer their questions.
          </p>
        </div>

        <div className="left-border mt-4">
          <h5>Scenario</h5>
          <p className="f-sm">
            The online sector has been slowly eating up market share in the past
            two decades. E-commerce platforms like Unicorn allow people to buy
            products online: from books, toys, clothes, and shoes to food,
            furniture, and other household items. The following dataset includes
            Unicorn sales data from the years 2015-2018.
          </p>
          <p className="f-sm">
            Let's suppose that the Unicorn is a family business and is owned by
            2 stakeholders who are very invested in their business. They already
            have a small data analytics team but want to expand it significantly
            over the next few months. They see me as a candidate for a DA
            position and provide you with a sample dataset from their sales
            data.
          </p>
          <p className="f-sm">
            My task is to analyze the data, find interesting insights and
            identify weak areas and opportunities for Unicorn to boost its
            business growth.
          </p>
        </div>
        <Accordion flush alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>
                <strong>1. Data Exploration SQL</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <div className="left-border mt-0">
                <h5>Instructions</h5>
                <p className="f-sm">
                  <strong>
                    The completed report can be downloaded from{" "}
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/1.%20Data%20Exploration%20SQL/Questions.docx"
                      target="_blank"
                    >
                      HERE
                    </a>
                  </strong>
                </p>
                <p className="f-sm">
                  <strong>
                    Click the following Tables for download: <br />
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/1.%20Data%20Exploration%20SQL/customers.csv"
                      target="_blank"
                    >
                      customers
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/1.%20Data%20Exploration%20SQL/orders.csv"
                      target="_blank"
                    >
                      orders
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/1.%20Data%20Exploration%20SQL/order_details.csv"
                      target="_blank"
                    >
                      order_details
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/1.%20Data%20Exploration%20SQL/product.csv"
                      target="_blank"
                    >
                      product
                    </a>
                  </strong>
                </p>
              </div>
              <div className="left-border mt-0">
                <h5>Schema</h5>
                <Image
                  src="images/projects/capstone/unicorn/schema.jpg"
                  fluid
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>
                <strong>2. Data Cleaning using Spreadsheets</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <div className="left-border mt-0">
                <h5>Instructions</h5>
                <p className="f-sm">
                  <strong>
                    The completed Excel report can be downloaded from{" "}
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/2.%20Data%20Cleaning%20using%20Spreadsheets/Questions.xlsx"
                      target="_blank"
                    >
                      HERE
                    </a>
                  </strong>
                </p>
                <p className="f-sm">
                  <strong>
                    Click the following original datasets for download: <br />
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/2.%20Data%20Cleaning%20using%20Spreadsheets/original_files/store_data.csv"
                      target="_blank"
                    >
                      store_data
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/2.%20Data%20Cleaning%20using%20Spreadsheets/original_files/shipping_prices.csv"
                      target="_blank"
                    >
                      shipping_prices
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/2.%20Data%20Cleaning%20using%20Spreadsheets/original_files/Sub%20categories.csv"
                      target="_blank"
                    >
                      sub_categories
                    </a>
                  </strong>
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h4>
                <strong>3. Getting Insights using Tableau</strong>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <div className="left-border mt-0">
                <h5>Instructions</h5>
                <p className="f-sm">
                  This part of the project is open-ended. Its goal is to
                  communicate my insights clearly, about the data to the
                  Unicorn's executive team.
                  <br />
                  By using Tableau, I will be able to turn insight into action,
                  cut down analysis time, and change behaviors.
                </p>
                <p className="f-sm">
                  <strong>
                    The original csv file can be downloaded from{" "}
                    <a
                      href="https://storage.googleapis.com/projects01/projects/Unicorn/3.%20Getting%20Insights%20using%20Tableau/Unicorn_data_Tableau.csv"
                      target="_blank"
                    >
                      HERE
                    </a>{" "}
                  </strong>
                </p>
                <p className="f-sm">
                  <strong>
                    The finished Tableau project can be found{" "}
                    <a
                      href="https://public.tableau.com/app/profile/daniel.meszaros/viz/Unicorne-commerce/Unicorn"
                      target="_blank"
                    >
                      HERE
                    </a>{" "}
                  </strong>
                </p>
              </div>
              <div className="left-border mt-0">
                <h5>Presentation</h5>
                <ReactPlayer url="https://www.youtube.com/watch?v=rLe-qvvJ40o" />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </Modal>
  );
}

const Unicorn = () => {
  const [unicornModalShow, setUnicornModalShow] = useState(false);
  return (
    <Fragment>
      <Unicorn_modal
        show={unicornModalShow}
        onHide={() => setUnicornModalShow(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setUnicornModalShow(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <div className="capstone_badge">
            <Image src="images/capstone_badge.png" className="img-fluid" />
          </div>

          <Card.Img
            variant="top"
            src="images/projects/capstone/unicorn/main_img.jpeg"
          />
          <Card.Body>
            <Card.Title>
              Unicorn <br />
              E-Commerce
            </Card.Title>
            <Card.Text>SQL | Excel | Tableau | Video Presentation</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Unicorn;

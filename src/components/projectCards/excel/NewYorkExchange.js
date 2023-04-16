import { Fragment, useState } from "react";
import { Col, Card, Modal, ListGroup, Image } from "react-bootstrap";

function NewYorkExchange_modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Analyze the New York Exchange Dataset
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="left-border">
          <h5>About this project</h5>
          <p className="f-sm">
            In This project, I will analyze real-life data from the New York Stock Exchange. I will be drawing a subset of a large dataset provided by Kaggle that contains historical financial data from S&P 500 companies.<br />
            <strong>The Project Data excel file can be found <a href="https://storage.googleapis.com/projects01/projects/analyze_the_new_york_exchange_dataset/projectdata-nyse.xlsx">HERE</a></strong>
            <br />
            <strong>The Preliminary Analysis Slide presentation can be found <a href="https://storage.googleapis.com/projects01/projects/analyze_the_new_york_exchange_dataset/nyse-data-project-slide.pptx">HERE</a></strong><br />
            <p className="f-sm mt-4">During this project, I will conduct three Tasks:</p>
          </p>
          <ListGroup as="ol" variant="flush" className="f-sm" numbered>
            <ListGroup.Item as="li" className="pb-0">
              Complete my own data analysis and create a presentation to share my findings.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Develop a dashboard for a Profit and Loss Statement.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Create a Financial Forecasting Model using three scenarios.
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="left-border mt-4">
          <h5>Background</h5>
          <p className="f-sm">
            I used the Fundamentals.csv and Securities.csv files provided by Kaggle. The Fundamentals file provides the fundamental financial data gathered from SEC 10K annual filings from 448 companies listed on the S&P 500 index. The Securities file provided the industry or sector information the companies are categorized under on the S&P 500 index.
          </p>
        </div>
        <div className="left-border mt-4">
          <h5>Skills I will use</h5>
          <ListGroup as="ol" variant="flush" className="f-sm">
            <ListGroup.Item as="li" className="pb-0">
              Calculating summary statistics
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Drawing any inference from the statistics
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Calculating business metrics
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Using models to forecast future growth prospects for the companies
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Interpret the measures of central tendency and spread (mean, median, standard deviation, range).
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Use a combination of Excel functions (e.g., If statements, INDEX, and MATCH, calculating descriptive statistics with IF statement, dropdowns, data validation, VLOOKUP).
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Analyze and forecast financial business metrics using Excel.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Create visualizations of a business metric and use Excel to create a financial forecast model.
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="left-border mt-4">
          <h5>Cleaning Up The Data</h5>
          <ListGroup as="ol" variant="flush" className="f-sm">
            <ListGroup.Item as="li" className="pb-0">
              Make a copy of original data
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Change all the column names to informative names that have no spaces
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Set up named ranges for the data
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Make sure that the "$-" data which is interpreted as "$0"
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Changing dates and numbers to the right format (Using text to columns)
            </ListGroup.Item>
          </ListGroup>       
        </div>

        <div className="mt-5">
          <h4><strong>Task 1: Preliminary Analysis of the Dataset</strong></h4>
          <p className="f-sm">In this task, I am going to compare the Cost of goods Sold in 2 sectors, Energy and Healthcare.</p>
          <ListGroup as="ol" variant="flush" className="f-sm" numbered>
            <ListGroup.Item as="li" className="pb-0">
              Create a Descriptive Statistics table of each Sector over 4 years
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Create a Histogram
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Create a slide presentation, ask a question and answer it based on the data
            </ListGroup.Item>
          </ListGroup>
          <Image src="images/projects/excel/new_york_exchange/descriptive_statistic.jpg" fluid/>
          <Image src="images/projects/excel/new_york_exchange/descriptive_stat_slide.jpg" fluid/>
        </div>
        <div className="mt-5">
          <h4><strong>Task 2: Develop a dashboard for a profit and loss statement</strong></h4>
          <ListGroup as="ol" variant="flush" className="f-sm" numbered>
            <ListGroup.Item as="li" className="pb-0">
              Create data validation (list) to select which company we want
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Add revenue, calculate all expenses for each year, using INDEX/MATCH
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Create a bar chart
            </ListGroup.Item>
          </ListGroup>
            <Image fluid src="images/projects/excel/new_york_exchange/p_and_l_dashboard.jpg"/>          
        </div>
        <div className="mt-5">
          <h4><strong>Task 3: Create a financial model</strong></h4>
          <p className="f-sm">
            I have chosen the CFG ticker symbol for this task.
          </p>
          <div className="left-border mt-4">
          <h5>Historical</h5>
          <ListGroup as="ol" variant="flush" className="f-sm">
            <ListGroup.Item as="li" className="pb-0">
              Create Income Statement for each year
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Calculate Operating statistics (Revenue growth, Gross margin, Operating margin)
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Create Operating Scenarios - sensitivity analysis
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Create data validation for 3 cases(Strong case, Base case, Weak case)
            </ListGroup.Item>
          </ListGroup>
          </div>

          <div className="left-border mt-4">
          <h5>Forecast</h5>
          <ListGroup as="ol" variant="flush" className="f-sm">
            <ListGroup.Item as="li" className="pb-0">
              Define Revenue growth, Gross margin, and Operating Margin for each case for year 4 and year 5
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Calculate Assumptions for Operating statistics
            </ListGroup.Item>
            <ListGroup.Item as="li" className="pb-0 pt-2">
              Finally, calculate the forecast for Income Statement ( Revenue, Gross Profit, Operating income/ EBIT)
            </ListGroup.Item>
          </ListGroup>
          </div>
          <Image fluid src="images/projects/excel/new_york_exchange/business_forecast.jpg"/> 
          </div>
      </Modal.Body>
    </Modal>
  );
}

const NewYorkExchange = () => {
  const [newYorkExchangeModalShow, setNewYorkExchangeModalShow] =
    useState(false);
  return (
    <Fragment>
      <NewYorkExchange_modal
        show={newYorkExchangeModalShow}
        onHide={() => setNewYorkExchangeModalShow(false)}
      />
      <Col>
        <Card
          onClick={() => {
            setNewYorkExchangeModalShow(true);
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/projects/excel/new_york_exchange/profile.png"
          />
          <Card.Body>
            <Card.Title>Analyze the New York Exchange Dataset</Card.Title>
            <Card.Text>Excel</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default NewYorkExchange;

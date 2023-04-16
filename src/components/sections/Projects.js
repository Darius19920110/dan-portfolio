import { Fragment, useState } from "react";
import { Tab, Tabs, Container, Row, Col, Card, Button } from "react-bootstrap";
import Deforestation from "../projectCards/sql/Deforestation";
import Murder_in_sql_city from "../projectCards/sql/Murder_in_sql_city";
import NewYorkExchange from "../projectCards/excel/NewYorkExchange";
import UsCensus from "../projectCards/tableau/UsCensus";
import Unicorn from "../projectCards/capstone/Unicorn";

const Projects = () => {
  const [projectKey, setProjectKey] = useState("all");
  return (
    <Fragment>
      <div className="content">
        {/* title */}
        <div className="title">Projects</div>
        {/* TABS */}
        <Tabs
          id="controlled-tab-example"
          activeKey={projectKey}
          onSelect={(k) => setProjectKey(k)}
          className="mb-3"
        >
          <Tab eventKey="all" title="All">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <Unicorn />
              <Deforestation />
              <UsCensus />
              <Murder_in_sql_city />
              <NewYorkExchange />

              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="excel" title="Excel">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <NewYorkExchange />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="sql" title="SQL">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <Deforestation />
              <Murder_in_sql_city />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="tableau" title="Tableau">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <UsCensus />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="capstone" title="Capstone">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <Unicorn />
              {/* CARDS */}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};
export default Projects;

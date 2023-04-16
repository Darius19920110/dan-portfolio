import { Fragment, useState } from "react";
import { Tab, Tabs, Row } from "react-bootstrap";

import SpreadSheetsPartI from "../certCards/udacity/SpreadSheetsPartI";
import SpreadSheetsPartII from "../certCards/udacity/SpreadSheetsPartII";
import Advanced_sql from "../certCards/udacity/Advanced_sql";
import AzureFundamentals from "../certCards/microsoft/AzureFundamentals";
import BusinessAnalytics from "../certCards/udacity/BusinessAnalytics";
import Databases from "../certCards/ibm/Databases";
import DescriptiveStatistics from "../certCards/udacity/DescriptiveStatistics";
import GoogleData from "../certCards/google/GoogleData";
import Linux from "../certCards/ibm/Linux";
import DataEngineering from "../certCards/ibm/DataEngineering";
import Rdbms from "../certCards/ibm/Rdbms";
import PythonAssociate from "../certCards/openedg/PythonAssociate";
import PythonForDataScience from "../certCards/ibm/PythonForDataScience";
import PythonProject from "../certCards/ibm/PythonProject";
import RelationalDb from "../certCards/ibm/RelationalDb";
import Security from "../certCards/microsoft/Security";
import SqlPartI from "../certCards/udacity/SqlPartI";
import SqlPartII from "../certCards/udacity/SqlPartII";
import Introduction_to_data_science from "../certCards/university_of_michigan/Introduction_to_data_science";
import DataVisualizationProject from "../certCards/udacity/DataVisualizationProject";

const Certifications = () => {
  const [certKey, setCertKey] = useState("all");
  return (
    <Fragment>
      <div className="content">
        {/* title */}
        <div className="title">Certifications</div>
        {/* TABS */}
        <Tabs
          id="controlled-tab-example"
          activeKey={certKey}
          onSelect={(k) => setCertKey(k)}
          className="mb-3"
        >
          <Tab eventKey="all" title="All">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <PythonAssociate />
              <SpreadSheetsPartI />
              <SpreadSheetsPartII />
              <AzureFundamentals />
              <BusinessAnalytics />
              <DataVisualizationProject />
              <Databases />
              <DescriptiveStatistics />
              <GoogleData />
              <Linux />
              <DataEngineering />
              <Rdbms />
              <PythonForDataScience />
              <PythonProject />
              <RelationalDb />
              <Security />
              <SqlPartI />
              <SqlPartII />
              <Advanced_sql />
              <Introduction_to_data_science />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="google" title="Google">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <GoogleData />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="ibm" title="IBM">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <Databases />
              <Linux />
              <DataEngineering />
              <Rdbms />
              <PythonForDataScience />
              <PythonProject />
              <RelationalDb />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="microsoft" title="Microsoft">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <AzureFundamentals />
              <Security />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="udacity" title="Udacity">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <SpreadSheetsPartI />
              <SpreadSheetsPartII />
              <DataVisualizationProject />
              <BusinessAnalytics />
              <DescriptiveStatistics />
              <SqlPartI />
              <SqlPartII />
              <Advanced_sql />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="python" title="OpenEDG">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <PythonAssociate />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="michigan" title="University of Michigan">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <Introduction_to_data_science />
              {/* CARDS */}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};
export default Certifications;

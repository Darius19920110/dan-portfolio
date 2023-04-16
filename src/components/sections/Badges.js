import { Fragment, useState } from "react";
import { Tab, Tabs, Row } from "react-bootstrap";

import Data_analytics from "../BadgeCards/google/Data_analytics";
import DataEngineering from "../BadgeCards/ibm/DataEngineering";
import DatabaseSql from "../BadgeCards/ibm/DatabaseSql";
import LinuxCommands from "../BadgeCards/ibm/LinuxCommands";
import Azure from "../BadgeCards/microsoft/Azure";
import MTA_Security from "../BadgeCards/microsoft/MTA_Security";
import PCAP from "../BadgeCards/openedg/PCAP";
import PythonForData from "../BadgeCards/ibm/PythonForData";
import PythonProject from "../BadgeCards/ibm/PythonProject";
import RelationalDB from "../BadgeCards/ibm/RelationalDB";
import RDBMS from "../BadgeCards/ibm/RDBMS";

const Badges = () => {
  const [badgeKey, setBadgeKey] = useState("all");
  return (
    <Fragment>
      <div className="content">
        {/* title */}
        <div className="title">Badges</div>
        {/* TABS */}
        <Tabs
          id="controlled-tab-example"
          activeKey={badgeKey}
          onSelect={(k) => setBadgeKey(k)}
          className="mb-3"
        >
          <Tab eventKey="all" title="All">
            <Row xs={3} md={4} className="g-4">
              {/* CARDS */}
              <Data_analytics />
              <DataEngineering />
              <DatabaseSql />
              <LinuxCommands />
              <Azure />
              <MTA_Security />
              <PCAP />
              <PythonForData />
              <PythonProject />
              <RelationalDB />
              <RDBMS />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="google" title="Google">
            <Row xs={3} md={4} className="g-4">
              {/* CARDS */}
              <Data_analytics />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="ibm" title="IBM">
            <Row xs={3} md={4} className="g-4">
              {/* CARDS */}
              <DataEngineering />
              <DatabaseSql />
              <LinuxCommands />
              <PythonForData />
              <PythonProject />
              <RelationalDB />
              <RDBMS />
              {/* CARDS */}
            </Row>
          </Tab>
          <Tab eventKey="microsoft" title="Microsoft">
            <Row xs={3} md={4} className="g-4">
              {/* CARDS */}
              <Azure />
              <MTA_Security />
              {/* CARDS */}
            </Row>
          </Tab>

          <Tab eventKey="python" title="OpenEDG">
            <Row xs={3} md={4} className="g-4">
              {/* CARDS */}
              <PCAP />
              {/* CARDS */}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};
export default Badges;

import { Fragment, useState } from "react";
import { Tab, Tabs, Container, Row, Col, Card, Button } from "react-bootstrap";
import Fun_data_man from "../assignmentCards/university_of_michigan/module_1/week_1/Fun_data_man";
import Basic_data_pro from "../assignmentCards/university_of_michigan/module_1/week_2/Basic_data_pro";
import Advanced_data_pro from "../assignmentCards/university_of_michigan/module_1/week_3/Advanced_data_pro";
import Messy_data from "../assignmentCards/university_of_michigan/module_1/week_4/Messy_data";

const Assignments = () => {
  const [projectKey, setProjectKey] = useState("university_of_michigan");
  return (
    <Fragment>
      <div className="content">
        {/* title */}
        <div className="title">Programming Assignments</div>
        {/* TABS */}
        <Tabs
          id="controlled-tab-example"
          activeKey={projectKey}
          onSelect={(k) => setProjectKey(k)}
          className="mb-3"
        >
          <Tab eventKey="university_of_michigan" title="University of Michigan">
            <Row xs={1} md={2} className="g-4">
              {/* CARDS */}
              <Basic_data_pro />
              <Advanced_data_pro />
              <Fun_data_man />
              <Messy_data />
              {/* CARDS */}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};
export default Assignments;

import { Fragment } from "react";
import { Col, Card } from "react-bootstrap";

const DataVisualizationProject = () => {
  return (
    <Fragment>
      <Col>
        <Card
          onClick={() => {
            window.open("https://confirm.udacity.com/FCR4DUEX", "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="card_scale"
        >
          <Card.Img
            variant="top"
            src="images/certs/Data_Visualization_Project.jpg"
          />
          <Card.Body>
            <Card.Title>Data Visualization Project</Card.Title>
            <Card.Text>Udacity</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default DataVisualizationProject;

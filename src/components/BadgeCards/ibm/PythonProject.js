import { Fragment } from "react";
import { Image } from "react-bootstrap";

const PythonProject = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/1e345cab-342f-4ad4-beb7-703a79a56186/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/python-project-for-data-engineering.png"
      />
    </Fragment>
  );
};

export default PythonProject;

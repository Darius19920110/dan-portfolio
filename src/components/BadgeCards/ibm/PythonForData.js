import { Fragment } from "react";
import { Image } from "react-bootstrap";

const PythonForData = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/847d1b45-173a-4e8b-8c6d-166d17441af8/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/python-for-data-science-and-ai.png"
      />
    </Fragment>
  );
};

export default PythonForData;

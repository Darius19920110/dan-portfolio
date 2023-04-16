import { Fragment } from "react";
import { Image } from "react-bootstrap";

const RDBMS = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/f9e5b3bc-0423-4bf9-8b93-f345924e14eb/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/relational-databases-rdbms-essentials.png"
      />
    </Fragment>
  );
};

export default RDBMS;

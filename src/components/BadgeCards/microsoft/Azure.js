import { Fragment } from "react";
import { Image } from "react-bootstrap";

const Azure = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/db193716-ce08-4fa0-bfdb-43b1485f3df6/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/microsoft-certified-azure-fundamentals.png"
      />
    </Fragment>
  );
};

export default Azure;

import { Fragment } from "react";
import { Image } from "react-bootstrap";

const MTA_Security = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/0c280e74-2ccc-4cd3-abf3-b0ba4281dcd0/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/mta-security-fundamentals-certified-2021.png"
      />
    </Fragment>
  );
};

export default MTA_Security;

import { Fragment } from "react";
import { Image } from "react-bootstrap";

const PCAP = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/0c4da7e5-627e-4cce-b820-d2ce81aa5d62/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/pcap-31-03-pcap-certified-associate-in-python-programming.png"
      />
    </Fragment>
  );
};

export default PCAP;

import { Fragment } from "react";
import { Image } from "react-bootstrap";

const LinuxCommands = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/c02c786f-7d2d-482c-a7eb-ba9f52ca11b5/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/linux-commands-shell-scripting-essentials.png"
      />
    </Fragment>
  );
};

export default LinuxCommands;

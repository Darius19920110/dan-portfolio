import { Fragment } from "react";
import { Image } from "react-bootstrap";

const RelationalDB = () => {
  return (
    <Fragment>
      <Image
        onClick={() => {
          window.open(
            "https://www.credly.com/badges/9798a05a-ca83-4d5a-8846-5a6c24a2b386/public_url",
            "_blank"
          );
        }}
        style={{ cursor: "pointer" }}
        className="card_scale"
        src="images/badges/relational-database-administration-essentials.png"
      />
    </Fragment>
  );
};

export default RelationalDB;

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBTypography,
} from "mdb-react-ui-kit";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import styles from "../styles/login-form.module.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, password };

    const user = await axios.post("/api/auth/login", credentials);
    console.log(show);
    if (user.data.message == "Invalid credentials!") {
      setUsername("");
      setPassword("");
      setShow(true);
    } else {
      router.push("/home");
    }
  };

  return (
    <MDBContainer fluid className={["p-3", "my-5", styles.hcustom].join(" ")}>
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <MDBTypography tag="h1" className="mb-0">
              Daniel Meszaros
            </MDBTypography>
          </div>

          <div
            className={[
              styles.divider,
              "d-flex",
              "align-items-center",
              "my-4",
            ].join(" ")}
          >
            <p className="h6 text-muted">CV / Resume / Portfolio</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <MDBInput
              wrapperClass="mb-4"
              label="User Name"
              id="LargeInput"
              type="text"
              size="lg"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="Largepwd"
              type="password"
              size="lg"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {show && (
              <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>
                  <div className="d-flex justify-content-start">
                    Invalid Credentials!
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button
                      onClick={() => setShow(false)}
                      variant="outline-danger"
                    >
                      Close
                    </Button>
                  </div>
                </Alert.Heading>
              </Alert>
            )}
            <div className="text-center text-md-start mt-4 mb-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg" color="light">
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>

      <div
        className={[
          "d-flex",
          "flex-column",
          "flex-md-row",
          "text-center",
          "text-md-start",
          "justify-content-between",
          "py-4",
          "px-4",
          "px-xl-5",
          styles.grey_color,
          styles.login_btn,
        ].join(" ")}
      >
        <div className="mb-3 mb-md-0">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </MDBContainer>
  );
}

// eslint-disable-next-line jsx-a11y/img-redundant-alt
import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Card } from "react-bootstrap";

const Login = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{
                borderRadius: "1rem",
                maxheight: "100%",
                maxWidth: "100%",
              }}
            >
              <MDBCardBody
                className="p-5 d-flex flex-column align-items-center mx-auto w-100"
                style={{ backgroundColor: "rgba(50, 120, 300, 1)" }}
              >
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Email address"
                  id="email"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Password"
                  id="password"
                  type="password"
                  size="lg"
                />

                <p className="small mb-3 pb-lg-2">
                  <a className="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>
                <MDBBtn outline className="mx-2 px-5" color="white" size="lg">
                  Login
                </MDBBtn>

                <div className="d-flex flex-row mt-3 mb-5">
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Card.Footer>
        <a
          style={{
            color: "black",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
          href="/"
        >
          Go back Main
        </a>
      </Card.Footer>
    </div>
  );
};

export default Login;

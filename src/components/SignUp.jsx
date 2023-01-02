import React from "react";
import { Card } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";

const SingUp = () => {
  return (
    <div
      style={{
        height: "100vh",
        marginTop: "100px",
      }}
    >
      <MDBContainer>
        <div className="p-5 bg-image"></div>

        <MDBCard
          className="mx-5 mb-5 p-5 shadow-5"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <MDBCardBody className="p-5 text-center">
            <h2 className="fw-bold mb-5">Sign up now</h2>

            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="First name"
                  id="form1"
                  type="text"
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last name"
                  id="form1"
                  type="text"
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
            />

            <MDBBtn className="w-100 mb-4" size="md">
              sign up
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Card.Footer
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          style={{
            width: "8%",
            height: "100%",
            color: "Black",
            fontSize: "20px",
          }}
          href="/"
        >
          Go back Main
        </a>
      </Card.Footer>
    </div>
  );
};

export default SingUp;

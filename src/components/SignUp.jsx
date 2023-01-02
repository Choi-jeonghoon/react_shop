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

const SignUp = ({ register, errors, onSignUpSubmitEvent }) => {
  const { email, firstname, lastname, password } = errors;

  return (
    <form
      style={{
        height: "100vh",
        marginTop: "100px",
      }}
      onSubmit={onSignUpSubmitEvent}
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
                  id="firstname"
                  type="text"
                  {...register("firstname")}
                />
              </MDBCol>
              {firstname?.message && <p>{firstname.message}</p>}
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last name"
                  id="lastname"
                  type="text"
                  {...register("lastname")}
                />
              </MDBCol>
              {lastname?.message && <p>{lastname.message}</p>}
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="email"
              type="email"
              {...register("email")}
            />
            {email?.message && <p>{email.message}</p>}
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              {...register("password")}
            />
            {password?.message && <p>{password.message}</p>}
            <MDBBtn className="w-100 mb-4" size="md" type="submit">
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
    </form>
  );
};

export default SignUp;

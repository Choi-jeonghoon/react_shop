import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const ContaninerNav = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Apple</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">clothes</Nav.Link>
            <Nav.Link href="#pricing">shoes</Nav.Link>
          </Nav>
        </Container>
        <Button
          onClick={() => navigate("/login")}
          variant="primary"
          style={{ margin: 10 }}
        >
          login
        </Button>
        <Button
          onClick={() => navigate("/signup")}
          variant="primary"
          style={{ margin: 10 }}
        >
          sign up
        </Button>
      </Navbar>
    </div>
  );
};

export default ContaninerNav;

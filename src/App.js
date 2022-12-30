import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Apple</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">clothes</Nav.Link>
            <Nav.Link href="#pricing">shoes</Nav.Link>
          </Nav>
        </Container>
        <>
          <Button variant="primary" style={{ margin: 10 }}>
            login
          </Button>
          <Button variant="primary" style={{ margin: 10 }}>
            sign up
          </Button>
        </>
      </Navbar>
      <div className="main-bg"></div>
      <div>
        <Row>
          <Col sm>
            <img
              src="./img/prydumano-design-yOx4oPNUR10-unsplash.jpg"
              whidth="80%"
              alt="A"
            />
            <h4>상품명</h4>
            <p>설명</p>
          </Col>
          <Col sm>
            <img
              src="./img/prydumano-design-yOx4oPNUR10-unsplash.jpg"
              whidth="80%"
              alt="B"
            />
            <h4>상품명</h4>
            <p>설명</p>
          </Col>
          <Col sm>
            <img
              src="./img/prydumano-design-yOx4oPNUR10-unsplash.jpg"
              whidth="80%"
              alt="C"
            />
            <h4>상품명</h4>
            <p>설명</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

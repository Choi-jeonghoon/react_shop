import { useNavigate } from "react-router-dom";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import useData from "../hooks/useData";

function Main() {
  const { mockData } = useData();

  const navigate = useNavigate();

  const handleDetailButtonClick = (e, item) => {
    navigate("/detail", {
      state: item,
    });
  };

  return (
    <>
      <div className="Main_page">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Apple</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">clothes</Nav.Link>
              <Nav.Link href="#pricing">shoes</Nav.Link>
            </Nav>
          </Container>
          <Button variant="primary" style={{ margin: 10 }}>
            login
          </Button>
          <Button variant="primary" style={{ margin: 10 }}>
            sign up
          </Button>
        </Navbar>
        <div className="main-bg"></div>
        <Row className="img-box">
          {mockData.map((item) => (
            <Col sm key={item.title}>
              <img
                src={item.imgUrl}
                alt="A"
                style={{
                  width: "300px",
                }}
              />
              <h4>제품명: {item.title}</h4>
              <p>상세설명: {item.description}</p>
              <p>가격: {item.price}</p>
              <button onClick={(e) => handleDetailButtonClick(e, item)}>
                Detail
              </button>
            </Col>
          ))}
        </Row>
      </div>
      )
    </>
  );
}

export default Main;

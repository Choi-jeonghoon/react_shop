import { useState, useEffect } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
// import Product from "./types/product";
// import mockData from "./dev/mockData";
// import { getProductList } from "./apis/productService";
import useData from "./hooks/useData";
// const items = [
//   {
//     title: "쇼파",
//     description: "쇼파입니다.",
//     imgUrl:
//       "https://images.unsplash.com/photo-1672345158827-7f4aa9467b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "벽지",
//     description: "벽지입니다.",
//     imgUrl:
//       "https://images.unsplash.com/photo-1672323064802-5d675a178369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "모자",
//     description: "모자입니다.",
//     imgUrl:
//       "https://images.unsplash.com/photo-1672262103314-7ac4db3563ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//   },
// ];

/**
 * List 252개 뿌리고, ( useEffect, useState ) useState 안에 데이터 넣고 useEffect에서 초기화
 * detail버튼 누르면 상세페이지까지 스타일은 뭐 있으면 좋고 없어도 그만
 */
// const myData = [];
// items.forEach((item) => {
//   const { title, description, imgUrl, price } = item;
//   const obj = new Product(title, description, imgUrl, price);
//   myData.push(obj);
// });

function App() {
  const { mockData } = useData();
  // const [mockData, setMockData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProductList();
  //     setMockData(res);
  //   })();
  // });

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
          </Col>
        ))}
        {/* <Col sm>
          <img
            src="https://images.unsplash.com/photo-1672345158827-7f4aa9467b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="A"
            style={{
              width: "300px",
            }}
          />
          <h4>상품명</h4>
          <p>설명</p>
        </Col>
        <Col sm>
          <img
            src="https://images.unsplash.com/photo-1672323064802-5d675a178369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            style={{
              width: "300px",
            }}
            alt="B"
          />
          <h4>상품명</h4>
          <p>설명</p>
        </Col>
        <Col sm>
          <img
            src="https://images.unsplash.com/photo-1672262103314-7ac4db3563ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            style={{
              width: "300px",
            }}
            alt="B"
          />
          <h4>상품명</h4>
          <p>설명</p>
        </Col> */}
      </Row>
    </div>
  );
}

export default App;

import { Row, Col } from "react-bootstrap";

function Main({ mockData, onDetailButtonClickEvent }) {
  return (
    <>
      <div className="Main_page">
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
              <button onClick={(e) => onDetailButtonClickEvent(e, item)}>
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

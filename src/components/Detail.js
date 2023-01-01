import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";

const Detail = () => {
  const location = useLocation();
  const { title, description, price, imgUrl } = location.state;

  return (
    <div style={{ width: "100%" }}>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Body
          style={{
            height: "30%",
            width: "30%",
          }}
        >
          <Card.Img src={imgUrl} />
          <Card.Title>제품명: {title}</Card.Title>
          <Card.Text>상세설명: {description}</Card.Text>
          <Card.Text>가격: {price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="/">Go back</a>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Detail;

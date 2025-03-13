import { Carousel, Container, Row } from "react-bootstrap";
import { useState, useEffect, useLocation } from "react";
function Detail() {
  const data = CargarDatos();
  console.log(data.carrousel);
  return (
    <Container>
      <Row>
        <Carousel></Carousel>
      </Row>
    </Container>
  );
}
function CargarDatos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/users.json?key=d58872b0")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return data;
}
export default Detail;

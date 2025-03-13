import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
      <div className="d-flex  align-items-center" style={{ height: "100vh" }}>
        <Container
          style={{
            backgroundColor: "#3f4447",
            opacity: "0.9",
            padding: "2rem",
            borderRadius: "30px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            width: "550px",
          }}
        >
          <Row>
            <Col>
              <img src="./menu.png" alt="" style={{ width: "120px" }} />
              <h4 style={{ color: "white" }}>MENU</h4>
            </Col>
            <Col>
              <img src="./store.png" alt="" style={{ width: "120px" }} />
              <h4 style={{ color: "white" }}>STORES</h4>
            </Col>
            <Col>
              <img
                src="./shopping-cart.png"
                alt=""
                style={{ width: "120px" }}
              />
              <h4 style={{ color: "white" }}>CART</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;

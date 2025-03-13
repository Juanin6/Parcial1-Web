import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const menu = "./menu.png";
  const cart = "./shopping-cart.png";
  const store = "./store.png";
  const goToDetail = () => {
    navigate("/detail");
  };
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
              <div onClick={goToDetail()} style={{ cursor: "pointer" }}>
                <img src={menu} alt="" style={{ width: "120px" }} />
                <h4 style={{ color: "white" }}>MENU</h4>
              </div>
            </Col>
            <Col>
              <div onClick={goToDetail()} style={{ cursor: "pointer" }}>
                <img src={store} alt="" style={{ width: "120px" }} />
                <h4 style={{ color: "white" }}>STORES</h4>
              </div>
            </Col>
            <Col>
              <div onClick={goToDetail()} style={{ cursor: "pointer" }}>
                <img src={cart} alt="" style={{ width: "120px" }} />

                <h4 style={{ color: "white" }}>CART</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;

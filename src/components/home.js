import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl"; // Importar react-intl

function Home({ switchLanguage }) {
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
              <button
                onClick={goToDetail}
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <img src={menu} alt="" style={{ width: "120px" }} />
                <h4 style={{ color: "white" }}>
                  <FormattedMessage id="menu" />
                </h4>
              </button>
            </Col>
            <Col>
              <div onClick={goToDetail} style={{ cursor: "pointer" }}>
                <img src={store} alt="" style={{ width: "120px" }} />
                <h4 style={{ color: "white" }}>
                  <FormattedMessage id="stores" />
                </h4>
              </div>
            </Col>
            <Col>
              <div onClick={goToDetail} style={{ cursor: "pointer" }}>
                <img src={cart} alt="" style={{ width: "120px" }} />

                <h4 style={{ color: "white" }}>
                  <FormattedMessage id="cart" />
                </h4>
              </div>
            </Col>
          </Row>
        </Container>

        <div>
          <button onClick={() => switchLanguage("es")}>ES</button>
          <button onClick={() => switchLanguage("en")}>EN</button>
        </div>
      </div>
    </div>
  );
}
export default Home;

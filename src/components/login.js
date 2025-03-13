import { Col, Container, Row, Form, Button, FormText } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/home");
  };
  return (
    <Container>
      <Row style={{ minHeight: "100vh" }}>
        <Col style={{ backgroundColor: "#fff4f4" }}>
          <h4 style={{ marginTop: "20px" }}> TOO GOOD TO GO</h4>
          <p>Food wasting solution</p>
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            style={{
              width: "300px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          />
        </Col>
        <Col style={{ backgroundColor: "#283c3c" }}>
          <div
            className="d-flex  align-items-center"
            style={{ height: "100vh" }}
          >
            <Container
              style={{
                padding: "2rem",
                borderRadius: "10px",

                width: "350px",
              }}
            >
              <Form>
                <Form.Group className="mb-3 ">
                  <Form.Control
                    style={{ backgroundColor: "transparent" }}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    style={{ backgroundColor: "transparent" }}
                    type="password"
                    minLength={5}
                    maxLength={8}
                    placeholder="Enter password"
                  />
                  <FormText>Forgot password</FormText>
                </Form.Group>
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "20px",
                    width: "100px",
                    fontWeight: "bold",
                  }}
                  onClick={submit}
                  type="submit"
                  variant="primary"
                >
                  Login
                </Button>
              </Form>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

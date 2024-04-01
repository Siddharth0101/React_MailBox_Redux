import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";
import { useState } from "react";
const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const switchHandler = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div
      style={{
        marginLeft: "200px",
        marginTop: "250px",
      }}
    >
      <Card style={{ width: "40rem", height: "400px" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {isLogin ? "LogIn" : "Register"}
          </Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                {isLogin && (
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                {isLogin && (
                  <Form.Text className="text-muted">
                    We'll never share your password with anyone else.
                  </Form.Text>
                )}
              </Form.Group>
              {!isLogin && (
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Confirm Password"
                  >
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                </Form.Group>
              )}
              <div>
                <Button style={{ width: "290px", marginRight: "20px" }}>
                  {isLogin ? "LogIn" : "Register"}
                </Button>
                <Button
                  style={{ width: "290px" }}
                  onClick={switchHandler}
                  variant="outline-secondary"
                >
                  {!isLogin ? "LogIn" : "Register"}
                </Button>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default AuthCard;

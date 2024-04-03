import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";
import { useRef, useState } from "react";
import AlertUi from "../UI/AlertUi";
import { useDispatch } from "react-redux";
import { TokenSliceActions } from "../../store/TokenSlice";
import { useNavigate } from "react-router-dom";
import { DataSliceActions } from "../../store/DataSlice";
const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passError, setPassError] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [somethingWrong, setSomethingWrong] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const switchHandler = () => {
    resetAlerts();
    setIsLogin((prevState) => !prevState);
    setPassError(false);
    setRegisterSuccess(false);
    setSomethingWrong(false);
    setEmailExist(false);
    setWrongPass(false);
  };
  const resetAlerts = () => {
    setPassError(false);
    setRegisterSuccess(false);
    setSomethingWrong(false);
    setEmailExist(false);
    setWrongPass(false);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    resetAlerts();
    if (isLogin) {
      const emailInput = emailRef.current.value;
      const passInput = passRef.current.value;
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEAIKFl4-XhkZkQpxKtuzgY4XSSj0b-ME",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: emailInput,
              password: passInput,
              returnSecureToken: true,
            }),
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          dispatch(TokenSliceActions.LogIn(responseData.idToken));
          dispatch(DataSliceActions.userEmailUpdate(responseData.email));
          localStorage.setItem("token", responseData.idToken);
          localStorage.setItem("userEmail", responseData.email);
          navigate("/inbox");
        }
        if (!response.ok) {
          if (response.status === 400) {
            setWrongPass(true);
          } else {
            setSomethingWrong(true);
          }
          return;
        }
      } catch (error) {
        setSomethingWrong(true);
      }
    } else {
      const emailInput = emailRef.current.value;
      const passInput = passRef.current.value;
      const confirmPassInput = confirmPassRef.current.value;
      if (passInput !== confirmPassInput) {
        setPassError(true);
        return;
      }
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEAIKFl4-XhkZkQpxKtuzgY4XSSj0b-ME",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: emailInput,
              password: passInput,
              returnSecureToken: true,
            }),
          }
        );
        if (!response.ok) {
          if (response.status === 400) {
            setEmailExist(true);
          } else {
            setSomethingWrong(true);
          }
          return;
        }
        if (response.ok) {
          setRegisterSuccess(true);
          return;
        }
      } catch (error) {
        setSomethingWrong(true);
      }
    }
  };
  const dismissAlerts = () => {
    setTimeout(() => {
      resetAlerts();
    }, 3000);
  };
  return (
    <div
      style={{
        marginLeft: "200px",
        marginTop: "250px",
      }}
    >
      <Card style={{ width: "40rem", height: "450px" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {isLogin ? "LogIn" : "Register"}
          </Card.Title>
          <Card.Text>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    ref={emailRef}
                  />
                </FloatingLabel>
                {isLogin && (
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={passRef}
                  />
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
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={confirmPassRef}
                    />
                  </FloatingLabel>
                </Form.Group>
              )}
              {passError && (
                <AlertUi
                  variant={"danger"}
                  heading={"Password Mismatch"}
                  body={"The passwords you've entered do not match."}
                />
              )}
              {registerSuccess && (
                <AlertUi
                  variant={"success"}
                  heading={"Registration Successful"}
                  body={
                    "Welcome aboard! Your account has been successfully created."
                  }
                />
              )}

              {somethingWrong && (
                <AlertUi
                  variant={"danger"}
                  heading={"Registration Failed"}
                  body={
                    "Oops! Something went wrong during registration. Please try again later."
                  }
                />
              )}
              {emailExist && (
                <AlertUi
                  variant={"danger"}
                  heading={"Account Already Exists"}
                  body={
                    "Sorry, it seems like you've already registered. Please try again later or log in."
                  }
                />
              )}
              {wrongPass && (
                <AlertUi
                  variant={"danger"}
                  heading={"Incorrect Password"}
                  body={
                    "Seems like you've entered the wrong password. Did you forget your password? You can reset it by clicking on 'Forgot Password'."
                  }
                />
              )}
              <div>
                <Button
                  type="submit"
                  style={{
                    width: "290px",
                    marginRight: "20px",
                    marginTop:
                      passError ||
                      registerSuccess ||
                      somethingWrong ||
                      emailExist ||
                      wrongPass
                        ? ""
                        : "50px",
                  }}
                  onClick={dismissAlerts}
                >
                  {isLogin ? "LogIn" : "Register"}
                </Button>
                <Button
                  style={{
                    width: "290px",
                    marginTop:
                      passError ||
                      registerSuccess ||
                      somethingWrong ||
                      emailExist ||
                      wrongPass
                        ? ""
                        : "50px",
                  }}
                  onClick={switchHandler}
                  variant="outline-secondary"
                >
                  {!isLogin ? "LogIn" : "Register"}
                </Button>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
        {isLogin && (
          <div>
            <Button variant="outline-dark" style={{ width: "638px" }}>
              Forgot Passwrd?
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};
export default AuthCard;

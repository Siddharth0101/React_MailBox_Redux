import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Outlet } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const toggleHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      <Navbar key={true} expand={false} className="bg-dark mb-3 ">
        <Container fluid>
          <Navbar.Brand style={{ color: "whitesmoke" }}>
            <h4>Mail Box</h4>
          </Navbar.Brand>
          <div style={{ marginLeft: "1100px" }}>
            <NavLink to="/auth">
              <Button variant="outline-warning">Register</Button>
              <Button variant="outline-warning" style={{ marginLeft: "20px" }}>
                Log In
              </Button>
            </NavLink>
          </div>
          <div style={{ position: "fixed", bottom: 20, right: 20 }}>
            <NavLink to="/compose">
              <Button variant="outline-dark">Compose</Button>
            </NavLink>
          </div>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${false}`}
            onClick={toggleHandler}
            className="bg-light"
          />
          {show && (
            <Navbar.Offcanvas
              show={show}
              onHide={() => setShow(false)}
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Mail
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav defaultActiveKey="/home" className="dark">
                    <Nav.Item>
                      <NavLink
                        to="/inbox"
                        className="nav-link"
                        style={{ marginBottom: "20px" }}
                      >
                        <Button
                          variant="outline-dark"
                          style={{ width: "350px" }}
                          onClick={toggleHandler}
                        >
                          Inbox
                        </Button>
                      </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                      <NavLink
                        to="/draft"
                        className="nav-link"
                        style={{ marginBottom: "10px" }}
                      >
                        <Button
                          variant="outline-dark"
                          style={{ width: "350px" }}
                        >
                          Draft
                        </Button>
                      </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                      <NavLink to="/send" className="nav-link">
                        <Button
                          variant="outline-dark"
                          style={{ width: "350px" }}
                        >
                          Send
                        </Button>
                      </NavLink>
                    </Nav.Item>
                  </Nav>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          )}
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};
export default Header;

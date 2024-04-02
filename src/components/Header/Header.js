import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Outlet } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const toggleHandler = () => setShow(!show);

  const handleSend = () => {
    // Logic to send email with recipient, subject, and content
    console.log("Sending email...");
    handleClose();
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Compose</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="recipient">
              <FloatingLabel controlId="floatingInput" label="To">
                <Form.Control
                  type="email"
                  placeholder="Recipient email"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="subject">
              <FloatingLabel controlId="floatingInput" label="Subject">
                <Form.Control
                  type="text"
                  placeholder="Email subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                placeholder="Compose your email..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
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
            <Button variant="outline-dark" onClick={handleShow}>
              Compose
            </Button>
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
                          onClick={toggleHandler}
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
                          onClick={toggleHandler}
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

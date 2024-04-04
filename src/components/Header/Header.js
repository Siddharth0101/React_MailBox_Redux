import { useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { TokenSliceActions } from "../../store/TokenSlice";
import { DataSliceActions } from "../../store/DataSlice";
const Header = () => {
  const isLogin = useSelector((state) => state.LogInStore.isLogged);
  const userEmail = useSelector((state) => state.Data.userEmail);
  const sendEmailFrom = useSelector((state) => state.Data.sendEmailFrom);
  const [content, setContent] = useState("");
  const quillRef = useRef(null);
  const emailRef = useRef();
  const subjectRef = useRef();
  const dispatch = useDispatch();
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const toggleHandler = () => {
    setShow(!show);
  };
  const handleSend = () => {
    const emailInput = emailRef.current.value;
    const subjectInput = subjectRef.current.value;
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const unprivilegedEditor =
        quillRef.current.makeUnprivilegedEditor(editor);
      const text = unprivilegedEditor.getText().trim();
      const composedata = {
        id: Math.random(),
        forDraft: false,
        sendEmailFrom: userEmail,
        sendEmailTo: emailInput,
        Email: emailInput,
        Subject: subjectInput,
        Description: text,
      };
      dispatch(DataSliceActions.addItems(composedata));
    }
    handleClose();
    setContent("");
  };
  const saveDraft = () => {
    const emailInput = emailRef.current.value;
    const subjectInput = subjectRef.current.value;
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const unprivilegedEditor =
        quillRef.current.makeUnprivilegedEditor(editor);
      const text = unprivilegedEditor.getText().trim();
      const composedata = {
        id: Math.random(),
        forDraft: true,
        sendEmailFrom: userEmail,
        sendEmailTo: emailInput,
        Email: emailInput,
        Subject: subjectInput,
        Description: text,
      };
      dispatch(DataSliceActions.addItems(composedata));
    }
    handleClose();
    setContent("");
  };
  const logOutHandler = () => {
    dispatch(TokenSliceActions.LogOut());
    localStorage.removeItem("token");
    localStorage.removeItem("currentEmail");
  };
  return (
    <div>
      <div>
        <Modal
          show={showModal}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Compose
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Subject"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    ref={subjectRef}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className="compose-container">
                  <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                    placeholder="Compose your email..."
                    ref={quillRef}
                  />
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="outline-secondary"
              onClick={handleClose}
              style={{ marginRight: "50px", width: "300px" }}
            >
              Close
            </Button>
            <Button
              variant="outline-primary"
              style={{ width: "300px", marginRight: "65px" }}
              onClick={saveDraft}
            >
              Save
            </Button>
          </Modal.Footer>
          <Button variant="outline-success" onClick={handleSend}>
            Send Mail
          </Button>
        </Modal>
      </div>
      <Navbar key={true} expand={false} className="bg-dark mb-3 ">
        <Container fluid>
          <Navbar.Brand style={{ color: "whitesmoke" }}>
            <h4>Mail Box</h4>
          </Navbar.Brand>
          {!isLogin && (
            <div>
              <NavLink to="/auth">
                <Button
                  variant="outline-warning"
                  style={{ marginRight: "10px" }}
                >
                  Register
                </Button>
                <Button
                  variant="outline-warning"
                  style={{ marginRight: "150px" }}
                >
                  Log In
                </Button>
              </NavLink>
            </div>
          )}
          {isLogin && (
            <div>
              <NavLink to="/auth">
                <Button
                  variant="outline-danger"
                  style={{ marginLeft: "1300px" }}
                  onClick={logOutHandler}
                >
                  Log Out
                </Button>
              </NavLink>
            </div>
          )}
          {isLogin && (
            <div style={{ position: "fixed", bottom: 20, right: 20 }}>
              <Button variant="outline-dark" onClick={handleShow}>
                Compose
              </Button>
            </div>
          )}
          {isLogin && (
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${false}`}
              onClick={toggleHandler}
              className="bg-light"
            />
          )}
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

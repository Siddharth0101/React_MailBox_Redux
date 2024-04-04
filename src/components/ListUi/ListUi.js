import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataSliceActions } from "../../store/DataSlice";
const ListUi = (props) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const handleItemClick = () => {
    setClicked(true);
  };
  const handleDelete = (id) => {
    dispatch(DataSliceActions.deleteItem(id));
  };
  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item
          action
          variant={clicked ? "success" : "dark"}
          onClick={handleItemClick}
        >
          <Accordion variant="dark">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Container>
                  <Row>
                    <Col>{props.email}</Col>
                    <Col>{props.subject}</Col>
                  </Row>
                </Container>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(props.id)}
                >
                  Delete
                </Button>
              </Accordion.Header>
              <Accordion.Body>{props.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default ListUi;

import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
const ListUi = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleItemClick = () => {
    setClicked(true);
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

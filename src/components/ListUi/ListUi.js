import ListGroup from "react-bootstrap/ListGroup";
const ListUi = () => {
  return (
    <div>
      <ListGroup variant="flush" numbered>
        <ListGroup.Item action variant="dark">
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Morbi leo risus
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default ListUi;

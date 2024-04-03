import Card from "react-bootstrap/Card";
const Inbox = () => {
  return (
    <div>
      <Card
        style={{
          width: "105rem",
          backgroundColor: "#E6E6FA",
          marginLeft: "16px",
          height: "700px",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>Inbox</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Inbox;

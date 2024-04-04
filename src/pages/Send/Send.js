import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListUi from "../../components/ListUi/ListUi";
const Send = () => {
  const items = useSelector((state) => state.Data.items);
  const userEmail = useSelector((state) => state.Data.userEmail);
  return (
    <div
      style={{
        backgroundColor: "#9575CD",
        height: "91vh",
        display: "flex",
      }}
    >
      <Card
        style={{
          width: "105rem",
          backgroundColor: "#E6E6FA",
          marginLeft: "16px",
          height: "700px",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <strong>Send</strong>
          </Card.Title>
          <Card.Text>
            {items.map((item) => {
              if (userEmail == item.sendEmailFrom && item.forDraft == false) {
                return (
                  <ListUi
                    key={item.id}
                    id={item.id}
                    variant={item.clicked}
                    email={item.sendEmailTo}
                    subject={item.Subject}
                    description={item.Description}
                  />
                );
              }
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Send;

import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListUi from "../../components/ListUi/ListUi";
const Send = () => {
  const items = useSelector((state) => state.Data.items);
  const userEmail = useSelector((state) => state.Data.userEmail);
  const sendEmailFrom = useSelector((state) => state.Data.sendEmailFrom);
  const sendEmailTo = useSelector((state) => state.Data.sendEmailTo);
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
          <Card.Title style={{ textAlign: "center" }}>Send</Card.Title>
          <Card.Text>
            {items.map((item) => {
              if (item.userEmail == item.sendEmailFrom) {
                return (
                  <ListUi
                    key={item.id}
                    id={item.id}
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

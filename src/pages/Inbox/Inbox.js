import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListUi from "../../components/ListUi/ListUi";
const Inbox = () => {
  const items = useSelector((state) => state.Data.items);
  const userEmail = useSelector((state) => state.Data.userEmail);
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
            {items.map((item) => {
              console.log(userEmail);
              // console.log(item.sendEmailTo);
              if (userEmail === item.sendEmailTo && item.forDraft == false) {
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
export default Inbox;

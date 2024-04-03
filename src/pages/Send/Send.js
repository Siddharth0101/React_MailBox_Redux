import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListUi from "../../components/ListUi/ListUi";
const Send = () => {
  const items = useSelector((state) => state.Data.items);
  const userEmail = useSelector((state) => state.Data.userEmail);
  const sendEmailFrom = useSelector((state) => state.Data.sendEmailFrom);
  const sendEmailTo = useSelector((state) => state.Data.sendEmailTo);
  console.log(items);
  // items.map((items) => {
  //   if (items.userEmail == items.sendEmailFrom) {
  //     console.log(items);
  //   }
  // });
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
            <ListUi />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Send;

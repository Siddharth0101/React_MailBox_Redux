import Carousel from "react-bootstrap/Carousel";
import imageCaro1 from "../../images/shield.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
const AuthCarousels = () => {
  return (
    <div
      style={{
        marginTop: "250px",
        marginBottom: "20px",
        marginRight: "190px",
        maxHeight: "51.5vh",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <Carousel>
        <Carousel.Item>
          <Figure>
            <Figure.Image width={800} height={180} src={imageCaro1} />
          </Figure>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Figure>
            <Figure.Image width={800} height={180} src={imageCaro1} />
          </Figure>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Figure>
            <Figure.Image width={800} height={180} src={imageCaro1} />
          </Figure>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default AuthCarousels;

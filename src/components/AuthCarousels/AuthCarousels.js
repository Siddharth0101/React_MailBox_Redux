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
        maxHeight: "46vh",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <Carousel>
        <Carousel.Item>
          <Figure>
            <Figure.Image
              width={400}
              height={180}
              alt="171x180"
              src={imageCaro1}
            />
          </Figure>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Figure>
            <Figure.Image
              width={400}
              height={180}
              alt="171x180"
              src={imageCaro1}
            />
          </Figure>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Figure>
            <Figure.Image
              width={400}
              height={180}
              alt="171x180"
              src={imageCaro1}
            />
          </Figure>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default AuthCarousels;

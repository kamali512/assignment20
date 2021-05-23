import Image1 from "../assets/image4.jpg"
import Image2 from "../assets/image5.jpg"
import Image3 from "../assets/image7.jpg"
import {Carousel} from "react-bootstrap"
export default function Slider() {
    return(
        <div>
           <Carousel fade>
  <Carousel.Item>
    <img className="d-block w-100" src={Image1} alt="First slide" height="300px"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Image2} alt="Second slide" height="300px"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Image3} alt="Third slide" height="300px" />
    <Carousel.Caption>
      <h3 style={{color:"black"}}>50% Discount</h3>
      <p style={{color:"black"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
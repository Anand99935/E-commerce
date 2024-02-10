import Carousel from 'react-bootstrap/Carousel';
import logo from './img1.jpg'
import logo1 from './img2.jpg'
import logo2 from './img3.jpg'
import logo3 from './img4.jpg'

function Home ()
{
 return (
    <div>
     <Carousel>
      <Carousel.Item>
        <img src={logo}  height={600} width="100%"></img>
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={logo1}  height={600} width="100%"></img>
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={logo2} height={600} width="100%"></img>
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={logo3}  height={600} width="100%"></img>
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
 )  
}
export default Home 
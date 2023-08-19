import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';




function UncontrolledExample() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src='https://images.stopgame.ru/games/logos/28772/c1280x412/sUpUHDxQVliYRPMVhEHkBQ/atomic_heart_annihilation_instinct-hero.jpg' style={{width: "1440px"}}/>
        <Carousel.Caption>
          <h2>Лучшие игры</h2>
          <h4>за последние 30 дней</h4>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <h1>Atomic Heart: Annihilation Instinct</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images.stopgame.ru/games/logos/23537/c1280x412/8OKeVo99gRjZ-40aOQRp7w/remnant_2-hero_2.jpg' style={{width: "1440px"}}/>
        <Carousel.Caption>
        <h2>Лучшие игры</h2>
          <h4>за последние 30 дней</h4>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <h1>Remnant 2</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images.stopgame.ru/games/logos/19092/c1280x412/sR3DTqWSHciEoopuoZKKqw/baldur_s_gate_iii-hero.jpg' style={{width: "1440px"}}/>
        <Carousel.Caption>
        <h2>Лучшие игры</h2>
          <h4>за последние 30 дней</h4>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <h1>Baldur’s Gate III</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="./img/post2.png" thumbnail style={{width: "250px", height: "250px"}}/>
        </Col>

        <Col xs={6} md={4}>
          <Image src="./img/post2.png" thumbnail style={{width: "250px", height: "250px"}}/>
        </Col>
        
        <Col xs={6} md={4}>
          <Image src="./img/post2.png" thumbnail style={{width: "250px", height: "250px"}}/>
        </Col>

        <Col xs={6} md={4}>
          <Image src="./img/post2.png" thumbnail style={{width: "250px", height: "250px"}}/>
        </Col>

        <Col xs={6} md={4}>
          <Image src="./img/post2.png" thumbnail style={{width: "250px", height: "250px"}}/>
        </Col>
          
      </Row>
    </Container>
    </>
    


  );
}





export default UncontrolledExample;









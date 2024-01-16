import HomeSlider from './HomeSlider'
import Header from './Header'
import Footer from './Footer'
import Product from './Product'
import { Container, Row, Col, Image, Table  } from 'react-bootstrap'
import book1 from './images/book1.jpg'
import book2 from './images/book2.jpg'
import book3 from './images/book3.jpg'
import book4 from './images/book4.jpg'
import book5 from './images/book5.jpg'
import book6 from './images/book6.jpg'
import electronics1 from './images/electronics2.webp'
import electronics3 from './images/electronics3.webp'
import electronics4 from './images/electronics4.webp'
import electronics5 from './images/electronics5.webp'
import electronics6 from './images/electronics6.webp'
import electronics7 from './images/electronics7.webp'
import electronics8 from './images/electronics8.webp'
import electronics9 from './images/electronics9.webp'
import electronics10 from './images/electronics10.webp'
import electronics11 from './images/electronics11.webp'
import electronics12 from './images/electronics12.webp'
import art1 from './images/art1.jpg'
import art2 from './images/art2.jpg'
import art3 from './images/art3.jpg'
import art4 from './images/art4.jpg'
import art5 from './images/art5.jpg'
import art6 from './images/art6.jpg'
import art7 from './images/art7.jpg'
import industrial2 from './images/industrial2.jpg'
import industrial3 from './images/industrial3.jpg'
import industrial4 from './images/industrial4.jpg'
import industrial5 from './images/industrial5.jpg'
import industrial6 from './images/industrial6.jpg'
import industrial8 from './images/industrial8.jpg'
import industrial9 from './images/industrial9.jpg'
import industrial10 from './images/industrial10.jpg'
import industrial11 from './images/industrial11.jpg'

function Home() {
  const pageNotAvailable = () => {
    alert("Page Not Available")
  }
  
  return (
      <div>
        <Header />
        <HomeSlider />
        <Container fluid className="py-2">
          <Row>
            <Col>
              <Product 
                id="0001"
                title="The Noise: The Last Sound You'll Ever Hear"
                subtitle="James Patterson, J. D. Barker"
                type="Hardcover"
                price={17.84}
                rating={4}
                image={book1}
              />
            </Col>
            <Col>
             <Product 
                id="0002"
                title="Paper Mate Pink Pearl Erasers 12 Pieces Inside"
                subtitle="by Paper Mate"
                type=""
                price={2.59}
                rating={4}
                image={art6}
             />
            </Col>
          </Row>
          <Row>
            <Col>
              <Product 
                id="0003"
                title="TOZO T6 True Wireless Earbuds"
                subtitle="by TOZO"
                type=""
                price={500.99}
                rating={5}
                image={electronics1}
              />
            </Col>
            <Col>
             <Product 
                id="0004"
                title="Crayola Crayons 24 ct (Pack of 2)"
                subtitle="by Crayola"
                type=""
                price={6.98}
                rating={5}
                image={art1}
             />
            </Col>
            <Col md={4} xs={6}>
             <Product 
                id="0005"
                title="Presto! Flex-a-Size Paper Towels"
                subtitle="by Presto"
                type=""
                price={25.29}
                rating={3}
                image={industrial2}
             />
            </Col>
            <Col md={12} xs={6}>
             <Product 
                id="0006"
                title="Wyze Cam v3 with Color Night Vision"
                subtitle="by Wyze"
                type=""
                price={1000.98}
                rating={5}
                image={electronics6}
             />
            </Col>
          </Row>
        </Container>
        <Container fluid className="bg-white pt-3 mb-3">
          <div className="d-flex align-items-center ms-2">
            <p className="fs-6 my-0">Best Selling Books</p>
            <small onClick={ pageNotAvailable }>
              <a href="" className="text-decoration-none ms-3">shop now</a>
            </small>
          </div>
          <Table borderless responsive="lg">
            <tbody>
                <tr>
                  <td>
                    <Image 
                      src={book1} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={book2} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={book3} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={book4} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={book5} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={book6} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={book3} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                </tr>
            </tbody>
          </Table>
        </Container>
        <Container fluid className="bg-white pt-3 mb-3">
          <div className="d-flex align-items-center ms-2">
            <p className="fs-6 my-0">Top Selling Electronics</p>
            <small onClick={ pageNotAvailable }>
              <a href="" className="text-decoration-none ms-3">shop now</a>
            </small>
          </div>
          <Table borderless responsive="lg">
            <tbody>
                <tr>
                  <td>
                    <Image 
                      src={electronics1} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics7} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics3} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics4} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics5} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics6} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics7} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics8} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics9} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics10} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics11} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={electronics12} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                </tr>
            </tbody>
          </Table>
        </Container>
        <Container fluid className="bg-white pt-3 mb-3">
          <div className="d-flex align-items-center ms-2">
            <p className="fs-6 my-0">Art & Craft</p>
            <small onClick={ pageNotAvailable }>
              <a href="" className="text-decoration-none ms-3">shop now</a>
            </small>
          </div>
          <Table borderless responsive="lg">
            <tbody>
                <tr>
                  <td>
                    <Image 
                      src={art1} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={art2} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={art3} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={art4} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={art5} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={art6} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={art7} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={art4} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={art1} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                </tr>
            </tbody>
          </Table>
        </Container>
        <Container fluid className="bg-white pt-3 mb-3">
          <div className="d-flex align-items-center ms-2">
            <p className="fs-6 my-0">Industrial & Scientific</p>
            <small onClick={ pageNotAvailable }>
              <a href="" className="text-decoration-none ms-3">shop now</a>
            </small>
          </div>
          <Table borderless responsive="lg">
            <tbody>
                <tr>
                  <td>
                    <Image 
                      src={industrial2} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial3} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial4} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial5} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial6} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial8} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial9} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial10} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial11} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                  <td>
                    <Image 
                      src={industrial2} 
                      alt="" 
                      style={{
                        height: "10rem", 
                        width: "auto"
                      }}
                    />
                  </td>
                </tr>
            </tbody>
          </Table>
        </Container>
        <Footer />
      </div>
  )
}

export default Home
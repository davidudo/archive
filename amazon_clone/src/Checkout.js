import Header from './Header'
import Footer from './Footer'
import kettle from './images/kettle.svg'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Subtotal from './Subtotal'
import banner from './images/banner.jpg'
import book1 from './images/book1.jpg'
import CheckoutProducts from './CheckoutProducts'
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const [{cart, user}, dispatch] = useStateValue()
  const navigate = useNavigate()
  
  const emptyCart = cart?.length == 0
  
  return (
        <div>
          <Header />
          { !emptyCart ? (
          <Container fluid className="py-3">
            <Row className="mx-2">
              <Col className="ms-0" sm={7}>
                <img 
                  src={ banner }
                  style={{ height: "70px", width: "100%"}}
                />
                <div class="my-2">
                  <h4>Hello,</h4>
                  <h4>{ user?.email }</h4>
                </div>
                <div class="border-bottom border-3 py-2">
                  <h2>Your Shopping Cart</h2>
                </div>
                {cart.map(item => (
                 <CheckoutProducts 
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  type={item.type}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                 />
                ))}
              </Col>
              <Col sm={5} className="bg-light pt-3 py-2" style={{maxHeight: "180px"}} >
                <Subtotal />
                <div className="d-grid">
                  <Button
                    variant="warning"
                    size="lg"
                    style={{
                      fontSize: "0.9rem",
                    }}
                    className="my-3"
                    onClick={e => navigate('/payment')}
                  >
                   Proceed to Checkout
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          ) : 
          (
          <div className="bg-white m-5 p-4">
            <Row>
              <Col sm={4}>
                <img src={kettle} />
              </Col>
              <Col sm={8}>
                <h2>Your Amazon Cart is empty</h2>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h5>Shop today's deals</h5>
                </Link>
                <Link to='/login' style={{ textDecoration: "none" }}>
                 { !user ? (
                  <div className="d-grid mt-3" >
                    <Button 
                      variant="warning"
                      size="lg"
                      style={{
                        fontSize: "0.9rem",
                      }}
                     >
                      Sign in to your account
                    </Button>
                 </div>
                 ) : ("")}
                </Link>
              </Col>
            </Row>
          </div>
          )}
          <Footer />
        </div>
  )
}

export default Checkout
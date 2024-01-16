import CurrencyFormat from 'react-currency-format'
import { Card, Button, Row, Col } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import CheckoutProducts from './CheckoutProducts'
import { useStateValue } from './StateProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useState, useEffect } from 'react'
import { getCartTotal } from './reducer'
import { useNavigate } from 'react-router-dom'
import axios from './axios'
import { db } from './firebase'
import { collection, doc, setDoc } from "firebase/firestore"



function Payment() {
  const [{cart, user}, dispatch] = useStateValue()
  
  const navigate = useNavigate()
  
  const stripe = useStripe()
  const elements = useElements()
  
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)
  
  useEffect(() => {
    //generate special stripe secret
    const getClientSecret = async () => {
      const response = await axios ({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    
    getClientSecret()
  }, [cart])
  
  const handleSubmit = async(event) => {
    event.preventDefault()
    setProcessing(true)
    
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
        // payment Intent = payment confirmation
        const userRef = collection(db, 'users')
        const userDocRef = doc(userRef, user?.uid)
        const orderRef = collection(userDocRef, 'orders')
        const orderDocRef = doc(orderRef, paymentIntent.id)
      
        setDoc(orderDocRef, {
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })
      
      setSucceeded(true)
      setError(null)
      setProcessing(false)
      
      dispatch({
        type: 'EMPTY_CART'
      })
      
      navigate('/orders', { replace: true })
    })
  }
  
  const handleChange = event => {
    setDisabled(event.empty)
    setError(event.error ? event.message : "")
  }
  
  return (
        <div>
          <Header />
          <div className="d-flex justify-content-center py-3">
            <h2>Checkout ({cart?.length} items)</h2>
          </div>
          <div className="p-3 bg-white">
            <Row>
              <Col sm={3}>
                <p className="fs-5">Delivery Address</p>
              </Col>
              <Col sm={9}>
                <p>{ user?.email }</p>
                <p>Nō 1 Bruce Wayne Street,</p>
                <p>Gotham City, NG</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm={3}>
                <p className="mt-2 fs-5">Review Delivery Item(s)</p>
              </Col>
              <Col sm={9}>
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
            </Row>
            <hr/>
            <Row className="mb-4 pt-3">
              <Col sm={3}>
                <p className="fs-5">Payment Method</p>
              </Col>
              <Col sm={9}>
                <p>Card Details</p>
                <form>
                  <div style={{ maxWidth: '30rem' }}>
                    <CardElement 
                      onChange={handleChange}
                    />
                  </div>
                  <Card style={{ maxWidth: '30rem' }} className="border-secondary border-1 mt-3">
                    <Card.Body>
                      <CurrencyFormat
                        renderText={(value) => 
                          <>
                            <Card.Title>Order Total: {value}</Card.Title>
                          </>
                        }
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                      <div className="d-grid mt-3">
                        <Button 
                          variant="warning"
                          size="lg"
                          style={{
                            fontSize: "0.9rem",
                          }}
                          onClick={ handleSubmit }
                          disabled={processing || disabled || succeeded}
                         >
                          {processing ? "Processing" : "Buy Now"}
                        </Button>
                      </div>
                    </Card.Body>
                    {error && <div>{error}</div>}
                  </Card>
                </form>
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
  )
}

export default Payment
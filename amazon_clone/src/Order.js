import OrderItem from './OrderItem'
import Header from './Header'
import Footer from './Footer'
import kettle from './images/kettle.svg'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import { db } from './firebase'
import { query, onSnapshot, collection, doc, orderBy } from "firebase/firestore";

function Order() {
  const [{ cart, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])
  
  const emptyOrders = orders?.length == 0
  
  useEffect(() => {
    if(user) {
      const userRef = collection(db, 'users')
      const userDocRef = doc(userRef, user?.uid)
      const orderRef = collection(userDocRef, 'orders')
      const q = query(orderRef, orderBy("created", "desc"))
      onSnapshot(q, snapshot => {
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
         setOrders(data)
       })
    } else {
       setOrders([])
    }
  }, [user])
  
  return (
        <>
          <Header />
          { !emptyOrders ? (
          <Container className="mt-3">
            <div>
              <div>
                <h1>Your Orders</h1>
              </div>
              <div className="mb-4">
                {orders?.map(order => (
                  <OrderItem order={ order } />
                ))}
              </div>
            </div>
          </Container>
          ) : (
            <div className="bg-white m-5 p-4">
              <Row>
                <Col sm={4}>
                  <img src={kettle} />
                </Col>
                <Col sm={8}>
                  <h2>You haven't made any order</h2>
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
        </>
  )
}

export default Order
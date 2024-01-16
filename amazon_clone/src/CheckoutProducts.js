import { Card, Button, Row, Col } from 'react-bootstrap'
import book1 from './images/book1.jpg'
import { Star } from '@material-ui/icons'
import { useStateValue } from './StateProvider'

function CheckoutProducts({ id, title, subtitle, rating, price, image, hideButton }) {
 
  const [{cart}, dispatch] = useStateValue()
  
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }
  
  return (
        <div>
          <Card className="my-4 lh-1">
            <Row className="px-3 py-2">
              <Col sm={4}>
                <div className="d-flex justify-content-center py-3 ps-4">
                  <Card.Img 
                    src={image}
                    style={{height: "auto", width: "10rem"}}
                  />
               </div> 
              </Col>
              <Col sm={8}>
              <Card.Body>
                <Card.Title style={{fontSize: "0.9rem"}}>
                  {title}
                </Card.Title>
                <Card.Subtitle 
                  className="text-secondary"
                  style={{fontSize: "0.7rem"}}
                >
                  {subtitle}
                </Card.Subtitle>
                <Card.Text 
                  className="text-secondary" 
                  style={{
                    marginBottom: "-12px"
                  }}
                >
                  <p className="mt-1">
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <Star 
                          fontSize="small"
                          style={{ color: "#FF9900" }}
                        />
                    ))}
                  </p>
                </Card.Text>
                <Card.Text>
                  <p>
                    <small 
                      style={{fontSize: "0.6rem",}}
                    >
                      $
                    </small>
                    <strong>{price}</strong>
                  </p>
                </Card.Text>
                
                { !hideButton && (
                <div 
                  className="d-grid mt-3"
                >
                    <Button 
                      variant="warning"
                      size="lg"
                      style={{
                        fontSize: "0.9rem",
                      }}
                      onClick = {removeFromCart}
                     >
                      Remove from Cart
                    </Button>
                </div>
                )}
              </Card.Body>
             </Col>
            </Row>
          </Card>
        </div>
  )
}

export default CheckoutProducts
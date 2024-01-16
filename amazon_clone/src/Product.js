import { Card, Button } from 'react-bootstrap'
import book1 from './images/book1.jpg'
import { Star } from '@material-ui/icons'
import { useStateValue } from './StateProvider'

function Product({id, title, subtitle, rating, price, image}) {
  const [{cart}, dispatch] = useStateValue()
  
  const addToCart = () => {
    //Distach some action into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        title: title,
        subtitle: subtitle,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }
  
  return (
    <div>
      <Card className="my-2 lh-1">
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
          <div className="d-flex justify-content-center">
            <Card.Img 
              src={image}
              style={{height: "7rem", width: "auto"}}
            />
          </div>
          <div 
            style={{maxWidth: "200px"}} 
            className="d-grid mt-3 mx-auto"
          >
              <Button 
                variant="warning"
                size="lg"
                style={{
                  fontSize: "0.9rem",
                }}
                onClick={addToCart}
               >
                Add to Cart
              </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
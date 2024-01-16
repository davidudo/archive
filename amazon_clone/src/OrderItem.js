import CurrencyFormat from 'react-currency-format'
import CheckoutProducts from './CheckoutProducts'
import moment from "moment"

function OrderItem({ order }) {
  return (
        <div className="bg-white p-4 mt-4">
          <div>
            <div className="d-flex justify-content-between">
              <h2>Order</h2>
              <p className="text-secondary">{order.id}</p>
            </div>
            <p className="fs-4">{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
          </div>
          <div>
            {order.data.cart?.map(item => (
             <CheckoutProducts 
              title={item?.title}
              subtitle={item?.subtitle}
              price={item?.price}
              rating={item?.rating}
              image={item?.image}
              hideButton
             />
            ))}
          </div>
          <div className="d-flex justify-content-end">
            <CurrencyFormat
              renderText={(value) => 
                <>
                  <h4>Order Total: {value}</h4>
                </>
              }
              decimalScale={2}
              value={order.data.amount / 100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </div>
  )
}

export default OrderItem
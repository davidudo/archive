import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'

function Subtotal() {
  const [{cart}, dispatch] = useStateValue()
  
  return (
        <div >
        <CurrencyFormat
          renderText={(value) => 
            <>
              <p>
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
            </>
          }
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        </div>
  )
}

export default Subtotal
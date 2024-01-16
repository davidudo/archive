import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import Order from './Order'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth"
import { useStateValue } from './StateProvider'
import { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51K2l9sJlndELuRW7EWNIyAoFQl5hX7bVd0HQ0MRWUHxAUNyDgqhmStpNOKIyftk7fpHQBNDMbrAVcGvs0OF0jqGZ00ID8sRcFQ')


function App() {
  const [{}, dispatch] = useStateValue()
  
  useEffect(() => {
      // will only run once when the app component loads...
  
      onAuthStateChanged(auth, (authUser) => {
        console.log("THE USER IS >>> ", authUser);
  
        if (authUser) {
          // the user just logged in / the user was logged in
          dispatch({
            type: "SET_USER",
            user: authUser,
          })
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          })
        }
      })
    }, [])
  
  return (
    <div className="app">
      <BrowserRouter>
       <Routes>
         <Route path="checkout" element={<Checkout />} />
         <Route path="login" element={<Login />} />
         <Route path="payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
         } />
         <Route path="orders" element={<Order />} />
         <Route path="/" element={<Home />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51K2l9sJlndELuRW7N3yqoPlDwsefiBi0acAq8345G2eR2ZUB9k2112Vs6qO2e1Vj4XsDsGsXKxlCAfLyo9eA7B9Y00KzSA5yi5")

//API

//App config
const app = express()

//Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    
    console.log("payment request received for ", total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    })
    
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/clone-dc4d5/us-central1/api
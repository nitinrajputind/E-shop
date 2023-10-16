const express = require('express')
const connectDB = require("./db/config")
const defaultData = require('./defaultData')
const routes = require('./routes/routes')
require("dotenv").config()
const cors = require('cors')

const stripe = require("stripe")(
    "sk_test_51NCPAYSItp4zxD80PCrgYV6cRYLmwUc81t7SAAPTjv2j5eV4AU2H2rVbn1CCndSbHnny1EjvRhgwtEnayvKWhgsI00ioNI6LME"
  );



const app = express()
const PORT = process.env.PORT 

app.use(cors({
    origin : "*"
}))

const startConnection = async ()=>{
    try{
        await connectDB(process.env.DB_URI)
        app.listen(PORT, () => {
            console.log(`Server is Runing on http://localhost:${PORT}`)
        })
        defaultData()
        
    }
    catch(err){
        console.log(`Database is showing Error ${err.message}`)
    }
}

startConnection()

app.use(express.json())
app.use("/",routes)




// Payment Gateway 

app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    console.log(products)
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
        },
        unit_amount:product.price * 100,
      },
      quantity: product.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://e-shop-seven-gamma.vercel.app/Sucess",
      cancel_url: "https://e-shop-seven-gamma.vercel.app/Cancel",
  
    });
    res.json({id:session.id})
  });
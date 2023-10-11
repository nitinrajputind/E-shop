const PRODUCTS = require("../model/productSchema")

// Send All products from DB 

const allproducts = async (req, res)=>{
    try{
        const productsData = await PRODUCTS.find()
        // console.log(productsData)
        res.status(201).send(productsData)
    }catch(err){
        console.log("Error to send data on frontend :" + err.message)
    }
}

module.exports = allproducts

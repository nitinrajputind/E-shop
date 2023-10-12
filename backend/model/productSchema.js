const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ID: Number,
  Name: String,
  deatilname:String,
  Image:String,
  Saleprice: String,
  MRP: String,
  Rating: String,
  Availabeoffer1: String,
  Availabeoffer2:String,
  Availabeoffer3:String,
  Availabeoffer4: String,
  Delivery: String,
  Warranty: String,
  quantity: String,
  category: String,
  brandname : String,
});


const PRODUCTS = new mongoose.model("PRODUCT" , productSchema);

module.exports = PRODUCTS

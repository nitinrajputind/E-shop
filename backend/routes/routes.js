const allproducts = require("../controller/allproducts");

const routes = require("express").Router();

// getAll products
routes.get("/getAllProducts", allproducts)

module.exports = routes
const allproducts = require("../controller/allproducts");
const { register, login, searchproduct, dashboard } = require("../controller/userController");
const userAuth = require("../middleware/auth_middle");
const routes = require("express").Router();


// getAll products
routes.get("/getAllProducts", allproducts)

// register User
routes.post("/register", register)

// login User
routes.post("/login", login)

// search products 
routes.post("/search", searchproduct)

// Auth Checking 
routes.get("/dashboard",userAuth , dashboard);




module.exports = routes
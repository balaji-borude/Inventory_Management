/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

// controller import
const { getProducts, createProduct, deleteProduct,updateProduct } = require("../controller/ProductController.js");

// middleware import
const {auth} = require("../middleware/auth");

// routes
router.get("/getProducts", getProducts);              
router.post("/createProduct", createProduct);          
router.put("/updateProduct/:id", auth, updateProduct);
router.delete("/deleteProduct/:id", auth, deleteProduct); 

module.exports = router;

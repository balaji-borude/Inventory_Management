/* eslint-disable no-undef */

const Product = require("../model/Product")


//  Create new product
exports.createProduct = async (req, res) => {

  try {
    const { name, quantity, price, category, imageUrl } = req.body;
    console.log("entering in create Product")
    if (!name || !quantity || !price || !category) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
    });
    }

    console.log("entering in create Product -- 2")

    const product = await Product.create({
      name,
      quantity,
      price,
      category,
      imageUrl
    });

    res.status(200).json({ 
        success: true, 
        message: "Product is Created succesfully ", 
        data: product 
    });

  } catch (err) {
    res.status(500).json({ 
        success: false, 
        message: "Error in creating product", 
        error: err 
    });
  }
};

// Get all products
exports.getProducts = async (req, res) => {

    try {
      const products = await Product.find();
  
      res.status(200).json({ 
          success: true, 
          data: products 
      });
  
    } catch (err) {
      res.status(500).json({
          success: false, 
          message: "Error in fetching all product  ", 
          error: err 
      });
    }
  };


// update Progduct --> check this 
exports.updateProduct = async (req, res) => {
  try {

    const { id } = req.params;

    const checkProductPresent = await Product.findById({_id:id});
    if(!checkProductPresent){
      return res.status(404).json({
        success:"false",
        message:"Product Not Found in DB  "
      })
    };

    const updatedProduct = await Product.findOneAndUpdate({ _id: id},req.body,{ new: true});

    console.log("Printing Updated Product --->", updatedProduct)

    res.status(200).json({ 
        success: true, 
        message: "Product Updated Succesfully", 
        data: updatedProduct 
    });


  } catch (err) {
    res.status(500).json({ 
        success: false, 
        message: "Error in updating product", 
        error: err 
    });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    console.log("enetring in delete controller")
    const { id } = req.params;

   const deletedProduct = await Product.findOneAndDelete({_id: id});
   console.log("enetring in controoler");

    res.status(200).json({ 
        success: true, 
        message: "Product Deleted Succcesfully" ,
        deletedProduct:deletedProduct
    });

  } catch (err) {
    res.status(500).json({ 
        success: false, 
        message: "Error deleting product ", 
        error: err 
    });
  }
};

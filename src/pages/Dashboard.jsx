import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createProduct,getAllProducts,deleteProduct } from "../API/ProductService";

import { toast } from 'react-hot-toast'; 

const Dashboard = () => {

  const [products, setProducts] = useState([]);

  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    imageUrl: "",
  });

 // Fetch products on page load
  useEffect(() => {
    const fetchProducts = async () => {
      const AllProduct = await getAllProducts();
      console.log("Getting all Product ",AllProduct)
      setProducts(AllProduct);

    };
    fetchProducts();
  }, []);

  // Handle input changes for the form
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

   //---> asdd Product submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProduct = await createProduct(formData);
      setProducts((prev) => [...prev, newProduct]); // Add new product to the list
      setShowForm(false); 
      toast.success('Product Added Succesfully');

    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("error in Creating New Product ");

    } ;



  };

  //delete handler
async function handleDelete (productId) {
  console.log("clicking on handledeelte function",productId);
  
    try {
      console.log("productID in try catch block ",productId)
      const deletedProduct = await deleteProduct(productId); 
      console.log(deletedProduct)
      console.log("productID in try catch block after api call",productId)
      setProducts((prev) => prev.filter((product) => product._id !== productId));
      toast.success("Product Deleted Successfully");

    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error in Deleting Product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Product List */}
      <h1 className="text-center text-3xl font-semibold text-blue-600 mb-6">Dashboard</h1>

      {/* Add product Buttons */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add Product
      </button>

      {/* Display all  products */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product,index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md mb-4"
            />
            <p> {product._id}</p>
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-lg font-bold text-gray-900">${product.price}</p>

            {/* Add Edit/Delete buttons here -------------------------------->  */}
            <div className="mt-4 space-x-2">
              <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-200"
             
              >

                Edit
              </button>

              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
               onClick={() => handleDelete(product._id)}>

                Delete
              </button>




            </div>

            
          </div>
        ))}
      </div>

      {/* Add Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

          <div className="bg-white rounded-lg p-8 max-w-md w-full">

            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Quantity"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 text-white py-2 px-6 rounded-md hover:bg-gray-500 transition duration-200"
                >
                  Close
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

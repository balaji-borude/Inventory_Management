/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
// const BASE_URL = process.env.REACT_APP_BASE_URL;

//const BASE_URL = import.meta.env.REACT_APP_BASE_URL;

const BASE_URL = "http://localhost:4000/api/v1";
// http://localhost:4000/api/v1/login



export const LoginForm = async(formData)=>{
    try {
        console.log("Entering in function  ")
        const response = await axios.post(`${BASE_URL}/login`,formData,{
            headers: { "Content-Type": "application/json" }, 
        });
        
        // console.log("response of login submission -->",response)

        // token is stored in localStoreage 
        const token = response.data.token; 
        localStorage.setItem("token", token);
        console.log("printing Token After Login", token)

        console.log("API Response:", response.data);
        return response.data;
        
    } catch (error) {
        console.error("Error In Loggin User", error.response?.data);
        throw error; 
    }

};

// SignUp API call
export const SignUpForm = async (formData) => {
    try {
      console.log("Entering in SignUp function");
  
      // Sending POST request for SignUp with user data
      const response = await axios.post(`${BASE_URL}/signup`, formData, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("Response of sign up submission -->", response);
      console.log("API Response:", response.data);
  
      return response.data;
  
    } catch (error) {
      console.error("Error in Signing Up User", error.response?.data);
      throw error;
    }
  };


  // ----> Product Api are Here 

  // eslint-disable-next-line react-refresh/only-export-components
  export const createProduct = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/product/createProduct`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; 

    } catch (error) {
      console.error("Error creating product:", error);
      throw error; 
    }
  };
  


// get all product 
// Function to get all products
export const getAllProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/getProducts`);
      return response.data.data; 

    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };


  // delete product
  export const deleteProduct = async (productId) => {
    
    try {
      const token = localStorage.getItem("token");
      console.log("Token from localStorage:", token);
  
      if (!token) {
        throw new Error("No token available");
      }
  
      const response = await axios.delete(
        `${BASE_URL}/product/deleteProduct/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Product deleted successfully:", response.data);
      return response.data;
      
    } catch (error) {
      console.error("Failed to delete product", error);
      throw error;
    }
  };
  
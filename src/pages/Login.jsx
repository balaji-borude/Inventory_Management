import React, { useState } from "react";
import { LoginForm } from "../API/ProductService";
import { toast } from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom'; 

const Login = () => {

  const navigate = useNavigate(); 
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data--> ", formData);

    try {
      const result = await LoginForm(formData);
      
      console.log("Login Success:", result);
      toast.success('Login successful! Redirecting to Dashboard...');
      
      
      setTimeout(() => {
        navigate('/dashboard'); 
      }, 2000); 
    } catch (error) {
      
      console.error("Login Failed:", error.message);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* heading */}
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login
        </h2>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

      <div className="flex space-x-3 mt-3">
        <p> Not having account </p>
          <button onClick={()=> navigate("/signUp")}
            className="text-blue-600 hover:cursor-pointer">  Create Account</button>
      </div>

      </div>
    </div>
  );
};

export default Login;

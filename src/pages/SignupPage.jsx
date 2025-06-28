import React, { useState } from 'react';
import { Accessibility } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';


// Signup Page Component
 const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata,setFormdata] = useState({firstname:"", lastname:"", email:"", password:"", plan:"Free Plan"});
  const [error, setError] = useState("");
  const handleSubmit = async (e) =>{
    e.preventDefault();
    // Basic validation
    if (!formdata.firstname || !formdata.lastname || !formdata.email || !formdata.password) {
      setError("All fields are required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      setError("Please enter a valid email address");
      return;
    }
    // console.log("Form submitted successfully", formdata);
    try {
        const response = await axios.post('/api/v1/users/register',formdata)
        localStorage.setItem('token', response.data.token);
         setError("");
         alert("Signup successful! You can now log in.");
         navigate('/login');
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred during signup. Please try again later.");
    }
   
  }
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };
  return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <Accessibility className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
        <p className="mt-2 text-sm text-gray-600">Start making the web accessible today</p>
      </div>
      <div className="bg-white py-8 px-6 shadow-sm rounded-lg">
        <form
          onSubmit={handleSubmit}
         className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
              <input
              name='firstname'
              onChange={handleChange}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
              <input
              name='lastname'
                type="text"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input
              name='email'
              type="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              name='password'
              type="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Create a password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Plan Selection</label>
            <select
              name='plan' 
             onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <option>Free Plan</option>
              <option>Pro Plan - $29/month</option>
              <option>Enterprise Plan - $99/month</option>
            </select>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
            <label className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Create Account
          </button>
          {error && <div className="text-red-500 text-xl   mt-2 text-center">{error}</div>}
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Google
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              GitHub
            </button>
          </div>
        </div>
        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <button
            onClick={() => navigate('/login')}
            type="button"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>)
};

export default SignupPage

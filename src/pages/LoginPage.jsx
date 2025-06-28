import React,{useState} from 'react';
import { Accessibility } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


// Login Page Component
const LoginPage = ({ setCurrentPage }) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!loginData.email || !loginData.password) {
      setError("All fields are required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    //console.log("Form submitted successfully", loginData);
    try {
      const response = await axios.post('/api/v1/users/login', loginData);
      
      localStorage.setItem('token', response.data.token);
      setError(""); 
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      // Dispatch login action if needed
      // dispatch(loginAction(response.data));
      
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login. Please try again later.");
    }
    
    navigate('/dashboard'); 
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <Accessibility className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
        <p className="mt-2 text-sm text-gray-600">Sign in to your AccessEase account</p>
      </div>
      <div className="bg-white py-8 px-6 shadow-sm rounded-lg">
        <form 
        onSubmit={handlesubmit}
        className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
              <label className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Sign in
          </button>
          {error && <div className="text-red-500 text-xl mt-2 text-center">{error}</div>}
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <button
            type="button"
            onClick={() => setCurrentPage('signup')}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  </div>

  )
  
};

export default LoginPage

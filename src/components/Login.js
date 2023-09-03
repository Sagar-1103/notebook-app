import React,{useState} from 'react'
import { Link } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to an API)
        console.log('Form data submitted:', formData);
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center  bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md sm:w-96">
            <h2 className="text-2xl font-semibold mb-6">Login To Your account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email or username"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Login
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      );
}

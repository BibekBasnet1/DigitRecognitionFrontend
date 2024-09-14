import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { useMutation } from "@tanstack/react-query";  

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async () => {
      // Add your login logic here (e.g., API call)
    },
    onSuccess: () => {
      navigate("/");  
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden ">
      

      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-30 animate-bubble"></div>
      <div className="absolute top-20 right-0 w-24 h-24 bg-gray-200 rounded-full opacity-30 animate-bubble animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-28 h-28 bg-blue-300 rounded-full opacity-30 animate-bubble animation-delay-3000"></div>

      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-bubble animation-delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-bubble animation-delay-2500"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-200 rounded-full opacity-30 animate-bubble animation-delay-3500"></div>
      <div className="absolute top-1/3 left-1/2 w-36 h-36 bg-pink-200 rounded-full opacity-35 animate-bubble animation-delay-1500"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bubble animation-delay-4000"></div>



      <div className="relative z-10 bg-white shadow-lg rounded-lg px-8 py-10 " style={{minWidth: '30%'}}>
        <h2 className="text-3xl font-semibold text-center mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="min-w-72">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-md font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-md font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-10 mb-10 text-lg ">Or Sign In With</p>

        <div className="mt-6 flex justify-center space-x-6">
          <FaGoogle className="text-red cursor-pointer" size={40}  />
          <FaGithub className="text-gray-800 cursor-pointer" size={40} />
          <FaFacebook className="text-blue-600 cursor-pointer" size={40} />
        </div>
          
      </div>
    
    </div>
  
  );
};

export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Assignment Portal</h1>
      <p className="text-lg mb-12">Please select your role to continue</p>
      
      <div className="flex gap-8">
        {/* This is the Student Button */}
        <button 
          onClick={() => navigate('/student')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl"
        >
          Login as Student
        </button>

        {/* This is the Admin Button */}
        <button 
          onClick={() => navigate('/admin')}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-xl"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}

export default Login;
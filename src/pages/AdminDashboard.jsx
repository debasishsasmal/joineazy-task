import React from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Import our fake student data
import { STUDENTS } from '../data/fakeData.js';

// 2. Import our new ProgressBar component
import ProgressBar from '../components/ProgressBar.jsx';

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button 
          onClick={() => navigate('/')} // Button to go back to Login
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Student Progress List Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Student Progress</h2>
        
        {/* We map over the fake student data */}
        {STUDENTS.map((student) => (
          // This is the container for each student row
          <div key={student.id} className="bg-white text-gray-800 shadow-lg rounded-lg p-6 mb-4">
            <div className="flex justify-between items-center">
              {/* Student Name */}
              <span className="text-xl font-semibold">{student.name}</span>
              {/* Progress Percentage Text */}
              <span className="text-lg font-bold text-blue-600">{student.progress}%</span>
            </div>
            
            {/* The Progress Bar */}
            <div className="mt-4">
              <ProgressBar progress={student.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
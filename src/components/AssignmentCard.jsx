import React from 'react';

// This component will receive 'assignment' data as a prop
function AssignmentCard({ assignment, onConfirm }) {
  
  // We can change the button text based on the assignment's status
  const buttonText = assignment.status === 'Submitted' ? '✓ Submitted' : 'Confirm Submission';
  const buttonClass = assignment.status === 'Submitted'
    ? 'bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed'
    : 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded';

  return (
    // This is the main card, styled with Tailwind
    <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 mb-4">
      
      {/* 1. Title */}
      <h3 className="text-2xl font-bold mb-2">{assignment.title}</h3>
      
      {/* 2. Description */}
      <p className="text-gray-600 mb-4">{assignment.description}</p>
      
      {/* 3. Status and Button */}
      <div className="flex justify-between items-center">
        <span 
          className={`font-semibold ${assignment.status === 'Submitted' ? 'text-green-600' : 'text-yellow-600'}`}
        >
          Status: {assignment.status}
        </span>
        
        <button 
  className={buttonClass}
  disabled={assignment.status === 'Submitted'}
  onClick={onConfirm} 
>
  {buttonText}
</button>
      </div>
      
    </div>
  );
}

export default AssignmentCard;
import React, { useState } from 'react'; // 1. Import useState
import { ASSIGNMENTS } from '../data/fakeData.js'; // Import our fake data
import AssignmentCard from '../components/AssignmentCard.jsx';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();

  // 2. Create a state to manage the assignments
  //    This way, we can change the status from "Pending" to "Submitted"
  const [assignments, setAssignments] = useState(ASSIGNMENTS);

  // 3. This function will be passed to each card
  const handleConfirmSubmission = (assignmentId) => {
    // 4. This is the "double-verification flow" required by the task 
    const confirmed = window.confirm(
      "Are you sure you want to confirm this submission? This action cannot be undone."
    );

    if (confirmed) {
      // 5. If confirmed, we update the state
      setAssignments((currentAssignments) =>
        currentAssignments.map((item) =>
          // Find the assignment that was clicked
          item.id === assignmentId 
            // Return a new object for that item with the status changed
            ? { ...item, status: 'Submitted' }
            // Return all other items as they were
            : item
        )
      );
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Student Dashboard</h1>
        <button 
          onClick={() => navigate('/')}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Assignment List Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">My Assignments</h2>
        
        {/* 6. We now map over our STATE variable 'assignments' */}
        {assignments.map((assignment) => (
          <AssignmentCard 
            key={assignment.id} 
            assignment={assignment} 
            // 7. We pass the confirmation function as a prop
            onConfirm={() => handleConfirmSubmission(assignment.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
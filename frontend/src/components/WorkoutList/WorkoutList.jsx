// WorkoutList.js

import React from 'react';

const WorkoutList = ({ workouts, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:1000/api/v1/workouts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      onDelete(id); 
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <div key={workout._id} className="workout-card">
          <h2>{workout.name}</h2>
          <p>{workout.info}</p>
          <p>Reps: {workout.reps}</p>
          <button onClick={() => handleDelete(workout._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;

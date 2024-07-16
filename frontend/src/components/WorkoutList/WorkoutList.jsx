import React from 'react';

const WorkoutList = ({ workouts, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/workouts/${id}`, {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <div key={workout._id} className="workout-card">
          <h2>{workout.title}</h2>
          <p>{workout.info}</p>
          <p>Reps: {workout.reps}</p>
          <div className="footer"><button onClick={() => handleDelete(workout._id)}>Delete</button>
          <p className='date'>Date: {formatDate(workout.createdAt)}</p></div>
          
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;

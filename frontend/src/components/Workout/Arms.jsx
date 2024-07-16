// Arms.js

import React, { useEffect, useState } from 'react';
import WorkoutList from '../WorkoutList/WorkoutList';

const Arms = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`http://localhost:1000/api/v1/workouts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  const handleDelete = (deletedId) => {
    setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout._id !== deletedId));
  };

  return (
    <>
      <WorkoutList workouts={workouts} onDelete={handleDelete} />
    </>
  );
};

export default Arms;

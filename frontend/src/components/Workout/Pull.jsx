import React, { useEffect, useState } from 'react';
import WorkoutList from '../WorkoutList/WorkoutList';

const Pull = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`https://mernapp-qqb2.onrender.com/api/workouts?type=pull`);
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

export default Pull;

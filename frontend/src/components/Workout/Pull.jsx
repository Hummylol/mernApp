import React, { useEffect, useState } from 'react';
import WorkoutList from '../WorkoutList/WorkoutList';

const Arms = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const userId = localStorage.getItem('userId');

        if (!userId) {
          console.error('User ID not found');
          return;
        }

        const response = await fetch(`http://localhost:1000/api/v2/getwork/pull`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setWorkouts(data.workout);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
    <WorkoutList workouts={workouts} />
    </>
  );
};

export default Arms;

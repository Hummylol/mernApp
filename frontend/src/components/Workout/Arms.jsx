import React, { useEffect, useState } from 'react';
import WorkoutList from '../WorkoutList/WorkoutList';
import { ClipLoader } from 'react-spinners';

const Arms = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
        try {
          const response = await fetch(`https://mernapp-qqb2.onrender.com/api/workouts?type=arms`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWorkouts(data);
        } catch (error) {
          console.error("Error fetching workouts:", error);
        } finally {
          setLoading(false);
        }
    };

    fetchWorkouts();
  }, []);

  const handleDelete = (deletedId) => {
    setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout._id !== deletedId));
  };

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <ClipLoader size={50} color={"white"} loading={loading} />
        </div>
      ) : (
        <WorkoutList workouts={workouts} onDelete={handleDelete} />
      )}
    </>
  );
};

export default Arms;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Workout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bahar">
        <div className="andhar"><button onClick={() => {navigate('/workouts/arms')}}>Arms</button></div>
        <div className="andhar"><button onClick={() => navigate('/workouts/push')}>push</button></div>
        <div className="andhar"><button onClick={() => navigate('/workouts/pull')}>Pull</button></div>
      </div>
    </>
  );
};

export default Workout;

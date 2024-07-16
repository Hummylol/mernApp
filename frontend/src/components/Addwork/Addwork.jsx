import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddWorkout = () => {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [reps, setReps] = useState('');
  const [type, setType] = useState('push');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !info || !reps || !type) {
      alert('All fields are required!');
      return;
    }

    try {
      const response = await fetch(`https://mernapp-qqb2.onrender.com/api/workouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, info, reps, type }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Workout added successfully:', data);

      // Reset the form fields
      setTitle('');
      setInfo('');
      setReps('');
      setType('push');

      // Navigate to the workouts page
      navigate('/workouts');
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="info">Info</label>
          <input
            type="text"
            id="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reps">Reps</label>
          <input
            type="text"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="arms">Arms</option>
          </select>
        </div>
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
